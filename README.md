# Align LLC — Next.js

Faithful Next.js (App Router) port of the original `Test Website` JSX prototype.

## Run

```powershell
cd "D:\Projects\Steam Sales AI\align-llc-nextjs"
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/` — App Router pages (one folder per route)
  - `/` home
  - `/about`, `/services`, `/staffing`, `/software`, `/consulting`
  - `/industries`, `/case-studies`, `/careers`, `/contact`, `/blog`
- `app/globals.css` — full design system (verbatim port of original `styles.css`)
- `app/layout.jsx` — root layout with sticky `Nav`, `Footer`, `FloatingCTA`, scroll-reveal observer, Inter font
- `components/` — shared building blocks (Nav, Footer, FloatingCTA, AlignGlyph, Icon, Counter, PageHero, Reveal observer, TestimonialSlider)
- `public/assets/align-logo.png` — original logo asset

## Notes on the conversion

- Hash routing (`#/about`) is replaced with real Next.js routes (`/about`).
- All `navigate('x')` button handlers became `<Link href="/x">` with the same button classes.
- Components that use hooks (`useState`/`useEffect`) carry the `'use client'` directive; static pages stay as server components.
- Inter is loaded via `next/font/google` instead of a `<link>` tag.
- The reveal-on-scroll observer re-runs on route change (uses `usePathname`) so freshly-mounted sections fade in.
