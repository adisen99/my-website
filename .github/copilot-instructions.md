# Copilot instructions for this codebase

## Architecture at a glance
- This is a Next.js 16 App Router site (TypeScript + React 19 + Tailwind CSS v4).
- App shell is centralized in `src/app/layout.tsx`: `ThemeProvider` wraps `Navbar`, page content (`main.flex-grow`), and `Footer`.
- Most route pages are client components (`"use client"`) and use `framer-motion` for entrance animations.
- Content is mostly hardcoded arrays inside route files (e.g., talks/publications/blog index), not fetched from an API/CMS.

## Blog/MDX flow (project-specific)
- MDX source files live in `src/content/blog/*.mdx`.
- Each post needs a wrapper route at `src/app/blog/<slug>/page.tsx`.
- Wrapper pattern: dynamic import of the MDX module with `{ ssr: false }` + `<Suspense>` fallback.
- Blog listing is manual: add post metadata to `blogPosts` in `src/app/blog/page.tsx`; there is no automatic frontmatter indexing.
- Code highlighting is handled in client wrappers via `usePrismHighlight()` from `src/hooks/usePrismHighlight.ts`.

## Theming and styling conventions
- Dark mode uses `next-themes` class strategy (`src/components/ThemeProvider.tsx`, `src/components/ThemeToggle.tsx`).
- Keep hydration-safe theme UI patterns (mounted guard in `ThemeToggle`; `suppressHydrationWarning` on `<html>` in root layout).
- Use Tailwind utility classes directly in components; typography styling comes from `@tailwindcss/typography` and `.prose` containers.
- Global styles and Tailwind imports/plugins are in `src/app/globals.css`.

## Important config/details
- Path alias: `@/* -> src/*` (see `tsconfig.json`).
- MDX is enabled via `@next/mdx` in `next.config.ts`; keep this in sync with any MDX routing/config changes.
- `.mdxrc.mjs` adds `rehype-pretty-code` (theme: `github-dark`) for MDX rendering pipeline.

## Developer workflows
- Dev server: `npm run dev`
- Production build: `npm run build`
- Start built app: `npm run start`
- Lint: `npm run lint`
- When changing MDX/Next config, always run a full build (there is a known historical MDX build regression captured in `build.log`).

## Change patterns that fit this repo
- For new pages, follow existing route-file structure under `src/app/<route>/page.tsx`.
- For new blog posts, update three places together: MDX content file, wrapper route file, and blog index metadata array.
- Store static assets under `public/images` or `public/photography` and reference them with root-relative URLs (`/images/...`).
