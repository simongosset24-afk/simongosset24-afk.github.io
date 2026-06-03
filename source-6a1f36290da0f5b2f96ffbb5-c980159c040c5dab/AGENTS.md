# AGENTS.md

This document provides an overview of the project structure for AI agents working on this codebase.

## Project Overview

**Casa Calypso** — a vacation rental presentation site for a tropical house in Costa Rica. Single-page marketing site built with TanStack Start and deployed on Netlify.

### Property Details
- 2 bedrooms (2 double beds each, sleeps 4+)
- < 2 km from the beach, 2.5 km from town centre
- Surrounded by tropical vegetation
- Ideal for families, couples, digital nomads
- Bookings via Airbnb or direct email contact

## Key Files

```
src/
  routes/
    __root.tsx     ← Shell HTML, Google Fonts links, French lang attr, SEO meta
    index.tsx      ← Entire landing page (CasaCalypso component)
  styles.css       ← All CSS: design tokens, animations, layout, responsive
public/
  placeholder.png  ← Unused; replace gallery gradient backgrounds with real photos
netlify.toml       ← Build + deploy config
```

## Architecture

- **One route, one component**: `src/routes/index.tsx` contains the full page as `CasaCalypso`. All sections are inline — no sub-component splitting needed unless the file grows large.
- **CSS-only design system**: All styling lives in `src/styles.css` using semantic class names (not Tailwind utilities). CSS custom properties (`--jungle`, `--sand`, `--terra`, …) are the single source of truth for colors.
- **Scroll reveals**: `IntersectionObserver` adds `.revealed` to `.reveal` elements; CSS handles the fade-up transition. Applied in a `useEffect`.
- **Sticky nav**: Transparent by default, gains `.nav-on` (dark background + shadow) after 60 px scroll via a scroll listener in `useEffect`.
- **Gallery**: CSS Grid mosaic (5 cells, 2 rows). Each cell has a gradient background standing in for a real photo. Replace `.g1–.g5 .g-inner` background declarations in `styles.css` with `background-image: url(...)` when real photos are available.

## Design Tokens (`styles.css`)

| Variable   | Value     | Use                        |
|------------|-----------|----------------------------|
| `--jungle` | `#162D22` | Dark green, primary text   |
| `--palm`   | `#254D37` | Medium green               |
| `--sage`   | `#7A9E87` | Light green accents        |
| `--mist`   | `#EDF4EF` | Very light green bg        |
| `--sand`   | `#F5EDD8` | Warm cream / light text    |
| `--terra`  | `#BF6950` | Terracotta CTA colour      |
| `--gold`   | `#C49235` | Stars, warm highlights     |
| `--ocean`  | `#4A8FA3` | Teal blue                  |
| `--cream`  | `#FAF7F1` | Page background            |
| `--bark`   | `#7A6050` | Body text, muted           |

## Typography

- **Headings**: Cormorant Garamond (Google Fonts) — elegant serif
- **Body**: DM Sans (Google Fonts) — clean, contemporary

## Conventions

- **French language** for all UI copy; other languages acceptable in testimonials and geo coordinates.
- No Tailwind utility classes in JSX — all class names are semantic and defined in `styles.css`.
- Google Fonts loaded via `<link>` in `__root.tsx` head config, NOT via CSS `@import` (avoids blocking the CSS parse).
- Button variants (`btn-terra`, `btn-ghost`, `btn-sand`) live in `styles.css` and are reused across sections.

## Non-obvious Decisions

- `h1-outline` uses `-webkit-text-stroke` for the hollow text effect in the hero — browser support is sufficient for a marketing site.
- Gallery cells intentionally have no `<img>` tags; gradients act as placeholders until real photography is available.
- Airbnb links point to `https://www.airbnb.com` (homepage) — replace with the actual listing URL before launch.
- Email `contact@casacalypso-costarica.com` is a placeholder — update before launch.
- Testimonials are placeholder content — replace with real guest reviews before launch.
