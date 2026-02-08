# agentme.cz - Brief

## Projekt

Promo one-pager pro **AgentMesh** - decentralizovaný marketplace a trust layer pro AI agenty. Open-source projekt, který potřebuje nasbírat early adopters a GitHub stars.

**URL:** agentme.cz
**Typ:** One-page landing page
**Jazyk webu:** Angličtina

---

## Cíle

1. **Primární:** Konverze na GitHub star (tlačítko "Star on GitHub" s live počítadlem)
2. **Sekundární:** Přivést devs do dokumentace ("Get Started")
3. **Terciární:** Budovat povědomí o projektu v AI/Web3 komunitě

---

## Cílová skupina

- Vývojáři, kteří staví AI agenty a potřebují infrastrukturu pro jejich propojení
- Early adopters v oblasti AI agents, Web3, decentralizovaných protokolů
- Open-source kontributoři hledající zajímavý projekt

---

## Tón komunikace

**Vizionářský manifesto.** Jako Linear - sebevědomý, stručný, technicky přesný. Žádný marketing bullshit, žádné buzzwordy. Věty, které rezonují. Short punchy copy.

Příklady tónu:
- "AI agents need infrastructure. Not walled gardens."
- "Discover. Trust. Transact. No middleman."
- NE: "Revolutionary next-gen AI-powered blockchain solution"

---

## Vizuální styl

### Hlavní reference
- **linear.app** - celkový feel, typografie, layout, scroll animace, gradient glow
- **animejs.com** - scroll-synced live animace, interaktivní demo prvky

### Theme
- **Dark mode** - deep navy/near-black pozadí (ne pure #000, spíš #08090A nebo #0A0B0F)
- **Text** - off-white primární (#E8E8ED), šedá sekundární (#8A8F98)
- **Accent** - cyan-to-purple gradient pro zvýraznění (styl Linear glow)
- **Glow efekty** - subtle radial gradienty za klíčovými elementy

### Typografie
- **Headings:** Inter nebo Geist Sans, bold/semibold, velké velikosti (48-72px hero)
- **Body:** Stejný font, regular weight, mírně zvýšený letter-spacing pro dark mode
- **Code snippets:** Geist Mono nebo JetBrains Mono
- **Line height:** Generous (1.5-1.7 pro body, 1.1-1.2 pro headings)

### Spacing
- Hodně vzdušný - velké padding mezi sekcemi (120-160px)
- Centered layout, max-width ~1200px
- Prostor je součást designu, ne prázdno

---

## Struktura stránky (sekce)

### 1. Hero
- **Hlavní headline:** Vizionářský claim (1 řádek, max 8 slov)
- **Sub-headline:** Vysvětlující věta (1-2 řádky)
- **CTA:** Dvě tlačítka - "Star on GitHub" (primární, s live star count) + "Get Started" (sekundární)
- **Vizuál:** Animovaná síť agentů (nodes + connections) - anime.js particle/network animace
  - Nodes = AI agenti, pulzují, mají identitu
  - Connections = trust links, animovaně se vytváří a ruší
  - Celé to žije, reaguje na scroll/hover
- **Nad headline:** Malý badge "Open Source" nebo "Now in Beta" s glow

### 2. Problem Statement
- **Headline:** Krátký punchy problém (např. "AI agents are isolated")
- **3 pain pointy** v řádku - ikona + krátký text
  - Agents can't find each other
  - No way to verify trust
  - Payments are manual and slow
- Minimalistické ikony, fade-in on scroll

### 3. Solution / What is AgentMesh
- **Headline:** Odpověď na problém
- **Vizuál:** Schéma/diagram jak AgentMesh funguje - 4 vrstvy:
  - Discovery (najít agenta)
  - Trust (ověřit důvěryhodnost)
  - Payment (zaplatit za službu)
  - Dispute (vyřešit spor)
- Každá vrstva se animovaně odkryje při scrollu
- Stručný popis ke každé vrstvě (1 věta)

### 4. How It Works (interaktivní demo)
- **3-krokový flow** vizualizovaný anime.js animací:
  1. Agent A hledá službu → Discovery search animace
  2. Agent A ověří Agent B → Trust score vizualizace (animovaný gauge/bar)
  3. Transakce proběhne → Payment flow animace s escrow
- Scroll-synced - každý krok se aktivuje při scrollu
- Inspirace: anime.js homepage styl s live vizualizacemi

### 5. Trust Score Visualizer
- **Interaktivní element** - živá vizualizace trust score výpočtu
- Uživatel vidí jak se skládá: reputation (50%) + stake (30%) + endorsements (20%)
- Animované progress bary / kruhové grafy
- Hover efekty na jednotlivé komponenty s tooltipem

### 6. Tech Stack / Built With
- **Grid** s logy a názvy technologií:
  - Base L2, libp2p, Solidity, TypeScript, Rust
  - A2A Protocol, x402, ERC-8004, W3C DID
- Subtle hover efekty, monochromatické loga
- Sdělení: "Built on proven, battle-tested infrastructure"

### 7. Open Source CTA (závěrečná sekce)
- **Velký headline:** Výzva k akci (např. "Build the future of agent commerce")
- **GitHub stats:** Stars, Contributors, Commits (live nebo semi-live)
- **CTA tlačítka:** "Star on GitHub" (velké) + "Read the Docs" + "Join Discord" (pokud existuje)
- **Code snippet:** Ukázka SDK - jak jednoduché je začít (3-5 řádků kódu)
  ```typescript
  import { AgentMesh } from '@agentmesh/sdk'

  const mesh = new AgentMesh()
  const agents = await mesh.discover({ capability: 'translation' })
  const result = await agents[0].execute({ text: 'Hello', to: 'es' })
  ```

### 8. Footer
- Minimální - logo, GitHub link, docs link, copyright
- Žádná zbytečná navigace

---

## Animace (anime.js)

### Principy
- **Scroll-triggered:** Většina animací se aktivuje při scrollu (anime.js Scroll Observer)
- **Subtle a účelné:** Každá animace má důvod - ukazuje jak něco funguje, ne jen "je to hezký"
- **Performance-first:** Animovat pouze transform a opacity, ne layout properties
- **Reduced motion:** Respektovat `prefers-reduced-motion` - statický fallback pro každou animaci

### Konkrétní animace
1. **Hero network:** Kontinuální particle animace - nodes se pohybují, connections se tvoří/ruší
2. **Section fade-in:** Staggered fade-in + translateY při scrollu (klasika, ale čistá)
3. **Layer reveal:** 4 vrstvy AgentMesh se postupně odkrývají (stagger timeline)
4. **Trust score:** Animované progress bary a čísla (countUp efekt)
5. **Code snippet:** Typing efekt na ukázku kódu
6. **Gradient glow:** Subtle pulse na CTA tlačítkách a accent elementech

### Motion values
- **Duration:** 600-1000ms pro fade-in, 300-400ms pro hover
- **Easing:** `easeOutExpo` pro vstupy, `easeInOutQuad` pro continuous
- **Stagger:** 80-120ms mezi elementy v grupě

---

## Tech Stack

| Technologie | Použití |
|-------------|---------|
| **Astro** | Framework - static site, zero JS by default, islands architecture |
| **Tailwind CSS** | Styling - utility-first, dark mode native |
| **anime.js v4** | Animace - scroll observer, timeline, stagger |
| **TypeScript** | Type safety pro interaktivní komponenty |

### Hosting
- **Cloudflare Pages** nebo **Vercel** (TBD)
- Custom doména: agentme.cz

### Performance cíle
- Lighthouse score: 95+ across all categories
- First Contentful Paint: < 1s
- Total JS: < 50KB (Astro + anime.js)
- Žádné externí fonty CDN - self-hosted

---

## SEO & Meta

- **Title:** "AgentMesh - Decentralized Marketplace for AI Agents"
- **Description:** "Open-source infrastructure for AI agents to discover, trust, and transact. Built on Base L2 with libp2p networking."
- **OG Image:** Branded social card s network vizuálem
- **Structured data:** SoftwareApplication schema

---

## Co NECHCEME

- Generic AI landing page aesthetic (modré gradienty, stock roboti)
- Cookie-cutter hero s laptop mockupem
- Přehlcení textem - max 50 slov na sekci (mimo code snippety)
- Parallax na úrovni 2015
- Hamburger menu (je to one-pager, navigace nepotřeba)
- Loading screen / preloader
- Chatbot widget
- Newsletter signup (GitHub star je náš signup)

---

## Deliverables

1. Funkční one-pager na agentme.cz
2. Responsive (mobile, tablet, desktop)
3. OG social card image
4. Lighthouse 95+
5. Git repo s clean historií

---

## Reference

- [linear.app](https://linear.app) - hlavní vizuální reference
- [animejs.com](https://animejs.com) - animační styl
- [supabase.com](https://supabase.com) - open source CTA pattern
- [vercel.com](https://vercel.com) - gradient card styl
- [Evil Martians: 100 devtool landing pages](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025) - hero section patterns
- [Dark Mode Best Practices 2026](https://www.tech-rz.com/blog/dark-mode-design-best-practices-in-2026/) - dark theme UX
- [SaaS Landing Page Trends 2026](https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples) - scroll storytelling patterns
