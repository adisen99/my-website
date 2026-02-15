# Personal site (Next.js + App Router)

This is a static-exported Next.js site prepared for GitHub Pages.

## Local development

Run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build / checks

```bash
npm run lint
npm run build
```

Static output is generated in `out/`.

## Current deployment setup

- Static export is enabled in [next.config.ts](next.config.ts):
  - `output: 'export'`
  - `images.unoptimized: true`
  - `trailingSlash: true`
- GitHub Pages workflow is in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Blog status (draft)

- Blog routes and content still exist.
- Blog is currently hidden from top navigation (not linked in navbar).

## Add/update a CV file

- Put your file at: `public/files/cv.pdf`
- CV page link already points to `/files/cv.pdf` and opens in a new tab.

## Add/update photography images

- Place photos under `public/photography/`.
- The photography page uses section arrays and naming patterns (e.g. `musings1.jpg`, `hawaii1.jpg`, etc.).

## GitHub Pages publish steps (for `adisen99.github.io`)

1. Ensure repository name is exactly: `adisen99.github.io`.
2. Push code to `main`.
3. In GitHub repo settings:
   - Go to **Settings → Pages**
   - Source: **GitHub Actions**
4. Wait for workflow run **Deploy Next.js static site to Pages** to pass.
5. Visit: https://adisen99.github.io

## If deployment fails

- Re-run `npm run build` locally first.
- Check Actions logs for the failing step.
- Verify all referenced files in `public/` exist with correct case-sensitive names.

