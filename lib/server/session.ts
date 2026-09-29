import "server-only";
/**
 * In-memory launch sessions. A prepare creates a session holding the exact
 * unsigned transactions we issued plus the server-side keypairs; execute
 * consumes it after verifying the wallet returned byte-identical messages.
 */
import { randomBytes } from "crypto";
import type { Keypair } from "@solana/web3.js";

export interface LaunchSession {
  id: string;
  createdAt: number;
  creator: string;
  mint: Keypair;
  escrowBase: Keypair;
  /** serialized unsigned tx messages (base64) in signing order */
  unsignedTxs: string[];
  /** attestation tx is fully server-signed */
  attestationTx: string;
  meta: {
    name: string;
    symbol: string;
    metadataUri: string;
    devBuyLamports: string;
    tokensRaw: string;
    escrow: string;
    cliffTs: number;
    vestEndTs: number;
    schedule: string;
  };
  consumed: boolean;
  bundleId?: string;
}

const SESSION_TTL_MS = 10 * 60 * 1000;
const sessions = new Map<string, LaunchSession>();

function sweep() {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (now - s.createdAt > SESSION_TTL_MS) sessions.delete(id);
  }
}

export function createSession(
  data: Omit<LaunchSession, "id" | "createdAt" | "consumed">,
): LaunchSession {
  sweep();
  const id = randomBytes(16).toString("hex");
  const session: LaunchSession = {
    ...data,
    id,
    createdAt: Date.now(),
    consumed: false,
  };
  sessions.set(id, session);
  return session;
}

export function getSession(id: string): LaunchSession | undefined {
  sweep();
  return sessions.get(id);
}

/** Bundle-id → mint mapping for status polling after the session expires. */
const bundleMints = new Map<string, { mint: string; at: number }>();

export function rememberBundle(bundleId: string, mint: string) {
  bundleMints.set(bundleId, { mint, at: Date.now() });
  for (const [id, v] of bundleMints) {
    if (Date.now() - v.at > 60 * 60 * 1000) bundleMints.delete(id);
  }
}

export function mintForBundle(bundleId: string): string | undefined {
  return bundleMints.get(bundleId)?.mint;
}
