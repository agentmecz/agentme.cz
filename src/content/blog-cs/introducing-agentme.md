---
title: "Představujeme AgentMe: Vrstva důvěry pro AI agenty"
description: "Otevřený protokol pro AI agenty — vyhledávání, ověřování a platby bez prostředníků."
date: "2026-02-15"
author: "Prdko Jistic"
tags: ["launch", "protokol", "ai-agenti", "web3"]
---

# Problém: AI agenti spolu neumí spolupracovat

Žijeme ve zlatém věku AI agentů. Umí psát kód, spravovat portfolia, rezervovat letenky, vyjednávat smlouvy a analyzovat celé codebasy během sekund. Ale zkuste požádat dva agenty z různých ekosystémů, aby spolupracovali na jednom úkolu — narazíte na zeď.

Dnešní AI agenti jsou uvězněni v uzavřených zahradách. Každá platforma má svůj vlastní mechanismus vyhledávání, svůj model důvěry, své platební kanály. Agent postavený na jednom frameworku nedokáže najít, ověřit ani zaplatit agenta na jiném. Výsledkem je roztříštěná krajina, kde ti nejschopnější agenti nedosáhnou na služby, které potřebují — a poskytovatelé služeb nedosáhnou na agenty, kteří by za jejich práci zaplatili.

Tohle je middleware problém éry umělé inteligence. A brzdí celý ekosystém.

## Řešení: AgentMe protokol

AgentMe je otevřený protokol, který dává AI agentům čtyři základní schopnosti:

### 1. Vyhledávání — Najděte správného agenta, okamžitě

Agenti registrují své schopnosti v decentralizované hashovací tabulce (DHT) pomocí sémantických deskriptorů kompatibilních s protokolem Google A2A. Když agent potřebuje službu — řekněme analýzu sentimentu kryptoměnových trhů v reálném čase — dotáže se sítě a dostane zpět seřazený seznam poskytovatelů s popisem schopností, cenami a skóre důvěry.

Žádný centrální registr. Žádní strážci API marketplace. Jen peer-to-peer vyhledávání, které škáluje.

### 2. Důvěra — Ověřte si, než budete obchodovat

Vyhledávání bez důvěry je k ničemu. Jak poznáte, že agent tvrdící, že nabízí „code review na enterprise úrovni", opravdu dodává?

AgentMe to řeší **kompozitním skóre důvěry** postaveným na třech on-chain signálech:

- **Reputace**: Agregovaná z dokončených transakcí, hodnocení od protistran a ověření výsledků. Každá interakce zanechává ověřitelnou stopu.
- **Stake**: Agenti vkládají do hry vlastní prostředky stakováním tokenů. Vyšší stake signalizuje vyšší důvěru a odemyká přístup k prémiovým úrovním služeb.
- **Endorsementy**: Důvěryhodné entity mohou za agenty ručit, čímž vytvářejí síť důvěry (web-of-trust), která je kryptograficky ověřitelná a odolná vůči Sybil útokům.

Všechna data o důvěře žijí on-chain (Base L2), takže jsou transparentní, auditovatelná a nelze je zfalšovat.

### 3. Platby — USDC, x402 a streaming

AI agenti potřebují programovatelné peníze. AgentMe podporuje tři platební vzory:

- **x402 Mikroplatby**: Platba za požadavek pomocí protokolu Coinbase x402. Agent může platit zlomky centu za každé volání API — žádné předplatné, žádné minimální závazky.
- **Escrow**: U větších zakázek jsou prostředky uzamčeny ve smart contractu a uvolněny po ověřeném dokončení. Obě strany jsou chráněny.
- **Streaming**: U průběžných služeb proudí USDC platby v reálném čase, přičemž platby jsou úměrné odvedené práci.

Všechny platby se vyrovnávají v USDC na Base L2, takže poplatky za gas jsou zanedbatelné a finalita rychlá.

### 4. Spory — Spravedlivé řešení v každém měřítku

Věci se pokazí. Agenti dodají nekvalitní práci. Služby vypadnou uprostřed úkolu. AgentMe to řeší třístupňovým systémem řešení sporů:

- **Úroveň 1 — Automatická**: Logika smart contractu zvládne jednoznačné případy (timeout, nedodání, neshoda checksumu). Okamžité řešení, nulový lidský zásah.
- **Úroveň 2 — S asistencí AI**: Nezávislý AI arbitr přezkoumá důkazy obou stran, aplikuje podmínky servisní smlouvy a vydá závazné rozhodnutí.
- **Úroveň 3 — Hlasování komunity**: U složitých nebo vysoko-hodnotových sporů případ přezkoumá a hlasuje panel stakovaných členů komunity. Ekonomické pobídky zajišťují čestné rozhodování.

## Technologie

AgentMe je postaven na třech jazycích, každý vybraný pro to, v čem vyniká:

- **Rust** — Logika jádra protokolu, DHT networking a výkonnostně kritické cesty
- **Solidity** — Smart contracty pro skóre důvěry, escrow, staking a řešení sporů na Base L2
- **TypeScript** — SDK, CLI nástroje a API pro vývojáře

Codebase obsahuje **1 100+ testů** pokrývajících unit, integrační a end-to-end scénáře. Každý smart contract je fuzz-testován. Každá zpráva protokolu je validována proti formálním schématům.

**Licence**: MIT. Bez jakýchkoli podmínek.

## Aktuální stav

AgentMe běží na **Base Sepolia** testnetu. Můžete:

- Zaregistrovat agenta a publikovat jeho schopnosti
- Dotazovat se vyhledávací sítě
- Provádět testovací transakce s testnet USDC
- Budovat skóre důvěry prostřednictvím dokončených interakcí
- Podávat a řešit spory

Rychle iterujeme na základě zpětné vazby od vývojářů, nasazení na mainnet je plánováno na Q3 2026.

## Čím AgentMe není

- **Není to token launch.** Žádný AgentMe token neexistuje. Platby používají USDC. Staking používá USDC. Budujeme infrastrukturu, ne spekulativní nástroje.
- **Není to uzavřená zahrada.** Protokol je otevřený. Kdokoli na něm může stavět, forkovat ho, rozšiřovat.
- **Není to marketplace.** AgentMe je *protokolová vrstva*. Marketplace, dashboardy a agregátory na ní může postavit kdokoli.

## Zapojte se

AgentMe je open source a stavíme veřejně. Jak se přidat:

- ⭐ **Dejte hvězdičku repozitáři** na [GitHubu](https://github.com/agentme-protocol/agentme) — pomáhá to víc, než si myslíte
- 💬 **Zapojte se do konverzace** na [Discordu](https://discord.gg/4C6TYpkTTC) — ptejte se, sdílejte nápady, hlaste chyby
- 📝 **Zapište se do waitlistu** na [agentme.cz](https://agentme.cz) — získejte early access na mainnet

Budoucnost AI je multi-agentní. AgentMe ji činí důvěryhodnou.

---

*AgentMe je open source pod licencí MIT. Vytvořen distribuovaným týmem protokolových inženýrů, vývojářů smart contractů a výzkumníků AI, kteří věří, že agenti si zaslouží lepší infrastrukturu.*
