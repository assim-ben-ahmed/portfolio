# Design system — Assim Ben Ahmed Portfolio v2

Source: `ui-ux-pro-max` `--design-system "AI engineer portfolio dark purple animated"` (motion 6, density 4),
plus `--domain color/style/typography/ux` searches. The skill returned a *light* AI-purple palette
(AI Photo/Avatar + AI/Chatbot profiles) and the **Dark Mode (OLED)** style; the dark tokens below keep the
skill's purple/pink hues and apply the OLED style rules. Contrast verified with a WCAG script.

Tokens live in `src/styles/tokens.css` — components never use raw hex.

## Pattern
Hero + proof + CTA. CTA in hero and again at the bottom (Contact). Sections on Home:
Hero → Highlights (6 count-up tiles) → Featured projects (3) → Leadership teaser → Testimonials → Contact.

## Color (dark only)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--bg` | `#0B0716` | page background (deep violet-black) | — |
| `--surface` | `#120B22` | alternating section bands | — |
| `--card` | `#17102A` | cards, tiles | — |
| `--border` | `#2C2049` | hairlines | non-text |
| `--text` | `#EEEAF8` | body + headings | 16.8:1 on bg |
| `--text-muted` | `#A9A1C4` | secondary text | 8.1:1 bg · 7.5:1 card |
| `--primary` | `#7C3AED` | button fills, glows (skill primary) | white on it 5.7:1 |
| `--primary-strong` | `#6D28D9` | button hover | white on it 7.1:1 |
| `--primary-text` | `#B79CFF` | purple text, links, typewriter | 8.7:1 bg |
| `--accent` | `#F472B6` | pink "generation" accent, sparing | 7.5:1 bg |
| `--success` | `#4ADE80` | "Available now" dot | 10.5:1 card |
| `--ring` | `#B79CFF` | focus ring (2px + 2px offset) | — |

## Typography
- Headings: **Space Grotesk** (variable) — tech/startup character, from the skill's "Tech Startup" pairing.
- Body/UI: **Inter** (variable) — the design-system pick; highly legible.
- Accent: **JetBrains Mono** — typewriter line, stack chips, small labels (from "Developer Mono").
- Self-hosted via `@fontsource-variable` (no Google Fonts round-trip → better LCP).
- Scale (fluid): h1 `clamp(2.5rem, 6vw, 4.5rem)` · h2 `clamp(1.75rem, 3.5vw, 2.5rem)` · h3 1.25rem · body 1rem/1.6 · small .875rem. Min text 12px.

## Spacing & shape
4-pt scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96. Container max 1160px, gutter 20px (mobile) / 32px.
Radius: 10px controls, 18px cards, 999px pills. Touch targets ≥ 44×44.

## Effects
- Glow cards: 1px border + purple box-shadow glow on hover/focus, lift `translateY(-4px)`, 200ms.
- Particle canvas: drifting dots + faint links between near neighbours (a "network" nod), DPR-aware,
  paused when the tab is hidden, density scaled to viewport.
- No emoji icons — Lucide SVG + inline brand SVGs (GitHub, LinkedIn).

## Motion
- Scroll reveal: fade + 24px slide-up, 450ms, stagger 60–80ms, once.
- Count-up on highlight tiles when in view, 1.2s ease-out.
- Typewriter: 70ms type / 35ms delete / 1.6s hold.
- Page transitions: fade/slide 250ms; project card → detail via Framer Motion shared `layoutId`.
- Exit faster than enter. `prefers-reduced-motion`: no particles movement, no typewriter (static list),
  no reveals/count-ups — final states rendered immediately.

## Pre-delivery checklist (from the skill)
- [ ] No emojis as icons · [ ] cursor-pointer on clickables · [ ] hover transitions 150–300ms
- [ ] contrast ≥ 4.5:1 · [ ] visible focus · [ ] reduced motion respected
- [ ] responsive at 360 / 375 / 768 / 1024 / 1440, no horizontal scroll
