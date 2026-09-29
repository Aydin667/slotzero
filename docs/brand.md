# SlotZero — Brand Identity

## Name

**SlotZero** — the launch happens in the token's first slot: creation, dev buy, lock, and certificate land atomically in slot 0 of the token's life. The name *is* the technology.

Candidates considered (20): SlotZero, Oath, Sealed, Receipts, Latch, BlockZero, Covenant, Vow, Bound, Ironbag, BagLock, Vaulted, Notary, Warrant, TrenchProof, Cleanlaunch, FirstBlock, GenesisLock, Provenance, Keyfair.

Shortlist reasoning: *BlockZero* conflicts with Blockzero Labs; *Fairblock* conflicts with the FHE chain; *Leash*-type dog names conflict with $LEASH (Shiba ecosystem); *Oath*/*Vow* are evocative but generic and don't name the mechanism; *Receipts* is funny but reads as an analytics product; *Unruggable/rug-proof* naming overpromises (legal + credibility risk). **SlotZero** won on: names the actual mechanism, short, pronounceable, crypto-native (slots are Solana-native vocabulary), clean X handle space, no significant conflicts (checked Sept 2026 — nearest neighbors are `0slot.trade`, an unrelated tx-landing service, and slot-machine games; no launchpad/token conflicts). Domain secured: **slotzero.lol**.

## Coin

- **Coin name:** SlotZero
- **Ticker:** `$SLOT0`

The coin is the project's own token, launched through SlotZero itself with the deepest available seal — the platform dogfooding its own technology is the launch story.

## Tagline

**"Launches born locked."**

Secondary lines: "Pump.fun launches with the dev bag provably locked from slot zero." / "Don't trust the dev. Verify the seal."

## Voice
Technical, dry, confident. We state exactly what is guaranteed and exactly what isn't — the honesty is the brand. No "revolutionary", no rocket emojis. Reads like an infra team that ships.

## Visual identity

**Aesthetic:** phosphor terminal / launch-control. Near-black CRT field, a single phosphor-green signal color, amber for caution states, pixel-art iconography, scanline texture used sparingly. Not vaporwave, not glassmorphism, no gradients as decoration.

### Color system
| Token | Hex | Use |
|---|---|---|
| `bg` | `#0A0A0C` | page background |
| `surface` | `#111114` | cards, panels |
| `surface-2` | `#1A1A1F` | raised elements, inputs |
| `line` | `#26262C` | borders, dividers |
| `text` | `#E8E6E1` | primary text |
| `muted` | `#8B8B93` | secondary text |
| `green` | `#46E87A` | primary accent — "sealed", CTAs, success |
| `green-dim` | `#1C4A2C` | accent borders/fills |
| `amber` | `#FFB224` | warnings, unverified states |
| `red` | `#FF5C5C` | errors, failed checks |

Light theme: not offered. The product is a terminal; it is dark. (Site sets explicit colors, no system-theme dependence.)

### Typography
- **Display / logo:** Silkscreen (Google Fonts, pixel font) — logo, section labels, big numerals.
- **UI / body:** Space Grotesk — headings and prose.
- **Data / code:** JetBrains Mono — addresses, amounts, terminal panels, tables.

### Logo
Wordmark `SLOTZERO` in Silkscreen with the `0` rendered as the padlock mark. Mark alone: **pixel padlock whose shackle is a perfect zero** — the "lock-zero". Green on near-black.

### Mascot
None. The lock-zero mark carries the identity; a mascot would soften a trust product.

### UI design language
- Panels with 1px `line` borders, 2px radius (near-square, terminal-like), no drop shadows — elevation via border + surface steps.
- Section headers as terminal prompts: `> LAUNCH`, `> VERIFY`.
- Live data in mono with tabular numerals; addresses always truncated middle with copy affordance.
- Checks render as `[ OK ]` / `[FAIL]` / `[ .. ]` status cells, green/red/amber.
- Motion: 120–180ms ease-out state transitions; a single "seal stamp" animation on successful launch; blinking block cursor accents. No parallax, no scroll-jacking.
- Buttons: solid green (primary), outline (secondary), destructive red outline. All states designed: hover (brighten 8%), active (translate-y 1px), disabled (40% + no pointer), loading (inline spinner replaces label icon).

## Asset specs
- PFP `/public/branding/pfp.png`: 1024×1024, 32×32 grid ×32 scale, lock-zero mark, ≤8 colors, reads at 48px.
- Banner `/public/branding/banner.png`: 1500×500, wordmark + tagline left-of-center inside X safe area, seal-pipeline diagram (CREATE + BUY + LOCK → one slot) right.
- Favicon: 32×32 derivative of the mark.
- OG image 1200×630: mark + "Launches born locked." + slotzero.lol.
