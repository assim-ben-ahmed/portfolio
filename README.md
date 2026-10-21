# Assim Ben Ahmed: Portfolio

My personal portfolio site: projects, leadership, achievements and blog, in English and French.

**Live:** https://assim-ben-ahmed.github.io/portfolio

<!-- TODO: screenshot of the home page -->

## Stack

- **React 19 + TypeScript**, built with **Vite**
- **React Router** for client-side routing (deep links work on GitHub Pages through `public/404.html`)
- **Framer Motion** for animations, **lucide-react** for icons, **marked** for Markdown blog posts
- **vite-imagetools**: responsive WebP/JPG images
- **Pre-rendering**: every route is rendered to static HTML after the build (`scripts/prerender.mjs`, headless Chrome via `playwright-core`) for SEO and link previews
- **Google Analytics 4 with CNIL-compliant consent**: nothing from Google loads until the visitor clicks *Accept*; Consent Mode v2 with every type denied by default, analytics only (no ads), choice kept for 6 months, disabled on localhost (`src/lib/analytics.ts`, `src/components/CookieBanner.tsx`)
- **i18n**: EN/FR with automatic language detection (`src/i18n/`)

## Project structure

```
src/
├── pages/        # Home, About, Projects, ProjectDetail, Leadership, Achievements, Blog
├── components/   # Layout, CookieBanner, shared UI
├── data/         # projects.ts, projectDetails.ts, leadership.ts, achievements.ts
├── content/blog/ # Markdown posts (_TEMPLATE.md to start a new one)
├── i18n/         # en.ts, fr.ts
└── lib/          # analytics and helpers
assets/           # images, certificates, CV PDFs
public/           # 404.html (SPA redirect), favicon, robots.txt
scripts/          # prerender.mjs, subset-fonts.py
```

## Run locally

Requires Node.js 22 (same as CI) and Google Chrome (used by the pre-render step).

```bash
npm install
npm run dev        # dev server
npm run typecheck  # TypeScript only
npm run build      # type-check + Vite build + pre-render into dist/
npm run preview    # serve dist/ at http://localhost:4173/portfolio/
```

## Deploy

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs `npm ci` and `npm run build`, then publishes `dist/` to GitHub Pages (**Settings → Pages → Source: GitHub Actions**). The site is served under `/portfolio/` (`base` in `vite.config.ts`).

The previous static site is preserved on the [`legacy`](https://github.com/assim-ben-ahmed/portfolio/tree/legacy) branch. See [DEPLOY.md](DEPLOY.md) for the v2 migration and rollback steps.

## Updating content

- **New project:** add an object to `src/data/projects.ts`
- **New blog post:** copy `src/content/blog/_TEMPLATE.md`
- **New characters showing in a fallback font:** run `python scripts/subset-fonts.py`

New projects and posts are picked up by the pre-render and sitemap automatically.

## Contact

[LinkedIn](https://www.linkedin.com/in/assim-ben-ahmed-6268741a8) · [GitHub](https://github.com/assim-ben-ahmed)
