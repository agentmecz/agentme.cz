# agentme.cz

Promotional landing page for [AgentMesh](https://github.com/timutti/agentmesh) — the decentralized marketplace and trust layer for AI agents.

**Live:** [agentme.cz](https://agentme.cz)

## Stack

- **Astro 5** — static site, zero JS by default
- **Tailwind CSS 4** — utility-first styling via `@tailwindcss/vite`
- **anime.js 4** — scroll-driven animations
- **TypeScript** — strict mode
- **Geist** — self-hosted variable fonts

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # → dist/
npm run preview    # preview production build
```

## Project Structure

```
src/
├── data/content.ts          # All text content (single source of truth)
├── styles/global.css        # Design tokens + Tailwind theme
├── layouts/Base.astro       # HTML head, meta, OG, structured data
├── pages/index.astro        # Page composition
├── components/ui/           # Reusable primitives
└── components/*.astro       # One file per page section
```

## AI Agent Context

This repo includes context files for AI coding agents:

| File | Agent | Purpose |
|---|---|---|
| `AGENTS.md` | Universal | Full project context, architecture, conventions, TODO |
| `CLAUDE.md` | Claude Code | Quick reference, Claude-specific pointers |
| `.github/copilot-instructions.md` | GitHub Copilot | Repo-wide instructions |
| `.cursor/rules/project.mdc` | Cursor | Project rules with glob scoping |
| `BRIEF.md` | All | Original design brief with visual references |

**Start with `AGENTS.md`** — it has everything an agent (or human) needs to contribute.

## License

MIT
