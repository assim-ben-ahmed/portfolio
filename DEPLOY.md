# Deploying portfolio v2

How to replace the live site at https://assim-ben-ahmed.github.io/portfolio/ with this one. You run every
step yourself: nothing here has been pushed. Commands are for **PowerShell**.

Your existing clone of the live repo is `C:\Users\assim\Documents\portfolio` (remote:
`https://github.com/assim-ben-ahmed/portfolio.git`). The steps below reuse it.

---

## 0. Check the production build locally

```powershell
cd "C:\Users\assim\OneDrive\Desktop\Aivancity edu\alternance search projects\Portfolio\portfolio-v2"
npm run build
npm run preview
```

Open http://localhost:4173/portfolio/ and click through every page in FR and EN. Stop the server with `Ctrl+C`.

`npm run build` also pre-renders every page to static HTML (`scripts/prerender.mjs`), which needs Google
Chrome installed. It is on your PC and on GitHub's build machines, so nothing to set up.

## 1. Back up the old site to a `legacy` branch

```powershell
cd "C:\Users\assim\Documents\portfolio"
git checkout main
git pull
git branch legacy
git push origin legacy
```

Check on GitHub (branch dropdown) that `legacy` exists before going on. The old site is then safe.

## 2. Replace the contents of `main`

```powershell
cd "C:\Users\assim\Documents\portfolio"

# Remove the old site's files from git (keeps the .git folder and history).
git rm -r -q .

# Copy the new site in, skipping build output, dependencies and private source folders.
robocopy "C:\Users\assim\OneDrive\Desktop\Aivancity edu\alternance search projects\Portfolio\portfolio-v2" . /E /XD node_modules dist _sources _inbox _brief __pycache__ .git /NFL /NDL /NJH /NJS

git add -A
git status
```

Read the `git status` list before committing. You should see `.github/workflows/deploy.yml` added and
`.github/workflows/static.yml` deleted (only one workflow may deploy). Nothing from `_sources/`, `_inbox/`,
`_brief/`, `node_modules/` or `dist/` should be listed.

> **Public repo:** everything committed is public. `_brief/` (your content notes and open questions) is
> excluded by `.gitignore` and stays on your machine; delete that line from `.gitignore` if you want it
> published. `.claude/` (the design skill) is included.

```powershell
git commit -m "Portfolio v2: React + Vite rebuild"
git push origin main
```

## 3. Watch the deployment

1. On GitHub, open the repo's **Actions** tab. The *Deploy portfolio to GitHub Pages* run takes about 1–2 minutes.
2. If the deploy job complains about Pages: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
   (The old site already deployed through Actions, so this should already be set.)
3. Open https://assim-ben-ahmed.github.io/portfolio/ and test a deep link directly, e.g.
   https://assim-ben-ahmed.github.io/portfolio/projects/wellpack-manager (it goes through `404.html` and lands
   on the right page).
4. Check the share preview with https://www.linkedin.com/post-inspector/ (paste the site URL).

## Rolling back

To put the old site back on `main`:

```powershell
cd "C:\Users\assim\Documents\portfolio"
git checkout main
git revert --no-edit HEAD
git push origin main
```

`legacy` keeps the old site whatever happens.

---

## Everyday updates after launch

Work in `portfolio-v2`, check with `npm run dev`, then copy the changes into `Documents\portfolio` (same
robocopy command as step 2, without `git rm`) and commit + push. Each push to `main` redeploys.

- **New project:** add one object to `src/data/projects.ts`.
- **New blog post:** copy `src/content/blog/_TEMPLATE.md`, rename it, write it.
- **New photos/videos:** drop them in `../_inbox/` and ask Claude to sort them (see `_brief/assets.md`).
- **New special characters** (e.g. another language's letters) showing in a fallback font: run
  `python scripts/subset-fonts.py` to refresh the font files.
- New projects and blog posts are picked up by the pre-render and the sitemap automatically.
