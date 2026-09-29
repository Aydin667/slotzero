/**
 * Program IDs and protocol constants. Everything here is public information;
 * secrets live only in environment variables read by lib/server/env.ts.
 */

// Pump.fun bonding curve program (verified against pump-public-docs, Sept 2026)
export const PUMP_PROGRAM_ID = "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
// PumpSwap AMM (graduation target)
export const PUMP_AMM_PROGRAM_ID = "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA";
// Jupiter Lock (locker) — open-source, audited by OtterSec + Sec3
export const LOCKER_PROGRAM_ID = "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn";
// Lighthouse assertion program — audited by OtterSec
export const LIGHTHOUSE_PROGRAM_ID = "L2TExMFKdjpN9kozasaurPirfHy9P8sbXoAN1qA3S95";
// Solana Attestation Service (Solana Foundation)
export const SAS_PROGRAM_ID = "22zoJMtdu4tQc2PzL74ZUT7FrwgB1Udec8DdW4yw4BdG";

// SAS registry naming (deterministic PDAs from the platform authority)
export const SAS_CREDENTIAL_NAME = "SlotZero";
export const SAS_SCHEMA_NAME = "SealedLaunchV1";
export const SAS_SCHEMA_VERSION = 1;

// Launch constraints
export const MIN_DEV_BUY_SOL = 0.05;
export const MAX_DEV_BUY_SOL = 10;
export const MIN_TOTAL_VEST_DAYS = 7;
export const MAX_TOTAL_VEST_DAYS = 730;

// Unlock granularity for linear vesting (seconds)
export const VEST_PERIOD_SECONDS = 3600;

export interface SealPreset {
  id: string;
  label: string;
  cliffDays: number;
  linearDays: number;
  blurb: string;
}

export const SEAL_PRESETS: SealPreset[] = [
  {
    id: "sprint",
    label: "Sprint",
    cliffDays: 7,
    linearDays: 30,
    blurb: "7-day cliff, then linear over 30 days",
  },
  {
    id: "standard",
    label: "Standard",
    cliffDays: 14,
    linearDays: 60,
    blurb: "14-day cliff, then linear over 60 days",
  },
  {
    id: "diamond",
    label: "Diamond",
    cliffDays: 30,
    linearDays: 90,
    blurb: "30-day cliff, then linear over 90 days",
  },
];

// Jito tip accounts (public, from Jito docs)
export const JITO_TIP_ACCOUNTS = [
  "96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5",
  "HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe",
  "Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY",
  "ADaUMid9yfUytqMBgopwjb2DTLSokTSzL1zt6iGPaS49",
  "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
  "ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt",
  "DttWaMuVvTiduZRnguLF7jNxTgiMBZ1hyAumKUiL2KRL",
  "3AVi9Tg9Uo68tJfuvoKvqKNWKkC5wPdSSdeBnizKZ6jT",
];

export const SITE_NAME = "SlotZero";
export const SITE_TAGLINE = "Launches born locked.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://slotzero.lol";
