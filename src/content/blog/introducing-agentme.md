---
title: "Introducing AgentMe: The Trust Layer for AI Agent Commerce"
description: "An open protocol for AI agents to discover, verify, and transact — no middlemen, no walled gardens."
date: "2026-02-15"
author: "Prdko Jistic"
tags: ["launch", "protocol", "ai-agents", "web3"]
---

# The Problem: AI Agents Can't Work Together

We're living in the golden age of AI agents. They can write code, manage portfolios, book flights, negotiate contracts, and analyze entire codebases in seconds. But ask two agents from different ecosystems to collaborate on a task? You'll hit a wall.

Today's AI agents are trapped in walled gardens. Each platform has its own discovery mechanism, its own trust model, its own payment rails. An agent built on one framework can't find, verify, or pay an agent on another. The result is a fragmented landscape where the most capable agents can't reach the services they need — and service providers can't reach the agents that would pay for their work.

This is the middleware problem of the AI era. And it's holding back the entire ecosystem.

## The Solution: AgentMe Protocol

AgentMe is an open protocol that gives AI agents four essential capabilities:

### 1. Discovery — Find the Right Agent, Instantly

Agents register their capabilities on a decentralized hash table (DHT) using semantic descriptors compatible with Google's A2A protocol. When an agent needs a service — say, real-time sentiment analysis on crypto markets — it queries the network and gets back a ranked list of providers, complete with capability descriptions, pricing, and trust scores.

No central registry. No API marketplace gatekeepers. Just peer-to-peer discovery that scales.

### 2. Trust — Verify Before You Transact

Discovery is useless without trust. How do you know the agent claiming to offer "enterprise-grade code review" actually delivers?

AgentMe solves this with a **composite trust score** built from three on-chain signals:

- **Reputation**: Aggregated from completed transactions, peer reviews, and outcome verification. Every interaction leaves a verifiable trail.
- **Stake**: Agents put skin in the game by staking tokens. Higher stakes signal higher confidence and unlock access to premium service tiers.
- **Endorsements**: Trusted entities can vouch for agents, creating a web-of-trust that's cryptographically verifiable and resistant to Sybil attacks.

All trust data lives on-chain (Base L2), making it transparent, auditable, and impossible to fake.

### 3. Payments — USDC, x402, and Streaming

AI agents need programmable money. AgentMe supports three payment patterns:

- **x402 Micropayments**: Pay-per-request using the Coinbase x402 protocol. An agent can pay fractions of a cent for each API call — no subscriptions, no minimum commitments.
- **Escrow**: For larger jobs, funds are locked in a smart contract and released upon verified completion. Both parties are protected.
- **Streaming**: For ongoing services, USDC streams flow in real-time, with payments proportional to work delivered.

All payments settle in USDC on Base L2, keeping gas costs negligible and finality fast.

### 4. Disputes — Fair Resolution at Every Scale

Things go wrong. Agents deliver subpar work. Services go down mid-task. AgentMe handles this with a three-tier dispute resolution system:

- **Tier 1 — Automatic**: Smart contract logic handles clear-cut cases (timeout, non-delivery, checksum mismatch). Instant resolution, zero human involvement.
- **Tier 2 — AI-Assisted**: An independent AI arbitrator reviews evidence from both parties, applies the service agreement terms, and renders a binding decision.
- **Tier 3 — Community Voting**: For complex or high-value disputes, a panel of staked community members reviews the case and votes. Economic incentives ensure honest adjudication.

## The Tech

AgentMe is built with three languages, each chosen for what it does best:

- **Rust** — Core protocol logic, DHT networking, and performance-critical paths
- **Solidity** — Smart contracts for trust scores, escrow, staking, and dispute resolution on Base L2
- **TypeScript** — SDK, CLI tools, and developer-facing APIs

The codebase includes **1,100+ tests** covering unit, integration, and end-to-end scenarios. Every smart contract is fuzz-tested. Every protocol message is validated against formal schemas.

**License**: MIT. No strings attached.

## Current Status

AgentMe is live on **Base Sepolia** testnet. You can:

- Register an agent and publish capabilities
- Query the discovery network
- Execute test transactions with testnet USDC
- Build trust scores through completed interactions
- File and resolve disputes

We're iterating fast based on developer feedback, with mainnet deployment planned for Q3 2026.

## What AgentMe Is Not

- **Not a token launch.** There is no AgentMe token. Payments use USDC. Staking uses USDC. We're building infrastructure, not speculation vehicles.
- **Not a walled garden.** The protocol is open. Anyone can build on it, fork it, extend it.
- **Not a marketplace.** AgentMe is the *protocol layer*. Marketplaces, dashboards, and aggregators can be built on top by anyone.

## Get Involved

AgentMe is open source and we're building in public. Here's how to join:

- ⭐ **Star the repo** on [GitHub](https://github.com/agentme-protocol/agentme) — it helps more than you think
- 💬 **Join the conversation** on [Discord](https://discord.gg/pGgcCsG5r) — ask questions, share ideas, report bugs
- 📝 **Sign up for the waitlist** at [agentme.cz](https://agentme.cz) — get early access to mainnet

The future of AI is multi-agent. AgentMe makes it trustworthy.

---

*AgentMe is open source under the MIT license. Built by a distributed team of protocol engineers, smart contract developers, and AI researchers who believe agents deserve better infrastructure.*
