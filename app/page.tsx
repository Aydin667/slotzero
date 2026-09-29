import Link from "next/link";
import Image from "next/image";
import { SealDemo } from "@/components/seal-demo";
import { RecentLaunches } from "@/components/recent-launches";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <section className="scanlines border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="flex flex-col items-start gap-6 max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-muted border border-line rounded-sm px-3 py-1.5">
              <span className="text-green pulse-dot">●</span>
              real pump.fun tokens · real curve · real graduation
            </div>
            <h1 className="font-pixel text-3xl sm:text-5xl leading-tight">
              LAUNCHES
              <br />
              BORN <span className="text-green">LOCKED</span>
              <span className="text-green cursor-blink">▌</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
              Launch Pump.fun tokens with your dev bag{" "}
              <span className="text-text">provably locked before the token exists</span>.
              Create, buy, and lock in one atomic bundle — if the lock fails,
              the token is never created.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/launch"
                className="font-mono text-base bg-green text-bg font-medium px-6 py-2.5 rounded-sm hover:bg-green-hi active:translate-y-px transition-all"
              >
                Launch →
              </Link>
              <Link
                href="/how"
                className="font-mono text-base border border-line text-text px-6 py-2.5 rounded-sm hover:border-green-dim hover:bg-surface transition-all"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* demo */}
      <section className="mx-auto max-w-6xl px-4 -mt-8 relative z-10">
        <SealDemo />
      </section>

      {/* the problem, in numbers */}
      <section className="mx-auto max-w-6xl px-4 mt-20">
        <div className="grid gap-px sm:grid-cols-3 bg-line border border-line rounded-sm overflow-hidden">
          {[
            {
              n: ">50%",
              t: "of pump.fun launches are sniped in their first block",
              s: "Pine Analytics, “Exit Liquidity Machines”",
            },
            {
              n: "0",
              t: "tools that enforce anything at launch — scanners only detect after the dump",
              s: "bundle scanners fire post-hoc",
            },
            {
              n: "1 slot",
              t: "is all SlotZero needs: the lock exists before the first trade does",
              s: "atomic by construction, not by promise",
            },
          ].map((c) => (
            <div key={c.n} className="bg-surface p-6">
              <div className="font-pixel text-2xl text-green mb-2">{c.n}</div>
              <div className="text-sm text-text leading-relaxed">{c.t}</div>
              <div className="font-mono text-[11px] text-muted mt-3">{c.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* how it works, 3 steps */}
      <section className="mx-auto max-w-6xl px-4 mt-20">
        <h2 className="font-mono text-sm text-muted mb-6">
          <span className="text-green">&gt;</span> HOW IT WORKS
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              k: "01",
              t: "Declare the seal",
              d: "Fill the normal Pump.fun launch form, plus two numbers: your dev buy and your vesting schedule (e.g. 30-day cliff, 90-day linear).",
            },
            {
              k: "02",
              t: "Sign one bundle",
              d: "Token creation, your dev buy, and the escrow deposit land in a single atomic Jito bundle. A Lighthouse assertion reverts everything if your wallet keeps a single unlocked token.",
            },
            {
              k: "03",
              t: "Trade with proof",
              d: "The launch gets an on-chain certificate anyone can verify — buyers see a live-checked seal instead of trusting a screenshot.",
            },
          ].map((s) => (
            <div key={s.k} className="border border-line bg-surface rounded-sm p-6">
              <div className="font-pixel text-xs text-green mb-4">{s.k}</div>
              <div className="font-medium text-lg mb-2">{s.t}</div>
              <p className="text-sm text-muted leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* recent launches */}
      <section className="mx-auto max-w-6xl px-4 mt-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-mono text-sm text-muted">
            <span className="text-green">&gt;</span> RECENT SEALED LAUNCHES
          </h2>
          <Link
            href="/launches"
            className="font-mono text-xs text-muted hover:text-green transition-colors"
          >
            view all →
          </Link>
        </div>
        <RecentLaunches limit={6} />
      </section>

      {/* under the hood */}
      <section className="mx-auto max-w-6xl px-4 mt-20">
        <div className="border border-line rounded-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-line bg-surface">
            <h2 className="font-mono text-sm text-muted">
              <span className="text-green">&gt;</span> UNDER THE HOOD
            </h2>
          </div>
          <div className="grid gap-px sm:grid-cols-2 bg-line">
            {[
              {
                t: "Real Pump.fun tokens",
                d: "Tokens are created by Pump.fun's own on-chain program (create_v2). Same bonding curve, same graduation to PumpSwap, tradeable everywhere.",
              },
              {
                t: "Audited escrow, not ours",
                d: "The lock is a Jupiter Lock vesting escrow — open-source, audited by OtterSec and Sec3, visible on lock.jup.ag. SlotZero never holds your tokens.",
              },
              {
                t: "Assertions, not promises",
                d: "A Lighthouse instruction asserts your wallet ends the bundle with zero unlocked tokens. If not, the whole bundle — token included — reverts.",
              },
              {
                t: "Certificates for bots",
                d: "Every seal is a Solana Attestation Service record keyed by mint. GET /api/verify/<mint> returns machine-readable proof for terminals and TG bots.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-bg p-6">
                <div className="font-mono text-sm text-green mb-2">{c.t}</div>
                <p className="text-sm text-muted leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 border border-amber/30 bg-amber/5 rounded-sm px-5 py-4">
          <p className="font-mono text-xs text-amber leading-relaxed">
            WHAT A SEAL DOES NOT DO: it cannot stop third-party snipers (no
            venue can, without owning the curve), and it cannot stop a
            determined bad actor funding fresh wallets — that stays visible to
            funding-graph scanners. A seal makes one thing structurally true:
            the creator&apos;s declared allocation cannot be dumped on you.
          </p>
        </div>
      </section>

      {/* bottom CTA */}
      <section className="mx-auto max-w-6xl px-4 mt-20">
        <div className="dotgrid border border-line rounded-sm px-6 py-14 text-center">
          <Image
            src="/favicon-32.png"
            alt=""
            width={40}
            height={40}
            className="pixelated mx-auto mb-5"
          />
          <h2 className="font-pixel text-xl sm:text-2xl mb-3">
            SEAL YOUR NEXT LAUNCH
          </h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            Your allocation becomes the reason people buy — not the reason they
            don&apos;t.
          </p>
          <Link
            href="/launch"
            className="inline-block font-mono bg-green text-bg font-medium px-8 py-3 rounded-sm hover:bg-green-hi active:translate-y-px transition-all"
          >
            Launch →
          </Link>
        </div>
      </section>
    </div>
  );
}
