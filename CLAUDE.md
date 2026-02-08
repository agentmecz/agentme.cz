# CLAUDE.md — Claude Code Context

For full project context, conventions, and architecture, see **AGENTS.md** in this repo.

## Quick Reference

```bash
npm run dev          # Dev server at localhost:4321
npm run build        # Production build → dist/
npm run preview      # Preview build locally
```

## Key Rules for This Codebase

1. **Content lives in `src/data/content.ts`** — edit text there, not in `.astro` components
2. **Tailwind v4** — uses `@tailwindcss/vite` plugin and `@theme` directive in CSS, NOT tailwind.config.js
3. **anime.js v4** — use modular imports: `import { animate, onScroll } from 'animejs'`
4. **Always add `prefers-reduced-motion` fallback** for any new animation
5. **No `any` types** — strict TypeScript throughout
6. **Keep JS bundle under 50KB** — check with `npm run build`

## Project Structure (for fast navigation)

- `src/data/content.ts` → all text/copy (edit here for content changes)
- `src/styles/global.css` → design tokens, Tailwind theme, base styles
- `src/layouts/Base.astro` → HTML head, meta, OG tags, structured data
- `src/pages/index.astro` → page composition (section order)
- `src/components/` → one file per section, `ui/` for reusable primitives
- `BRIEF.md` → original project brief (design vision, references)
- `AGENTS.md` → full technical context for all AI agents

## AgentMesh Reference

The product we're promoting: `timutti/agentmesh` (also at `/home/lada/projects/agentmesh`).

Key SDK API for code examples on the landing page:
```typescript
import { AgentMeshClient, DiscoveryClient, TrustClient, PaymentClient } from '@agentmesh/sdk'
// client.discover(), trust.getTrustScore(), payment.createEscrow(), client.execute()
```

## Current TODO

See AGENTS.md "Current Status & Next Steps" section for the full list.
Priority: OG image, responsive QA, accessibility, Lighthouse 95+, deployment.
