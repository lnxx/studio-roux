# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview the production build locally
```

Node >=22.12.0 is required.

## Architecture

This is a static **Astro 6** site using **Tailwind CSS v4** (via `@tailwindcss/vite` plugin — no `tailwind.config.*` file). It deploys to GitHub Pages at `https://lnxx.github.io/studio-roux`.

**Key config:**
- `astro.config.mjs` sets `site` and `base: '/studio-roux'`. All internal asset URLs must use `import.meta.env.BASE_URL` as a prefix (e.g. `${base}images/hero.jpg`) — never hardcode `/images/...`.
- `src/styles/global.css` defines the design tokens via `@theme` (Tailwind v4 syntax). Brand colours and fonts live here, not in a config file.

**Fonts & design system:**
- Display font: `Syne` (`font-display` / `font-display` class)
- Body font: `Space Grotesk` (`font-body` class)
- Brand colours: `#d70046` (red), `#ffc928` (yellow), `#111111` (black), `#faf8f3` (cream)
- Visual style: brutalist — bold offset shadows (`shadow-[Npx_Npx_0_#color]`), uppercase tracking, hard borders

**Pages & routing** (file-based, `src/pages/`):
- `index.astro` — homepage with hero slideshow, services list, portfolio grid preview, CTA
- `portfolio.astro` — masonry grid with client-side category filtering
- `about.astro` — studio info and services list
- `contact.astro` — Formspree contact form (replace `YOUR_FORM_ID` constant to activate)

**Shared layout:** `src/layouts/Layout.astro` renders the sticky header (with active-state nav highlighting via `Astro.url.pathname`), footer, and `<slot />` for page content. All pages wrap their content in this layout.

**Images:** All portfolio/hero images live in `public/images/`. There is no image processing pipeline — files are served as-is.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/`) which runs `npm ci && npm run build` and deploys `./dist` to GitHub Pages automatically.
