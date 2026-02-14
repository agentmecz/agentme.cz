# AGENTS.md — AI Agent Context for agentme.cz

## Project Overview

Promotional one-page landing site for **AgentMesh** — a decentralized marketplace and trust layer for AI agents. The goal is to convert developer visitors into GitHub stars and documentation readers.

- **URL:** https://agentme.cz
- **Repo:** https://github.com/timutti/agentmesh (the product being promoted)
- **Language of the site:** English
- **Type:** Static one-pager, no backend, no auth

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Astro | 5.x | Static site generator — zero JS by default, islands architecture |
| Tailwind CSS | 4.x | Styling via `@tailwindcss/vite` plugin (NOT `@astrojs/tailwind`) |
| anime.js | 4.x | Scroll-driven animations — `animate`, `onScroll`, `stagger`, `timeline` |
| TypeScript | strict | Type safety for all scripts and data |
| Geist Sans/Mono | variable | Self-hosted via `@fontsource-variable/geist` and `@fontsource-variable/geist-mono` |

## Build & Dev Commands

```bash
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
```

## Directory Structure

```
src/
├── layouts/Base.astro          # HTML shell — meta tags, OG, structured data, fonts
├── pages/index.astro           # Main page — composes all sections in order
├── components/
│   ├── ui/                     # Reusable primitives (Button, Badge, GradientText, SectionWrapper, FadeIn)
│   ├── Hero.astro              # Hero section with animated network canvas
│   ├── HeroNetwork.astro       # Canvas-based particle network animation
│   ├── ProblemStatement.astro  # 3 pain points grid
│   ├── Solution.astro          # 4-layer protocol breakdown
│   ├── HowItWorks.astro        # 3-step flow with real SDK code
│   ├── TrustVisualizer.astro   # Interactive trust score with countUp animation
│   ├── PaymentMethods.astro    # Payment rails + dynamic escrow table
│   ├── TechStack.astro         # Technology grid with descriptions
│   ├── OpenSourceCTA.astro     # Final CTA with stats + code snippet
│   ├── CodeSnippet.astro       # Code block with window chrome
│   ├── GitHubStarButton.astro  # Star button with live count from GitHub API
│   └── Footer.astro            # Minimal footer
├── data/content.ts             # ALL text content — single source of truth
├── styles/global.css           # Tailwind imports + design tokens + base styles
└── scripts/                    # (reserved for future shared utilities)
public/
├── favicon.svg                 # SVG favicon (agent mesh network icon)
└── (og-image.png)              # TODO: OG social card 1200×630px
```

## Architecture Decisions

1. **All copy lives in `src/data/content.ts`** — never hardcode text in components. This makes content changes trivial and enables future i18n.
2. **Animations are progressive enhancement** — the site is fully functional without JavaScript. Every animation has a `prefers-reduced-motion` fallback.
3. **anime.js uses modular imports** — only import `animate`, `onScroll`, `stagger`, `timeline` from `'animejs'`. Never import the full library.
4. **GitHub API calls are client-side with graceful degradation** — star count fetches from `api.github.com` with sessionStorage cache (5 min TTL). If the API fails, the button still works without a count.
5. **Tailwind CSS v4 uses `@theme` directive** in `global.css` for design tokens — not a `tailwind.config.js` file.
6. **No navigation menu** — it's a one-pager, scroll is the navigation.

## Design System

### Colors (defined in `src/styles/global.css` under `@theme`)
```
Background:   --color-bg-primary: #08090A    --color-bg-secondary: #0F1012    --color-bg-card: #141518
Borders:      --color-border: #1E2028        --color-border-glow: #2A2D38
Text:         --color-text-primary: #E8E8ED  --color-text-secondary: #8A8F98  --color-text-muted: #4A4F5A
Accents:      --color-accent-cyan: #00D4FF   --color-accent-purple: #7B61FF
```

### Typography
- Headings: Geist Variable, bold/semibold, 48-72px hero, tracking-tight
- Body: Geist Variable, regular, line-height 1.6, letter-spacing 0.01em
- Code: Geist Mono Variable
- Max content width: 1200px, centered

### Animation Parameters
- Fade-in duration: 800ms, easing: `easeOutExpo`
- Hover duration: 300ms
- Stagger delay: 100ms between group elements
- Scroll threshold: element 20% visible triggers animation

### Visual Style
- **Dark mode only** — deep near-black, not pure #000
- **Gradient accent** — cyan→purple for emphasis (Linear.app inspired)
- **Glow effects** — subtle radial gradients, box-shadow on hover
- **Generous spacing** — 120-160px padding between sections

## Content Source: AgentMesh

The product being promoted lives at `/home/lada/projects/agentmesh` (GitHub: `timutti/agentmesh`). Key facts:

- **What:** Decentralized marketplace & trust layer for AI agents
- **Tagline:** "The HTTP of agent-to-agent commerce"
- **SDK:** `@agentme/sdk` on npm (TypeScript)
- **Chain:** Base L2 (Sepolia testnet), USDC payments
- **Trust formula:** `0.50 × reputation + 0.30 × stake + 0.20 × endorsements`
- **Contracts:** 10 smart contracts, 314 tests passing, deployed on Base Sepolia
- **Protocols:** A2A, x402, ERC-8004, W3C DID, libp2p
- **Status:** v0.1.0, early access, MIT license

## Tone of Voice

**Visionary manifesto.** Confident, concise, technically precise. Like Linear.app — no marketing bullshit, no buzzwords. Short punchy copy that resonates with developers.

- ✅ "AI agents need infrastructure. Not walled gardens."
- ✅ "Discover. Trust. Transact. No middleman."
- ❌ "Revolutionary next-gen AI-powered blockchain solution"

## What NOT To Do

- No generic AI landing page aesthetics (blue gradients, stock robots)
- No parallax scrolling, no loading screens, no chatbot widgets
- No hamburger menu (one-pager needs no navigation)
- No newsletter signup (GitHub star IS the signup)
- No external font CDNs — fonts are self-hosted
- No `any` types in TypeScript
- Don't animate layout properties — only `transform` and `opacity`

## Current Status & Next Steps

### Done
- [x] Astro 5 + Tailwind v4 + anime.js v4 scaffolding
- [x] All 9 sections implemented with real AgentMesh content
- [x] Hero canvas animation, scroll fade-ins, trust score countUp
- [x] GitHub star button with live API count
- [x] SEO meta tags, OG tags, JSON-LD structured data
- [x] prefers-reduced-motion support
- [x] Build passing, JS ~48KB gzip ~17KB

### TODO (Polish & Deploy)
- [ ] OG social card image (1200×630px PNG)
- [ ] Robots.txt
- [ ] Lighthouse audit → fix to 95+ all categories
- [ ] Responsive QA (375px mobile, 768px tablet, 1440px desktop)
- [ ] Footer responsiveness on small screens
- [ ] Accessibility audit (heading levels, ARIA labels, contrast)
- [ ] Cloudflare Pages or Vercel deployment
- [ ] Custom domain agentme.cz + HTTPS
- [ ] Cache headers for static assets
