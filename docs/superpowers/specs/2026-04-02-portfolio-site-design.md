# Spec: uphouse-consulting — Personal Portfolio Site

Date: 2026-04-02
Status: Draft
Source: site-plan.md (office-hours + eng review + design review + brainstorming)

## Purpose

A single-page portfolio site with case study subpages. Converts LinkedIn profile clicks into work inquiries. Dark mode default, craft-quality engineering, zero flaws.

## Stack

- Astro 5 (static SSG, zero client JS by default)
- Tailwind v4 (custom theme tokens)
- TypeScript
- Vanilla JS islands (dark mode toggle, scroll observer)
- Vercel (deploy, CDN, preview deployments)

## Content Model

### profile.json

```json
{
  "name": "Tuukka Ylöstalo",
  "role": "Software Developer",
  "tagline": "Less complexity, more software.",
  "bio": "Fullstack developer based in Helsinki. I push back on wasted effort and build what actually matters — for the users, the team, and the codebase.",
  "email": "TBD",
  "linkedin": "https://linkedin.com/in/TBD",
  "github": "https://github.com/TBD",
  "domain": "uphouse-consulting.com",
  "ctaSubject": "Work inquiry via uphouse-consulting.com"
}
```

Consumed by: hero section (name, role, tagline), bio section (bio), CTA links (email + ctaSubject), social links (linkedin, github), meta tags (domain).

### Case Study Frontmatter (Markdown)

```yaml
title: string # Project name
role: string # Your role on the project
stack: string[] # Tech tags shown on card
duration: string # e.g. "2024–2025"
outcome: string # Single sentence, <120 chars, shown on home card
slug: string # URL segment
order: number # Display order on home page
```

Body structure: Problem > What you tried > What you shipped > Outcomes/metrics.

### Case Studies (3)

1. **Public transport webshop** — Customer-facing ticket purchasing web app. Built the frontend (with lightweight backend). Deployed as Docker image on Azure. Long stretch as primary developer responsible for the application. Stack: TypeScript, Next.js, React, Sass, Azure.

2. **Public transport website** — Ongoing development and maintenance of a public transport operator's website. Key deliverables: electronic forms, new search service (ElasticSearch), Next.js 12-to-14 migration including pages-to-app router transition, internal component library development. Stack: Optimizely, .NET, C#, TypeScript, Next.js, React, NestJS, Azure, ElasticSearch.

3. **Japanese AI tutor** (hobby project, MVP ready) — A language learning app that uses AI as your personal tutor, built to prepare for a trip to Japan. Includes gamification for habit building. Also served as a way to get hands-on with AI agent orchestrators and workflows. Stack: SvelteKit 2, Svelte 5, TypeScript, OpenAI, TursoSQL, Vercel.

Note: Case study body content (the narrative) will be written during the content phase. The above are summaries for card descriptions and frontmatter.

## Pages

### `/` — Home

Single-column layout, 720px max-width, left-aligned.

Sections in order:

1. **Hero** — Name (h1), role, tagline, primary CTA button ("Contact me" -> mailto with pre-filled subject), social links (GitHub, LinkedIn, Email as text links separated by middle dot)
2. **Bio** — 2 sentences bridging the hook to the proof
3. **Projects** — 3 cards, each with: title, description, tech tags (plain text, slash-separated, JetBrains Mono), link to case study. Cards fade-up on scroll (IntersectionObserver, home page only).
4. **Footer** — "Let's work together" text link (mailto), social links (same format as hero), copyright "2026 Tuukka Ylöstalo", "Built with Astro" (plain text, no link). 1px border-top separator.

### `/projects/[slug]` — Case Study

Header: title, role, stack, duration.
Body: Markdown content (problem > tried > shipped > outcomes).
Images: placeholder aspect-ratio boxes (16:9) for V1, real images later.
Bottom: Contextual CTA "Want to work together?" (same mailto mechanism), prev/next project text links, back-to-home link.

### `/404` — Not Found

Friendly message + link home. Same theme/typography as rest of site.

## Visual Design

### Color Tokens

**Dark mode (default):**
| Token | Value | Tailwind |
|-------|-------|----------|
| Background | #0a0a0a | neutral-950 |
| Surface | #171717 | neutral-900 |
| Border | #262626 | neutral-800 |
| Border hover | #34d399 | emerald-400 |
| Body text | #d4d4d4 | neutral-300 |
| Headings | #f5f5f5 | neutral-100 |
| Muted | #737373 | neutral-500 |
| Accent | #34d399 | emerald-400 |

**Light mode:**
| Token | Value | Tailwind |
|-------|-------|----------|
| Background | #fafafa | neutral-50 |
| Surface | #ffffff | white |
| Border | #e5e5e5 | neutral-200 |
| Border hover | #047857 | emerald-700 |
| Body text | #404040 | neutral-700 |
| Headings | #171717 | neutral-900 |
| Muted | #737373 | neutral-500 |
| Accent | #047857 | emerald-700 |

### Typography

- Body/headings: Inter (subsetted, Latin, weights 400/500/700)
- Code/tags: JetBrains Mono (subsetted, Latin, weight 400)
- Combined font payload target: <50KB
- font-display: swap

Scale:
| Element | Size | Weight | Line height |
|---------|------|--------|-------------|
| Hero name | text-4xl (36px), text-3xl mobile | bold (700) | tight (1.2) |
| Hero role | text-xl (20px) | normal (400) | tight |
| Tagline | text-lg (18px) | normal (400) | relaxed (1.6) |
| Section heading | text-2xl (24px) | semibold (600) | tight |
| Card title | text-lg (18px) | semibold (600) | tight |
| Body | text-base (16px) | normal (400) | relaxed (1.6) |
| Small/meta | text-sm (14px) | normal (400) | relaxed |
| Code/mono | text-sm (14px) | normal (400) | relaxed |

### Layout & Spacing

- Content max-width: 720px, centered on page
- All text left-aligned within content block
- Section gap: space-y-24 (96px), mobile space-y-16 (64px)
- Card gap: space-y-8 (32px)
- Card padding: p-6 (24px), mobile p-4 (16px)
- Page horizontal padding: px-6 (24px) constant
- Hero padding: py-16 top, py-12 bottom
- Footer padding: py-12
- Tag gap: gap-2 (8px)
- Paragraph spacing: space-y-4 (16px)

### Components

**Header:** Sticky, all pages. Left: site name (text link to `/`). Right: dark mode toggle. Same background as page, 1px border-bottom. Padding: py-4 px-6.

**Dark mode toggle:** Text button showing mode it switches TO ("Light" / "Dark"). `role="button"`, `aria-pressed`, keyboard operable.

**CTA button:** Filled. Dark: emerald-400 bg + neutral-950 text. Light: emerald-700 bg + white text. Padding: py-3 px-8. Border-radius: 4px. Hover: opacity 0.9.

**Project cards:** 1px border, 4px radius. Hover: border color shifts to emerald accent (0.15s ease). No shadows, no translateY.

**Tech tags:** Plain text, JetBrains Mono, 13px, slash-separated. neutral-400 text (dark) / neutral-500 (light).

**Social links:** Text only, middle-dot separated. neutral-400 (dark) / neutral-500 (light). Hover: neutral-200 (dark) / neutral-700 (light).

### Animations

All restrained. Home page only (case study pages load statically).

- Fade-up on scroll: opacity 0->1, translateY(16px)->0, 0.4s ease-out. IntersectionObserver.
- Card stagger: 100ms between cards (0ms, 100ms, 200ms).
- Card border hover: 0.15s ease on border-color.
- View Transitions: default crossfade (~250ms). Header persists (no transition).
- `prefers-reduced-motion: reduce` disables all of the above.

### Anti-Slop Rules

No gradients. No blobs/waves/SVG dividers. No icons in colored circles. No emoji as design. No colored left-borders on cards. No centered text. No generic taglines.

## Dark Mode

- Default: follows `prefers-color-scheme`
- Stored preference: localStorage
- FOUC prevention: inline `<script>` in `<head>` applies `dark` class on `<html>` before paint
- Fallback: if localStorage blocked, use OS preference
- Toggle persists to localStorage on click

## Responsive Design

Breakpoints (Tailwind defaults):

- Mobile: 0-639px (base styles)
- Tablet: 640px+ (no layout changes, 720px max-width handles it)
- Desktop: 768px+ (hero name scales up, more section spacing)
- No lg/xl breakpoints needed

Mobile-specific:

- Hero name: text-3xl -> md:text-4xl
- Section spacing: space-y-16 -> md:space-y-24
- Card padding: p-4 -> md:p-6
- Case study prev/next: stacked vertically on mobile, inline on sm:
- Touch targets: min 44x44px (WCAG 2.5.5 AAA)

## Accessibility

- Semantic HTML: main, header, footer, nav, article, section. No div soup.
- Heading hierarchy: strict h1 > h2 > h3, no skipped levels, one h1 per page.
- Skip-to-content link: visually hidden, appears on first Tab, jumps to main.
- Focus visible: 2px outline in accent color, outline-offset 2px. Never outline:none without replacement.
- ARIA: dark mode toggle (role=button, aria-label, aria-pressed), nav landmarks (aria-label), external links (aria-label including "opens in new tab").
- Reduced motion: @media (prefers-reduced-motion: reduce) disables all animations.
- Color not sole indicator.
- All images require meaningful alt text (V1 placeholders: aria-hidden=true).
- html lang="en".
- Contrast: all text/background combos meet WCAG AA (4.5:1 body, 3:1 large text). Both themes verified independently.

## Performance Targets

- Lighthouse: 100/100 all four categories
- First Contentful Paint: <500ms
- Total JS: <5KB
- Total page weight: <100KB (excluding images and fonts)
- Font payload: <50KB combined
- Zero console errors, zero console warnings
- HTTP/2, Brotli compression, proper cache headers

## Conversion Contract (V1)

- Primary CTA: "Contact me" button in hero (mailto with pre-filled subject)
- Secondary CTA: "Let's work together" text link in footer (same mailto)
- Contextual CTA: "Want to work together?" at bottom of each case study
- Event tracking: `cta_primary_click`, `cta_secondary_click` events
- Weekly KPI review: sessions, CTA clicks, click-through rate

## Browser Matrix

- Chrome 120+ (desktop + Android)
- Firefox 120+ (desktop)
- Safari 17+ (macOS + iOS)
- Edge 120+ (desktop)
- View Transitions: progressive enhancement (graceful fallback = standard page nav)

## Interaction States

| Component         | Loading                                      | Empty                              | Error                                             | Success                         |
| ----------------- | -------------------------------------------- | ---------------------------------- | ------------------------------------------------- | ------------------------------- |
| Fonts             | font-display:swap, fallback text immediately | n/a                                | System font fallback stack                        | Normal render                   |
| Project cards     | n/a (SSG)                                    | Hide "Projects" section            | Build-time validation                             | 3 cards with metadata           |
| Case study images | Gray box, themed border                      | 16:9 placeholder box               | Same as empty                                     | Image in aspect-ratio container |
| CTA               | n/a                                          | n/a                                | n/a (just a link)                                 | mailto opens with subject       |
| Dark mode toggle  | Inline head script                           | Default to OS preference           | localStorage blocked: OS pref fallback            | Toggles + persists              |
| Scroll animations | n/a                                          | n/a                                | IntersectionObserver unsupported: show statically | Cards fade-up                   |
| View Transitions  | Default crossfade                            | n/a                                | Unsupported: standard page nav                    | Smooth crossfade                |
| Prev/next nav     | n/a                                          | First: hide prev. Last: hide next. | n/a                                               | Text links to adjacent projects |

## File Structure

```
uphouse-consulting/
  package.json
  astro.config.mjs
  tsconfig.json
  src/
    layouts/
      BaseLayout.astro
    pages/
      index.astro
      404.astro
      projects/[slug].astro
    content/
      config.ts
      projects/*.md
    data/
      profile.json
    styles/
      global.css
    scripts/
      theme-init.ts
  public/
    favicon.svg
  tests/
    unit/
      theme-init.test.ts
      content-schema.test.ts
      routes.test.ts
    e2e/
      home-contact.e2e.ts
      projects-nav.e2e.ts
      darkmode-fouc.e2e.ts
      perf-budget.e2e.ts
```

## Test Coverage

### Unit Tests

- theme-init: localStorage read/write, OS preference fallback, class toggle
- content-schema: frontmatter validation, missing fields, fallback behavior
- routes: valid slugs render, unknown slugs -> 404

### E2E Tests

- LinkedIn visitor -> home -> contact click (CTA works, mailto correct)
- Recruiter -> project card -> case study -> back (navigation flow)
- Unknown slug -> styled 404 with home link
- Dark mode first paint (no FOUC), toggle persistence across pages
- Performance budgets: JS size, page weight, console clean

## Not in Scope (V1)

- Contact form backend (V2 — use V1 KPI baseline first)
- View-source reveal mechanic (V2)
- Dynamic OG images (V2)

## Parallelization Strategy

| Lane | Steps                                   | Touches                         |
| ---- | --------------------------------------- | ------------------------------- |
| A    | scaffold -> content model -> routes     | config, layouts, pages, content |
| B    | scaffold -> theme/typography            | styles, scripts, layouts        |
| C    | scaffold -> unit tests                  | tests/unit, scripts, content    |
| D    | e2e + perf + deploy (after A+B+C merge) | tests/e2e, Vercel config        |

Conflict flag: Lane A and B both touch `src/layouts/` and `src/styles/`. Coordinate CSS token ownership.

## Deploy

- Vercel free tier, auto-deploy on push to main
- Preview deployments for PRs
- Custom domain via DNS (CNAME/A record)
- Rollback: Vercel native rollback + checklist
- Perf gate: blocking by default, bypass with `PERF_BYPASS=1` + reason

## Analytics

- Plausible or Fathom (privacy-respecting, no cookie banner)
- Track CTA events for conversion measurement
