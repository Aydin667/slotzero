import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "The full mechanics of a SlotZero sealed launch: atomic Jito bundle, Jupiter Lock escrow, Lighthouse assertions, and on-chain certificates.",
};

const PROGRAMS = [
  {
    name: "Pump.fun",
    id: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P",
    role: "Token creation (create_v2) and the bonding curve. Your token is a normal Pump.fun token.",
  },
  {
    name: "Jupiter Lock",
    id: "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn",
    role: "The vesting escrow. Open-source, audited by OtterSec + Sec3, zero fees. SlotZero has no authority over it.",
  },
  {
    name: "Lighthouse",
    id: "L2TExMFKdjpN9kozasaurPirfHy9P8sbXoAN1qA3S95",
    role: "Assertion program. Reverts the whole bundle unless your wallet ends with zero unlocked tokens.",
  },
  {
    name: "Solana Attestation Service",
    id: "22zoJMtdu4tQc2PzL74ZUT7FrwgB1Udec8DdW4yw4BdG",
    role: "The launch certificate registry (Solana Foundation program). One attestation per seal, keyed by mint.",
  },
];

export default function HowPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-12">
      <div>
        <h1 className="font-pixel text-2xl mb-3">
          <span className="text-green">&gt;</span> HOW IT WORKS
        </h1>
        <p className="text-muted leading-relaxed">
          SlotZero makes one claim and makes it structural:{" "}
          <span className="text-text">
            the creator&apos;s allocation is locked before the token exists.
          </span>{" "}
          Here is the entire machine — no hand-waving.
        </p>
      </div>

      <section>
        <h2 className="font-mono text-sm text-green mb-4">THE PROBLEM</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>
            More than half of Pump.fun launches are bought by bots in their
            very first block, and the most profitable snipers are funded by
            the token&apos;s own deployer (Pine Analytics,{" "}
            <a
              className="text-green hover:underline"
              href="https://pineanalytics.substack.com/p/exit-liquidity-machines"
              target="_blank"
              rel="noopener noreferrer"
            >
              &ldquo;Exit Liquidity Machines&rdquo;
            </a>
            ). Honest creators bundle-buy their own launches covertly — because
            there is no legitimate way to hold an allocation — and get flagged
            as ruggers for it.
          </p>
          <p>
            Every existing defense is a scanner: it detects the dump{" "}
            <em>after</em> it happens. Nothing is enforced at launch time, on
            the venue where the launches actually happen.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-sm text-green mb-4">THE BUNDLE</h2>
        <div className="border border-line rounded-sm overflow-hidden font-mono text-sm">
          {[
            {
              t: "tx 1 — create + buy",
              d: "Pump.fun's create_v2 instruction and your dev buy share one transaction. It is physically impossible for anyone to trade before your buy — they are the same transaction.",
            },
            {
              t: "tx 2 — lock + assert",
              d: "Your entire dev buy is deposited into a Jupiter Lock vesting escrow with the schedule you declared. cancel_mode and update_recipient_mode are NONE: nobody — not you, not SlotZero — can cancel it or redirect it. A Lighthouse assertion then requires your wallet to hold exactly zero unlocked tokens.",
            },
            {
              t: "tx 3 — certificate",
              d: "SlotZero writes a Solana Attestation Service record: mint, escrow address, dev buy size, schedule, and the launch signature. Any bot can find it from the mint address alone.",
            },
          ].map((s) => (
            <div key={s.t} className="border-b border-line last:border-0 px-5 py-4">
              <div className="text-text mb-1">{s.t}</div>
              <p className="text-xs text-muted leading-relaxed">{s.d}</p>
            </div>
          ))}
          <div className="px-5 py-4 bg-green-dim/15">
            <p className="text-xs text-green leading-relaxed">
              The three transactions are submitted as one Jito bundle: they
              land in the same slot, in order, or none of them land at all.
              There is no state of the world where the token exists and the
              lock does not.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-sm text-green mb-4">
          WHAT IS AND ISN&apos;T GUARANTEED
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="border border-green-dim rounded-sm p-5">
            <div className="font-mono text-xs text-green mb-3">GUARANTEED</div>
            <ul className="space-y-2 text-sm text-muted">
              <li>· dev allocation locked from the token&apos;s first slot</li>
              <li>· unlock schedule public and immutable</li>
              <li>· dev buy executes before any other trade</li>
              <li>· lock cannot be cancelled by anyone</li>
              <li>· certificate machine-verifiable forever</li>
            </ul>
          </div>
          <div className="border border-amber/40 rounded-sm p-5">
            <div className="font-mono text-xs text-amber mb-3">
              NOT GUARANTEED
            </div>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                · third-party snipers can still buy early — no venue can stop
                this without owning the curve
              </li>
              <li>
                · a bad actor can fund separate wallets; that activity stays
                visible to funding-graph tools, and the certificate names the
                creator wallet to help them
              </li>
              <li>· price. this is a memecoin launchpad, not a promise</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-sm text-green mb-4">
          PROGRAMS WE COMPOSE
        </h2>
        <p className="text-sm text-muted mb-4 leading-relaxed">
          SlotZero deploys no smart contract of its own. A launch composes
          four battle-tested programs; our code only builds transactions you
          sign in your own wallet.
        </p>
        <div className="border border-line rounded-sm divide-y divide-line overflow-x-auto">
          {PROGRAMS.map((p) => (
            <div key={p.id} className="px-5 py-4">
              <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                <span className="font-mono text-sm text-text">{p.name}</span>
                <a
                  href={`https://solscan.io/account/${p.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-muted hover:text-green break-all transition-colors"
                >
                  {p.id}
                </a>
              </div>
              <p className="font-mono text-xs text-muted leading-relaxed">
                {p.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-sm text-green mb-4">FOR BOTS + TERMINALS</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          The verifier is a public API. Filter for sealed launches, show seal
          state next to any mint:
        </p>
        <pre className="border border-line bg-surface rounded-sm px-4 py-3 font-mono text-xs text-text overflow-x-auto">
{`GET https://slotzero.lol/api/verify/<mint>
GET https://slotzero.lol/api/launches`}
        </pre>
      </section>

      <div className="border-t border-line pt-8">
        <Link
          href="/launch"
          className="inline-block font-mono bg-green text-bg font-medium px-6 py-2.5 rounded-sm hover:bg-green-hi transition-colors"
        >
          Launch sealed →
        </Link>
      </div>
    </div>
  );
}
