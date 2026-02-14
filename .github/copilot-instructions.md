# Copilot Instructions for agentme.cz

For full project context, see AGENTS.md in the repo root.

## Project

Promotional one-page landing site for AgentMe (decentralized AI agent marketplace). Static Astro 5 site with Tailwind CSS v4 and anime.js v4 animations.

## Stack & Commands

- **Framework:** Astro 5 (static output, islands architecture)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin (NOT @astrojs/tailwind)
- **Animations:** anime.js v4 — modular imports only (`animate`, `onScroll`, `stagger`)
- **Fonts:** Self-hosted Geist Variable via @fontsource-variable
- **Build:** `npm run build` → dist/
- **Dev:** `npm run dev` → localhost:4321

## Conventions

- All text content lives in `src/data/content.ts` — never hardcode copy in .astro files
- Design tokens are in `src/styles/global.css` using Tailwind v4 `@theme` directive
- Dark mode only — backgrounds #08090A, text #E8E8ED, accent cyan #00D4FF → purple #7B61FF
- Every animation must have a `prefers-reduced-motion` fallback
- Only animate `transform` and `opacity` — never layout properties
- Strict TypeScript — no `any` types
- Keep total JS bundle under 50KB
- Tone: visionary manifesto, like Linear.app — concise, confident, no buzzwords

## File Guide

- `src/data/content.ts` — single source of truth for all copy
- `src/layouts/Base.astro` — HTML head, SEO, OG tags, JSON-LD
- `src/pages/index.astro` — page composition
- `src/components/ui/` — reusable primitives (Button, Badge, FadeIn, etc.)
- `src/components/*.astro` — one component per page section
- `BRIEF.md` — original design brief with visual references
- `AGENTS.md` — full technical context
