# Arkive Labs

The studio site for **Arkive Labs** — a founder-led strategy, creative,
technology and performance partner. Built with Next.js and a bespoke motion
system (WebGL hero, inertial smooth-scroll, scroll-driven reveals).

**Live:** https://arkivelabs.vercel.app

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** + a hand-authored design system in `app/globals.css`
- **GSAP ScrollTrigger** + **Lenis** — scroll motion and reveals
- **OGL** — the WebGL "liquid gold" hero shader
- Type: Montserrat · Fraunces · JetBrains Mono

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build   # production build
npm run start   # serve the build
```

Pushes to `main` deploy automatically via Vercel.

## Structure

```
app/
  page.tsx              Home
  layout.tsx            Root layout, fonts, metadata, global effects
  HeroField.tsx         WebGL shader hero (OGL)
  RotatingWord.tsx      Cycling gold headline accent
  ScrollFX.tsx          Lenis smooth-scroll + GSAP reveals / count-ups
  Craft.tsx             Custom cursor, film grain, scroll progress, magnetics
  template.tsx          Per-route entrance transition
  Navigation.tsx        Header + mobile nav
  globals.css           Design system + all component styles
  capabilities/  studio/  pricing/  start-a-project/
public/brand/           Logos and marks
```

## Design language

Ink (`#090a0c`) and paper (`#f2f0e9`) with a single gold accent
(`#d0a94f`). Editorial, restrained, motion-forward. Serif italics
(Fraunces) carry the emphasis; monospace (JetBrains Mono) carries the
meta. Every surface is theme-aware via the `data-nav-theme` sections.
