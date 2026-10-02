# VESTIGE — Collection №7: EROSION

A scroll-driven fashion editorial for a fictional couture maison. Three routes — a long-form Home editorial, a 27-look Archive, and an About page — built as a single-page app with smooth scrolling, pinned sections, and a film-grain finish.

> *We do not design garments. We design what remains after the garment has been forgotten — the crease, the stain, the ghost of a shoulder.*

## Features

- **Scroll-driven editorial** — pinned sections, parallax plates, and reveal animations orchestrated with GSAP ScrollTrigger.
- **Smooth scrolling** — a single Lenis instance drives the page, synced to the GSAP ticker so the scroll layer and ScrollTrigger never fight over `requestAnimationFrame`.
- **Client-side routing** — Home (`/`), Archive (`/archive`), and About (`/about`) via React Router, with scroll reset and `ScrollTrigger.refresh()` on every route change.
- **Custom cursor** — hover targets matched by event delegation, so dynamically rendered links light up without per-node listeners.
- **Animated film grain** — a full-viewport grain overlay for the editorial texture.
- **Chapter readout** — fixed chapter tag plus a scroll-progress hairline.
- **Preloader** — image counter that hands off cleanly to the hero entrance.
- **Responsive** — desktop editorial layout collapses to a burger + full-screen nav on mobile.
- **Resilient reveals** — entrance animations use `gsap.from` rather than CSS-hidden start states, so copy stays readable if JavaScript never runs.

## Tech stack

| Layer      | Choice                                     |
| ---------- | ------------------------------------------ |
| Build      | [Vite 7](https://vitejs.dev/)              |
| UI         | React 19 + React Router 7                  |
| Animation  | GSAP 3 + ScrollTrigger                     |
| Scrolling  | Lenis                                      |
| Styling    | Plain CSS (one file per page + shared base)|
| Language   | JavaScript (ESM, JSX)                      |

## Getting started

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm 9+

### Install & run

```bash
git clone https://github.com/girishlade111/vestige.git
cd vestige
npm install
npm run dev
```

The dev server runs at **http://localhost:5173**.

### Scripts

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the Vite dev server on port 5173         |
| `npm run build`   | Production build into `dist/`                  |
| `npm run preview` | Serve the production build locally             |

## Project structure

```
vestige/
├── index.html              HTML shell, fonts, meta, inline SVG favicon
├── vite.config.js          Vite + React plugin, dev port 5173
├── package.json
├── .gitignore              ignores node_modules, dist, env files, etc.
└── src/
    ├── main.jsx            entry: StrictMode + BrowserRouter
    ├── App.jsx             routes, global cursor/grain, per-route scroll reset
    ├── images.js           asset imports (hashed at build time)
    ├── assets/             collection plates (hero, looks, detail, finale)
    ├── components/
    │   ├── ChapterTag.jsx  fixed chapter readout + scroll progress hairline
    │   ├── Cursor.jsx      custom cursor, hover targets via delegation
    │   ├── Grain.jsx       animated film grain overlay
    │   ├── PageFooter.jsx  shared footer for inner pages
    │   ├── Preloader.jsx   image counter, hands off to the hero entrance
    │   └── SiteChrome.jsx  header, burger, full-screen mobile nav
    ├── data/
    │   └── collection.js   nav, manifesto, looks, principles, 27-look archive
    ├── hooks/
    │   ├── useDocumentTitle.js   per-page document title
    │   ├── useLenis.jsx          single Lenis instance on the GSAP ticker
    │   └── useStallGuard.js      rAF-stall watchdog so content is never trapped hidden
    ├── pages/
    │   ├── Home.jsx        manifesto, looks, stats, atelier principles
    │   ├── Archive.jsx     27-look grid
    │   └── About.jsx       maison story
    └── styles/
        ├── base.css        shared chrome, typography, resets
        ├── home.css
        ├── archive.css
        └── about.css
```

## Architecture notes

- **GSAP contexts** — every animation graph is built inside `gsap.context()` scoped to the page root and torn down with `ctx.revert()`, so pinned sections and pin-spacers clean up correctly on route change and under React StrictMode's double-mount.
- **One Lenis to rule them all** — Lenis is instantiated once at the app level and driven from the GSAP ticker, so smooth scrolling and ScrollTrigger share a single animation loop.
- **Route transitions** — `RouteTransition` scrolls to the top immediately and calls `ScrollTrigger.refresh()` on every pathname change, guaranteeing clean measurements for the next page. `history.scrollRestoration` is set to `manual` so the browser doesn't fight the router.
- **Data-driven content** — nav, manifesto, looks, stats, principles, and the archive all live in `src/data/collection.js`, so copy and imagery can be swapped without touching components.
- **Stall guard** — `useStallGuard` watches for a frozen `requestAnimationFrame` loop and force-reveals content, so a stalled animation never leaves the page blank.

## Deployment

This is a client-routed SPA. Point your host's rewrite rule at `index.html` so `/archive` and `/about` resolve on a hard refresh:

- **Netlify** — `_redirects` file: `/*  /index.html  200`
- **Vercel** — `vercel.json`: `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- **nginx** — `try_files $uri /index.html;`
- **GitHub Pages** — requires a hash router or a 404 redirect hack, since GH Pages has no rewrite rules.

Build and upload the `dist/` folder:

```bash
npm run build
```

## License

MIT — do with it what you will.

---

Built by **Girish Lade** — [ladestack.in](https://ladestack.in)
