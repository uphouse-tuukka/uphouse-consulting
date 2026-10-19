---
projectKey: "salt-and-scroll"
title: "Salt & Scroll"
role: "Product direction & AI-led development"
stack: ["SvelteKit", "TypeScript", "Playwright", "Cloudflare Workers"]
duration: "2026-present"
outcome: "Built a public cooking companion through AI-led development, with product decisions and verification built into the workflow."
atAGlance:
  problem: "My recipe notes needed a better interface for cooking and a way to share selected recipes without publishing my private vault."
  contribution: "I directed the product through working prototypes and AI agents, with explicit design decisions, automated checks, and separate reviews."
  result: "A live recipe library and cooking companion, backed by recorded browser checks and comparisons against the approved design."
demoUrl: "https://salt-and-scroll.uphouse-tuukka.workers.dev/"
order: 2
---

## Starting point

I keep recipes in Obsidian, but a useful note and a useful cooking interface are different things. I wanted a phone-first companion that kept ingredients and instructions within reach, plus a public library for recipes I chose to share.

## My role

I built Salt & Scroll without reading its application code. I stayed responsible for the product direction, the decisions, and judging the result. Agents handled implementation within a workflow I shaped around working prototypes, explicit requirements, and verification.

For the cooking experience, I compared working variants with real recipes and selected the direction. That approved prototype became a reference the implementation had to match.

## How I made the work checkable

The workflow included automated tests, browser checks, and separate reviews against the requirements. Visual checks compared the application with the approved reference instead of accepting whatever the implementation happened to produce.

One review found that a menu overlapped the cooking controls on a narrow screen with enlarged text. The fix gained a browser regression check and a separate recheck. That is the kind of evidence I want before accepting a change.

Publication also had a concrete boundary. Only explicitly selected recipes could leave the vault. The publishing process checked its output rather than treating every note as public content.

## The result

Salt & Scroll is a live recipe library and cooking companion. The application is a static web product with browser-local cooking state. The AI work is in how I developed it.

The project gave me a practical way to develop software without making my own line-by-line inspection the acceptance method. Product judgment stayed with me. Tests, independent reviews, and checks against the running interface supplied the evidence for implementation quality.

## What I took from it

Giving agents more responsibility changes the engineering work. I spend more attention on the problem, the decisions, and how a result will be checked. The workflow needs to make mistakes visible before I can trust it with larger pieces of work.
