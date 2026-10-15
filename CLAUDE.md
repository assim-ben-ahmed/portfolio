# Assim Ben Ahmed — Portfolio v2 (build brief)

You are building Assim's new personal portfolio. It replaces the old site at
https://assim-ben-ahmed.github.io/portfolio (same URL, same GitHub repo `assim-ben-ahmed/portfolio`).
Audience: recruiters and tech managers in France hiring a 24-month alternance (AI Engineer / Data Scientist).
In 30 seconds they must see: (1) he ships real AI projects, (2) he leads people, (3) how to contact him / get the CV.

## Source of truth

- `_brief/content.md` — ALL site text, English + French, approved by Assim. Use it word for word.
  Never invent metrics, dates, titles, employers, skills or quotes. If something is missing, leave a visible
  `TODO` and tell Assim — do not fill the gap yourself.
- `_brief/assets.md` — every image/video, where it lives, its EN/FR alt text and caption.
- `assets/` — the media, already named and sorted. Do not rename files without updating `_brief/assets.md`.

Hard rules from Assim:
- Power BI PL-300 is training only — never call it a certification.
- Microsoft Imagine Cup 2025: "Participant" — never "selected".
- WellPack: team of 4 interns; describe Assim's own work with "I", never claim the whole platform was solo
  (the Pipedrive automation and the cost-reconciliation mission WERE solo).
- No client data, internal URLs, colleagues' surnames (except where `content.md` names them), phone number
  only inside the CV PDFs — never on a page.
- No design-inspiration credit in the footer: Assim removed "Design inspired by Soumyajit" (Oct 2026). The site is
  an original rebuild that reuses none of his code — keep it that way (never copy code from his repo).

## Design direction

Inspired by Soumyajit's portfolio (https://soumyajit.vercel.app): dark purple theme, floating particle
background, typewriter effect on the hero titles, glowing project cards. Rebuild the look on a modern stack —
do NOT copy his old Create-React-App code. Make it Assim's own:
- Smooth page-to-page transitions: a project card visually expands into its detail page and shrinks back.
- Scroll-reveal animations (fade/slide up, staggered), count-up numbers on the highlight tiles.
- Muted autoplay loop for videos (WellPack demo, BDE event clips) with a poster image fallback.
- Respect `prefers-reduced-motion`: all motion off, static final states.
- Use the `ui-ux-pro-max` skill in `.claude/skills/` for palette, typography, spacing and the
  pre-delivery UX checklist (run its `--design-system` search for "AI engineer portfolio dark purple animated").

## Stack

- React + Vite + TypeScript, React Router (HashRouter, or BrowserRouter + a 404.html redirect, so deep links
  work on GitHub Pages), Framer Motion for transitions, tsparticles (or a light canvas) for the background,
  a typewriter library or a small custom hook.
- Vite `base: '/portfolio/'`.
- i18n: FR/EN toggle in the nav, remembered in localStorage, default from browser language; all strings in
  `src/i18n/en.ts` and `src/i18n/fr.ts` built from `_brief/content.md`. The CV button serves the FR CV on the
  French site and the EN CV on the English site.
- Project data in `src/data/projects.ts` (one object per project: slug, filter, title, EN/FR one-liner,
  EN/FR detail, stack, media, links) so adding a project = adding one object.
- Blog: Markdown posts in `src/content/blog/*.md` with front-matter (title, date, tags, lang, summary);
  list page with filters and reading time; ships empty with the empty-state text.

## Pages (see the site map in `content.md`)

Home `/` · About `/about` · Projects `/projects` · Project detail `/projects/:slug` ·
Leadership & Community `/leadership` · Achievements `/achievements` (+ Morocco trip page) · Blog `/blog` ·
Contact (section on Home + footer).

## Quality bar

- Mobile-first, responsive down to 360 px; no horizontal scroll.
- Fast: images converted to WebP/AVIF at 2 sizes with `srcset`, `loading="lazy"` below the fold,
  videos compressed (the WellPack demo is already ~1 MB), Lighthouse ≥ 90 on Performance/Accessibility/SEO.
- Accessible: real links/buttons, focus states, alt text on every image (from `assets.md`), 4.5:1 contrast.
- SEO + sharing: title/description per page, Open Graph + Twitter card using `assets/images/og/`
  (generate a 1200×630 share image from the headshot + name + "AI Engineer · Data Scientist").
- `.gitignore` already excludes `_sources/`, `_inbox/`, `.env`, `credentials.json` — never commit secrets.

## Workflow

1. Read `_brief/content.md` and `_brief/assets.md` fully. Ask Assim about anything unclear before coding.
2. Scaffold, then build page by page, showing Assim each page in the dev server before moving on.
3. Files dropped later in `../_inbox/` (outside this repo): match each to its slot in `assets.md`, move it to
   the right `assets/` folder, update `assets.md`, and list anything you could not place.
4. Deploy: GitHub Actions workflow that builds and publishes to GitHub Pages on push to `main` of
   `assim-ben-ahmed/portfolio`. Back up the old site to a `legacy` branch before replacing `main`.
   Give Assim step-by-step deploy instructions; never push without his OK.
