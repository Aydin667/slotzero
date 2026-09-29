# SlotZero — X Brand Package

## Display name
**SlotZero**

## Suggested @username options
1. `@slotzerolol` (matches domain)
2. `@slotzero_sol`
3. `@slotzerofun`
4. `@launchslotzero`
5. `@slot0launch`
6. `@sealedatzero`

(Check availability at registration time; prefer 1, falling back in order.)

## Bio (≤160 chars)
> Pump.fun launches with the dev bag provably locked before the token exists. One atomic bundle: create + buy + lock. Verify any seal on-chain. slotzero.lol

(158 chars)

## Profile
- PFP: `/public/branding/pfp.png` (pixel lock-zero mark)
- Banner: `/public/branding/banner.png`
- Pinned: launch tweet below.

---

## Launch tweet (main)

> every pump.fun launch has the same first question: "when does the dev dump?"
>
> we built SlotZero so the answer is on-chain before the token exists.
>
> launches through SlotZero are one atomic bundle: the token is created, the dev allocation is bought, and it lands in an audited vesting escrow — same slot, all or nothing. if the lock fails, the token is never created.
>
> no scanner, no trust-me badge. the escrow is Jupiter Lock, the proof is a certificate any bot can query, and the whole thing is verifiable from the bundle signature.
>
> pump.fun token, pump.fun curve, pump.fun graduation. the only difference is the dev bag is provably locked from slot zero.
>
> live now → slotzero.lol

## Short launch tweet

> pump.fun launches, except the dev's tokens are locked in on-chain vesting before the token exists.
>
> one atomic bundle. create + buy + lock. all or nothing.
>
> slotzero.lol

## Technical launch tweet

> how SlotZero works, in one bundle (≤5 txs, one slot, atomic via Jito):
>
> tx1: pump.fun create_v2 + dev buy — nothing trades before the dev buy
> tx2: dev tokens → Jupiter Lock escrow (cliff + linear, public) + Lighthouse assertion that the dev wallet holds 0 unlocked tokens — else the entire bundle reverts
> tx3: on-chain launch certificate (Solana Attestation Service), queryable by mint
>
> the token cannot exist with an unescrowed dev bag. not "we checked" — structurally cannot.
>
> verifier API for terminals/bots is public: slotzero.lol/api/verify/<mint>

## Follow-up tweets (5)

1. > things SlotZero guarantees: dev allocation locked from slot 0, schedule immutable, dev buy is first.
   > things nobody can guarantee on a curve they don't own: third-party snipers.
   > we print both lists on the certificate. trust products die from overclaiming.

2. > the dirty secret of "dev sell" alerts: they fire after the bundled wallets already dumped. detection is post-hoc.
   > a seal is pre-hoc. the lock exists before the first trade does. different category of guarantee.

3. > creators: you're already buying your own launch. you're just doing it covertly, and every scanner flags you as a rugger for it.
   > declare it, lock it, and turn your allocation into the reason people buy instead of the reason they don't.

4. > every seal is public JSON: GET slotzero.lol/api/verify/<mint>
   > returns escrow account, vesting schedule, dev buy size, bundle sig, live lock balance. TG bots and terminals: plug it in, filter for sealed launches.

5. > $SLOT0 launched through SlotZero itself — Diamond seal, 30d cliff + 90d linear, certificate public. dogfooding is the roadmap.

## Thread — how the technology works

> 1/ SlotZero explains itself in one sentence: pump.fun launches where the dev bag is provably locked before the token exists.
> here's the whole machine, no hand-waving 🧵

> 2/ background: >50% of pump.fun launches get sniped in their first block, and the most profitable snipers are funded by the deployer. creators bundle-buy covertly because there's no legitimate way to hold an allocation. traders' tools catch it after the dump. (data: Pine Analytics, "exit liquidity machines")

> 3/ the unlock: two facts about pump.fun's own program.
> a) the mint keypair is generated client-side — we control composition of the create tx.
> b) create_v2 + buy compose atomically — the dev buy can be literally inseparable from token creation.

> 4/ a SlotZero launch is one Jito bundle — up to 5 txs that land in the same slot or not at all.
> tx1: create_v2 + dev buy on pump.fun's program. real token, real curve.

> 5/ tx2: 100% of the dev's tokens go into a Jupiter Lock escrow — open-source, audited (OtterSec + Sec3), zero fees, visible on lock.jup.ag — with the cliff + linear schedule the creator declared on the launch form.

> 6/ same tx2: a Lighthouse assertion — an instruction that fails if on-chain state doesn't match expectations. ours asserts the dev wallet ends the bundle with zero unlocked tokens. if anything is off by a lamport, the whole bundle — including token creation — reverts.

> 7/ tx3: we write a launch certificate on-chain via Solana Attestation Service: mint, dev buy size, escrow address, schedule, bundle signature. indexed, queryable, permanent.

> 8/ so "the dev can't dump" isn't a badge we award. it's a property of how the token was born. anyone can verify it from the bundle signature without trusting us at all.

> 9/ what we don't claim: we can't stop third-party snipers (nobody can on a curve they don't own), and a determined bad actor can fund fresh wallets — which is exactly what funding-graph scanners are for. the certificate includes the creator wallet so those tools get better data, not worse.

> 10/ the token is a normal pump.fun token: same curve, same graduation to PumpSwap, tradeable everywhere. we added one property: it was born locked.
> launch one: slotzero.lol

## Content rules
- No rocket/fire emoji clusters, no "revolutionary/game-changing", no engagement-bait questions.
- Every claim in marketing must be verifiable from the certificate; if it isn't, don't post it.
- Always link certificates, not screenshots alone.
