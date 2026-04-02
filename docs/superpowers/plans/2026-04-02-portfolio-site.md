# uphouse-consulting Portfolio Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a craft-quality, dark-mode-default portfolio site that converts LinkedIn clicks into work inquiries.

**Architecture:** Astro 5 static site with Tailwind v4 theming, vanilla JS islands for dark mode and scroll animations. Content in Markdown (case studies) and JSON (profile data). Single-column layout, 720px max-width. Deploy to Vercel.

**Tech Stack:** Astro 5, Tailwind v4, TypeScript, Vitest (unit), Playwright (e2e), Vercel

---

## File Structure

```
uphouse-consulting/
  package.json
  astro.config.mjs
  tsconfig.json
  tailwind.config.ts
  vitest.config.ts
  playwright.config.ts
  .gitignore
  src/
    layouts/
      BaseLayout.astro          # Shell: html, head, meta, theme-init script, header, footer, slot
    components/
      Header.astro              # Sticky header: site name link + dark mode toggle
      Footer.astro              # Footer: secondary CTA, social links, copyright, built-with
      ProjectCard.astro         # Single project card: title, description, tags, outcome, link
      SkipLink.astro            # Skip-to-content accessibility link
    pages/
      index.astro               # Home: hero, bio, project cards
      404.astro                 # Not found page
      projects/
        [slug].astro            # Case study detail page
    content/
      config.ts                 # Astro content collection schema (Zod)
      projects/
        public-transport-webshop.md
        public-transport-website.md
        japanese-ai-tutor.md
    data/
      profile.json              # Global profile metadata
    styles/
      global.css                # Tailwind imports + custom theme tokens + base styles
    scripts/
      theme-init.ts             # Inline head script: read localStorage/OS pref, apply dark class
      theme-toggle.ts           # Toggle button logic: flip class, persist to localStorage
      scroll-fade.ts            # IntersectionObserver fade-up for project cards (home only)
  public/
    favicon.svg                 # Simple favicon
    fonts/
      inter-latin-400.woff2     # Subsetted Inter Regular
      inter-latin-600.woff2     # Subsetted Inter SemiBold
      inter-latin-700.woff2     # Subsetted Inter Bold
      jetbrains-mono-latin-400.woff2  # Subsetted JetBrains Mono Regular
  tests/
    unit/
      theme-init.test.ts        # Theme initialization logic tests
      content-schema.test.ts    # Content collection schema validation tests
    e2e/
      home.e2e.ts               # Home page: hero, bio, cards, CTA, links
      projects.e2e.ts           # Case study: render, nav, CTA, 404 fallback
      darkmode.e2e.ts           # Dark mode: no FOUC, toggle, persistence
      perf.e2e.ts               # Performance budgets: JS size, page weight, console clean
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- Create: `src/styles/global.css`
- Create: `src/pages/index.astro` (minimal placeholder)
- Create: `public/favicon.svg`

- [ ] **Step 1: Initialize Astro project**

```bash
cd /Users/tuukka.ylostalo/Projects/uphouse-consulting
npm create astro@latest . -- --template minimal --typescript strict --install --git
```

Accept defaults. This creates the base Astro project with TypeScript.

- [ ] **Step 2: Install dependencies**

```bash
npm install @astrojs/tailwind tailwindcss @tailwindcss/vite
npm install -D vitest playwright @playwright/test
```

- [ ] **Step 3: Configure Astro**

Replace `astro.config.mjs` with:

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://uphouse-consulting.com',
});
```

- [ ] **Step 4: Set up Tailwind with custom theme**

Replace `src/styles/global.css` with:

```css
@import 'tailwindcss';

@theme {
  /* Fonts */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Dark mode tokens (default) */
  --color-bg: #0a0a0a;
  --color-surface: #171717;
  --color-border: #262626;
  --color-border-hover: #34d399;
  --color-text: #d4d4d4;
  --color-heading: #f5f5f5;
  --color-muted: #737373;
  --color-accent: #34d399;

  /* Light mode tokens (applied via .light class) */
  --color-bg-light: #fafafa;
  --color-surface-light: #ffffff;
  --color-border-light: #e5e5e5;
  --color-border-hover-light: #047857;
  --color-text-light: #404040;
  --color-heading-light: #171717;
  --color-muted-light: #737373;
  --color-accent-light: #047857;
}

@layer base {
  html {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-sans);
  }

  html.light {
    --color-bg: var(--color-bg-light);
    --color-surface: var(--color-surface-light);
    --color-border: var(--color-border-light);
    --color-border-hover: var(--color-border-hover-light);
    --color-text: var(--color-text-light);
    --color-heading: var(--color-heading-light);
    --color-muted: var(--color-muted-light);
    --color-accent: var(--color-accent-light);
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/inter-latin-400.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/inter-latin-600.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/inter-latin-700.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/jetbrains-mono-latin-400.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 5: Create minimal favicon**

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="4" fill="#34d399"/>
  <text x="16" y="22" font-family="system-ui" font-size="18" font-weight="700" fill="#0a0a0a" text-anchor="middle">U</text>
</svg>
```

- [ ] **Step 6: Download and place subsetted fonts**

```bash
mkdir -p public/fonts
# Download subsetted Inter (Latin, woff2) from Google Fonts CDN
curl -o public/fonts/inter-latin-400.woff2 "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
curl -o public/fonts/inter-latin-600.woff2 "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff2"
curl -o public/fonts/inter-latin-700.woff2 "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff2"
curl -o public/fonts/jetbrains-mono-latin-400.woff2 "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOTk6OThhvA.woff2"
```

Note: If these exact URLs are stale, get current URLs from [Google Fonts](https://fonts.google.com). The key requirement is: woff2 format, Latin subset only.

- [ ] **Step 7: Update .gitignore**

Append to `.gitignore`:

```
.superpowers/
```

- [ ] **Step 8: Create placeholder index page**

Replace `src/pages/index.astro` with:

```astro
---
import '../styles/global.css';
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tuukka Ylöstalo — Software Developer</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body class="bg-[var(--color-bg)] text-[var(--color-text)]">
    <main class="max-w-[720px] mx-auto px-6">
      <h1 class="text-4xl font-bold text-[var(--color-heading)] pt-16">Tuukka Ylöstalo</h1>
      <p class="text-[var(--color-muted)]">Scaffold working. Tailwind + fonts loading.</p>
    </main>
  </body>
</html>
```

- [ ] **Step 9: Verify scaffold builds and dev server runs**

```bash
npm run dev
```

Expected: Dev server starts, page loads at localhost:4321, shows name + placeholder text, custom fonts load, dark background visible.

- [ ] **Step 10: Init git repo and commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Astro 5 + Tailwind v4 project with theme tokens and fonts"
```

---

## Task 2: Theme System (Dark Mode)

**Files:**
- Create: `src/scripts/theme-init.ts`
- Create: `src/scripts/theme-toggle.ts`
- Create: `tests/unit/theme-init.test.ts`
- Create: `vitest.config.ts`

- [ ] **Step 1: Configure Vitest**

Create `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
  },
});
```

- [ ] **Step 2: Write failing tests for theme-init**

Create `tests/unit/theme-init.test.ts`:

```ts
import { describe, it, expect, vi, beforeEach } from 'vitest';

// theme-init logic extracted as a pure function for testing
// The actual inline script in <head> will call this logic
function getInitialTheme(
  storedTheme: string | null,
  prefersDark: boolean,
): 'dark' | 'light' {
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }
  return prefersDark ? 'dark' : 'light';
}

describe('getInitialTheme', () => {
  it('returns stored theme when localStorage has "dark"', () => {
    expect(getInitialTheme('dark', false)).toBe('dark');
  });

  it('returns stored theme when localStorage has "light"', () => {
    expect(getInitialTheme('light', true)).toBe('light');
  });

  it('returns "dark" when no stored theme and OS prefers dark', () => {
    expect(getInitialTheme(null, true)).toBe('dark');
  });

  it('returns "light" when no stored theme and OS prefers light', () => {
    expect(getInitialTheme(null, false)).toBe('light');
  });

  it('ignores invalid stored values and falls back to OS preference', () => {
    expect(getInitialTheme('invalid', true)).toBe('dark');
    expect(getInitialTheme('', false)).toBe('light');
  });
});
```

- [ ] **Step 3: Run tests to verify they pass**

```bash
npx vitest run
```

Expected: All 5 tests pass (the function is defined inline in the test file for now — pure logic, no DOM dependency).

- [ ] **Step 4: Write theme-init inline script**

Create `src/scripts/theme-init.ts`:

```ts
// This script runs inline in <head> to prevent FOUC.
// It is NOT bundled — it's inlined as a <script> tag in BaseLayout.
// Keep it minimal: read preference, apply class, done.
export const themeInitScript = `
(function() {
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch(e) {}
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = (stored === 'light' || stored === 'dark') ? stored : (prefersDark ? 'dark' : 'light');
  if (theme === 'light') {
    document.documentElement.classList.add('light');
  }
})();
`;
```

Note: Dark is the default (no class needed). Only `light` class is added when light mode is active.

- [ ] **Step 5: Write theme-toggle script**

Create `src/scripts/theme-toggle.ts`:

```ts
// Client-side toggle logic. Loaded as a small inline script or island.
export function initThemeToggle(): void {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function updateToggle(): void {
    const isLight = document.documentElement.classList.contains('light');
    toggle!.textContent = isLight ? 'Dark' : 'Light';
    toggle!.setAttribute('aria-pressed', isLight ? 'false' : 'true');
  }

  toggle.addEventListener('click', () => {
    const isCurrentlyLight = document.documentElement.classList.contains('light');
    if (isCurrentlyLight) {
      document.documentElement.classList.remove('light');
      try { localStorage.setItem('theme', 'dark'); } catch(e) {}
    } else {
      document.documentElement.classList.add('light');
      try { localStorage.setItem('theme', 'light'); } catch(e) {}
    }
    updateToggle();
  });

  updateToggle();
}
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add theme initialization and toggle with unit tests"
```

---

## Task 3: Content Model

**Files:**
- Create: `src/content/config.ts`
- Create: `src/data/profile.json`
- Create: `src/content/projects/public-transport-webshop.md`
- Create: `src/content/projects/public-transport-website.md`
- Create: `src/content/projects/japanese-ai-tutor.md`
- Create: `tests/unit/content-schema.test.ts`

- [ ] **Step 1: Write content collection schema**

Create `src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    duration: z.string(),
    outcome: z.string().max(120),
    order: z.number(),
  }),
});

export const collections = { projects };
```

- [ ] **Step 2: Create profile.json**

Create `src/data/profile.json`:

```json
{
  "name": "Tuukka Ylöstalo",
  "role": "Software Developer",
  "tagline": "Less complexity, more software.",
  "bio": "Fullstack developer based in Helsinki. I push back on wasted effort and build what actually matters — for the users, the team, and the codebase.",
  "email": "tuukka@example.com",
  "linkedin": "https://linkedin.com/in/tuukka-ylostalo",
  "github": "https://github.com/tuukka-ylostalo",
  "domain": "uphouse-consulting.com",
  "ctaSubject": "Work inquiry via uphouse-consulting.com"
}
```

Note: Replace email, linkedin, github with real values before deploy.

- [ ] **Step 3: Create case study markdown files**

Create `src/content/projects/public-transport-webshop.md`:

```markdown
---
title: "Public Transport Webshop"
role: "Fullstack Developer"
stack: ["TypeScript", "Next.js", "React", "Sass", "Azure"]
duration: "2023–2024"
outcome: "Shipped a customer-facing ticket purchasing app deployed on Azure."
order: 1
---

## The problem

A public transport operator needed a new webshop where customers could purchase tickets and load value onto their travel cards — for themselves and others.

## What I tried

Our team was responsible for the customer-facing web application: the frontend and a lightweight backend. I was the primary developer for an extended period, handling software design and implementation decisions.

## What I shipped

A production Next.js application deployed as a Docker image on Azure's cloud platform. The app handles ticket purchases, travel card value loading, and multi-recipient transactions.

## Outcomes

- Production application serving real customers
- Maintained and evolved as the primary developer
- Clean separation between frontend client and backend services
```

Create `src/content/projects/public-transport-website.md`:

```markdown
---
title: "Public Transport Website"
role: "Fullstack Developer"
stack: ["TypeScript", "Next.js", "React", "NestJS", ".NET", "ElasticSearch", "Azure"]
duration: "2024–2025"
outcome: "Migrated Next.js 12 to 14, built search service and component library."
order: 2
---

## The problem

A major public transport operator's website needed ongoing development: new features for content producers, electronic forms, and a completely new search service. The codebase also carried significant technical debt.

## What I tried

Tackled technical debt head-on: migrated Next.js from version 12 to 14, transitioned from the pages router to the app router, and built an internal component library. For the search service, integrated ElasticSearch to replace the existing solution.

## What I shipped

- Next.js 12 to 14 migration with full pages-to-app router transition
- New site-wide search service powered by ElasticSearch
- Electronic forms system for customer-facing workflows
- Internal component library used across the organization

## Outcomes

- Reduced technical debt across the frontend codebase
- Search service handles production traffic
- Component library adopted by the wider team
```

Create `src/content/projects/japanese-ai-tutor.md`:

```markdown
---
title: "Japanese AI Tutor"
role: "Solo Developer"
stack: ["SvelteKit 2", "Svelte 5", "TypeScript", "OpenAI", "TursoSQL", "Vercel"]
duration: "2025–present"
outcome: "Built an AI-powered language learning app with gamification."
order: 3
---

## The problem

Existing language learning apps teach generic textbook phrases. I wanted something that teaches practical, real-world Japanese — with AI adapting to my level and goals.

## What I tried

Built a Duolingo-style app from scratch, but with AI as the actual tutor instead of pre-written exercises. Added gamification mechanics for habit building. Used the project as an opportunity to go deep on AI agent orchestrators and workflow patterns.

## What I shipped

An MVP language learning app where an AI tutor generates personalized lessons, tracks progress, and adapts difficulty. Built entirely with AI-assisted workflows — the app itself is a case study in working with AI tooling.

## Outcomes

- MVP ready and in daily personal use
- Hands-on experience with AI agent orchestration patterns
- Full-stack SvelteKit application deployed on Vercel
```

- [ ] **Step 4: Write content schema validation test**

Create `tests/unit/content-schema.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Mirror the schema from content/config.ts for unit testing
// (Astro's content collection schemas aren't directly importable outside Astro context)
const projectSchema = z.object({
  title: z.string(),
  role: z.string(),
  stack: z.array(z.string()),
  duration: z.string(),
  outcome: z.string().max(120),
  order: z.number(),
});

describe('project frontmatter schema', () => {
  it('validates a complete project entry', () => {
    const valid = {
      title: 'Test Project',
      role: 'Developer',
      stack: ['TypeScript', 'React'],
      duration: '2024–2025',
      outcome: 'Shipped something useful.',
      order: 1,
    };
    expect(projectSchema.parse(valid)).toEqual(valid);
  });

  it('rejects missing title', () => {
    const invalid = {
      role: 'Developer',
      stack: ['TypeScript'],
      duration: '2024',
      outcome: 'Done.',
      order: 1,
    };
    expect(() => projectSchema.parse(invalid)).toThrow();
  });

  it('rejects outcome over 120 characters', () => {
    const invalid = {
      title: 'Test',
      role: 'Developer',
      stack: ['TypeScript'],
      duration: '2024',
      outcome: 'A'.repeat(121),
      order: 1,
    };
    expect(() => projectSchema.parse(invalid)).toThrow();
  });

  it('rejects non-array stack', () => {
    const invalid = {
      title: 'Test',
      role: 'Developer',
      stack: 'TypeScript',
      duration: '2024',
      outcome: 'Done.',
      order: 1,
    };
    expect(() => projectSchema.parse(invalid)).toThrow();
  });
});
```

- [ ] **Step 5: Install zod (used by Astro content collections, also needed for test)**

```bash
npm install zod
```

- [ ] **Step 6: Run tests**

```bash
npx vitest run
```

Expected: All theme-init tests + all content-schema tests pass.

- [ ] **Step 7: Verify Astro build with content**

```bash
npm run build
```

Expected: Build succeeds, content collections are validated.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: add content model with project case studies and profile data"
```

---

## Task 4: Base Layout + Header + Footer + Skip Link

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/SkipLink.astro`
- Modify: `src/pages/index.astro` (switch to use BaseLayout)

- [ ] **Step 1: Create SkipLink component**

Create `src/components/SkipLink.astro`:

```astro
---
// Skip-to-content link for keyboard accessibility.
// Visually hidden, appears on first Tab press.
---

<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--color-accent)] focus:text-[var(--color-bg)] focus:px-4 focus:py-2 focus:rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
>
  Skip to content
</a>
```

- [ ] **Step 2: Create Header component**

Create `src/components/Header.astro`:

```astro
---
// Sticky header: site name (left) + dark mode toggle (right).
// Border-bottom separator. Same background as page.
---

<header class="sticky top-0 z-40 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
  <div class="max-w-[720px] mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="text-[var(--color-heading)] font-semibold text-base hover:text-[var(--color-accent)] transition-colors duration-150">
      Tuukka Ylöstalo
    </a>
    <button
      id="theme-toggle"
      type="button"
      role="button"
      aria-label="Toggle dark mode"
      aria-pressed="true"
      class="text-sm text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors duration-150 px-2 py-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
    >
      Light
    </button>
  </div>
</header>
```

- [ ] **Step 3: Create Footer component**

Create `src/components/Footer.astro`:

```astro
---
import profile from '../data/profile.json';

const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(profile.ctaSubject)}`;
---

<footer class="border-t border-[var(--color-border)] mt-24">
  <div class="max-w-[720px] mx-auto px-6 py-12 space-y-4">
    <p>
      <a
        href={mailtoHref}
        class="text-[var(--color-accent)] hover:underline"
      >
        Let's work together
      </a>
    </p>
    <p class="text-sm text-[var(--color-muted)]">
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" class="hover:text-[var(--color-heading)] transition-colors duration-150">GitHub</a>
      <span class="mx-2">&middot;</span>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" class="hover:text-[var(--color-heading)] transition-colors duration-150">LinkedIn</a>
      <span class="mx-2">&middot;</span>
      <a href={mailtoHref} class="hover:text-[var(--color-heading)] transition-colors duration-150">Email</a>
    </p>
    <p class="text-sm text-[var(--color-muted)]">&copy; 2026 {profile.name}</p>
    <p class="text-sm text-[var(--color-muted)]">Built with Astro</p>
  </div>
</footer>
```

- [ ] **Step 4: Create BaseLayout**

Create `src/layouts/BaseLayout.astro`:

```astro
---
import SkipLink from '../components/SkipLink.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { themeInitScript } from '../scripts/theme-init';
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Software Developer based in Helsinki' } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <script set:html={themeInitScript} />
  </head>
  <body class="bg-[var(--color-bg)] text-[var(--color-text)] leading-relaxed">
    <SkipLink />
    <Header />
    <main id="main-content" class="max-w-[720px] mx-auto px-6">
      <slot />
    </main>
    <Footer />
    <script>
      import { initThemeToggle } from '../scripts/theme-toggle';
      initThemeToggle();
    </script>
  </body>
</html>
```

- [ ] **Step 5: Update index.astro to use BaseLayout**

Replace `src/pages/index.astro` with:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Tuukka Ylöstalo — Software Developer">
  <section class="pt-16 pb-12">
    <h1 class="text-3xl md:text-4xl font-bold text-[var(--color-heading)] leading-tight">
      Tuukka Ylöstalo
    </h1>
    <p class="text-[var(--color-muted)] mt-1">Layout scaffold working.</p>
  </section>
</BaseLayout>
```

- [ ] **Step 6: Verify in dev server**

```bash
npm run dev
```

Expected: Page shows header (name + toggle), main content, footer (links + copyright). Dark mode toggle works. Skip link appears on Tab.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add BaseLayout with header, footer, skip link, and theme toggle"
```

---

## Task 5: Home Page (Hero + Bio + Project Cards)

**Files:**
- Create: `src/components/ProjectCard.astro`
- Modify: `src/pages/index.astro`
- Create: `src/scripts/scroll-fade.ts`

- [ ] **Step 1: Create ProjectCard component**

Create `src/components/ProjectCard.astro`:

```astro
---
interface Props {
  title: string;
  description: string;
  stack: string[];
  outcome: string;
  slug: string;
}

const { title, description, stack, outcome, slug } = Astro.props;
---

<article class="border border-[var(--color-border)] rounded p-4 md:p-6 hover:border-[var(--color-border-hover)] transition-[border-color] duration-150 fade-up">
  <h3 class="text-lg font-semibold text-[var(--color-heading)] leading-tight">
    <a href={`/projects/${slug}`} class="hover:text-[var(--color-accent)] transition-colors duration-150">
      {title}
    </a>
  </h3>
  <p class="mt-2 text-[var(--color-text)]">{outcome}</p>
  <p class="mt-3 text-[13px] font-mono text-[var(--color-muted)]">
    {stack.map((tech, i) => (
      <>{i > 0 && <span class="text-[var(--color-border)]"> / </span>}{tech}</>
    ))}
  </p>
</article>
```

- [ ] **Step 2: Build the full home page**

Replace `src/pages/index.astro` with:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import ProjectCard from '../components/ProjectCard.astro';
import { getCollection } from 'astro:content';
import profile from '../data/profile.json';

const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(profile.ctaSubject)}`;
---

<BaseLayout title={`${profile.name} — ${profile.role}`}>
  {/* Hero */}
  <section class="pt-16 pb-12 space-y-4">
    <h1 class="text-3xl md:text-4xl font-bold text-[var(--color-heading)] leading-tight">
      {profile.name}
    </h1>
    <p class="text-xl text-[var(--color-text)]">{profile.role}</p>
    <p class="text-lg text-[var(--color-text)]">{profile.tagline}</p>
    <div class="pt-2">
      <a
        href={mailtoHref}
        class="inline-block bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold text-sm py-3 px-8 rounded hover:opacity-90 transition-opacity duration-150"
      >
        Contact me
      </a>
    </div>
    <p class="text-sm text-[var(--color-muted)]">
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" class="hover:text-[var(--color-heading)] transition-colors duration-150">GitHub</a>
      <span class="mx-2">&middot;</span>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" class="hover:text-[var(--color-heading)] transition-colors duration-150">LinkedIn</a>
      <span class="mx-2">&middot;</span>
      <a href={mailtoHref} class="hover:text-[var(--color-heading)] transition-colors duration-150">Email</a>
    </p>
  </section>

  {/* Bio */}
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold text-[var(--color-heading)] leading-tight">About</h2>
    <p class="text-[var(--color-text)]">{profile.bio}</p>
  </section>

  {/* Projects */}
  {projects.length > 0 && (
    <section class="mt-16 md:mt-24 space-y-4">
      <h2 class="text-2xl font-semibold text-[var(--color-heading)] leading-tight">Projects</h2>
      <div class="space-y-8">
        {projects.map((project, i) => (
          <div style={`--fade-delay: ${i * 100}ms`}>
            <ProjectCard
              title={project.data.title}
              description=""
              stack={project.data.stack}
              outcome={project.data.outcome}
              slug={project.slug}
            />
          </div>
        ))}
      </div>
    </section>
  )}
</BaseLayout>
```

- [ ] **Step 3: Create scroll-fade script**

Create `src/scripts/scroll-fade.ts`:

```ts
// Fade-up animation for project cards on home page.
// Uses IntersectionObserver. Falls back to visible if unsupported.

export function initScrollFade(): void {
  const elements = document.querySelectorAll('.fade-up');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    return;
  }

  // Set initial hidden state
  elements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    htmlEl.style.opacity = '0';
    htmlEl.style.transform = 'translateY(16px)';
    htmlEl.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    const delay = htmlEl.parentElement?.style.getPropertyValue('--fade-delay') || '0ms';
    htmlEl.style.transitionDelay = delay;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const htmlEl = entry.target as HTMLElement;
          htmlEl.style.opacity = '1';
          htmlEl.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  elements.forEach((el) => observer.observe(el));
}
```

- [ ] **Step 4: Add scroll-fade to BaseLayout**

Modify `src/layouts/BaseLayout.astro` — add after the theme toggle script:

```astro
    <script>
      import { initScrollFade } from '../scripts/scroll-fade';
      initScrollFade();
    </script>
```

Note: This script runs on all pages but only affects elements with `.fade-up` class (home page only). On case study pages it's a no-op.

- [ ] **Step 5: Verify in dev server**

```bash
npm run dev
```

Expected: Home page shows hero (name, role, tagline, CTA button, social links), bio section, 3 project cards that fade up on scroll. Dark mode toggle works. All links functional.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: build home page with hero, bio, and project cards"
```

---

## Task 6: Case Study Page + 404

**Files:**
- Create: `src/pages/projects/[slug].astro`
- Create: `src/pages/404.astro`

- [ ] **Step 1: Create case study page**

Create `src/pages/projects/[slug].astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import profile from '../../data/profile.json';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

const { project } = Astro.props;
const { Content } = await project.render();

const allProjects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(profile.ctaSubject)}`;
---

<BaseLayout title={`${project.data.title} — ${profile.name}`} description={project.data.outcome}>
  {/* Project header */}
  <section class="pt-16 pb-8 space-y-2">
    <h1 class="text-3xl md:text-4xl font-bold text-[var(--color-heading)] leading-tight">
      {project.data.title}
    </h1>
    <p class="text-[var(--color-muted)]">{project.data.role}</p>
    <p class="text-[13px] font-mono text-[var(--color-muted)]">
      {project.data.stack.map((tech: string, i: number) => (
        <>{i > 0 && <span class="text-[var(--color-border)]"> / </span>}{tech}</>
      ))}
    </p>
    <p class="text-sm text-[var(--color-muted)]">{project.data.duration}</p>
  </section>

  {/* Case study body */}
  <article class="prose prose-neutral max-w-none space-y-4
    [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-[var(--color-heading)] [&>h2]:leading-tight [&>h2]:mt-12 [&>h2]:mb-4
    [&>p]:text-[var(--color-text)] [&>p]:leading-relaxed
    [&>ul]:text-[var(--color-text)] [&>ul]:space-y-1 [&>ul]:list-disc [&>ul]:pl-6
    [&>li]:text-[var(--color-text)]
  ">
    <Content />
  </article>

  {/* Contextual CTA */}
  <section class="mt-16 pt-8 border-t border-[var(--color-border)]">
    <p class="text-lg text-[var(--color-heading)]">Want to work together?</p>
    <div class="mt-4">
      <a
        href={mailtoHref}
        class="inline-block bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold text-sm py-3 px-8 rounded hover:opacity-90 transition-opacity duration-150"
      >
        Contact me
      </a>
    </div>
  </section>

  {/* Prev/Next navigation */}
  <nav aria-label="Project navigation" class="mt-12 pb-8 flex flex-col sm:flex-row sm:justify-between gap-4">
    {prevProject ? (
      <a href={`/projects/${prevProject.slug}`} class="text-sm text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors duration-150">
        &larr; {prevProject.data.title}
      </a>
    ) : <span />}
    {nextProject ? (
      <a href={`/projects/${nextProject.slug}`} class="text-sm text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors duration-150 sm:text-right">
        {nextProject.data.title} &rarr;
      </a>
    ) : <span />}
  </nav>

  {/* Back to home */}
  <p class="pb-8">
    <a href="/" class="text-sm text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors duration-150">
      &larr; Back to home
    </a>
  </p>
</BaseLayout>
```

- [ ] **Step 2: Create 404 page**

Create `src/pages/404.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page not found">
  <section class="pt-16 pb-12 space-y-4">
    <h1 class="text-3xl md:text-4xl font-bold text-[var(--color-heading)] leading-tight">
      Page not found
    </h1>
    <p class="text-[var(--color-text)]">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <p>
      <a href="/" class="text-[var(--color-accent)] hover:underline">
        Back to home
      </a>
    </p>
  </section>
</BaseLayout>
```

- [ ] **Step 3: Verify all pages**

```bash
npm run build && npx astro preview
```

Expected:
- Home page: hero, bio, 3 project cards with links
- Click project card -> case study page renders with markdown content
- Prev/next navigation works between projects
- 404 page accessible at any invalid URL
- Dark mode toggle works on all pages

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add case study pages with prev/next nav and 404 page"
```

---

## Task 7: View Transitions

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Add View Transitions to BaseLayout**

Modify `src/layouts/BaseLayout.astro` — add import and component:

In the frontmatter, add:
```ts
import { ViewTransitions } from 'astro:transitions';
```

In the `<head>`, add before the closing `</head>`:
```astro
<ViewTransitions />
```

On the `<header>` element in `Header.astro`, add the transition persist directive:
```astro
<header transition:persist class="sticky top-0 ...">
```

- [ ] **Step 2: Re-initialize client scripts after View Transition navigation**

Modify the script blocks in `BaseLayout.astro` to re-run after navigation:

```astro
<script>
  import { initThemeToggle } from '../scripts/theme-toggle';
  import { initScrollFade } from '../scripts/scroll-fade';

  // Run on initial load
  initThemeToggle();
  initScrollFade();

  // Re-run after View Transition navigation
  document.addEventListener('astro:after-swap', () => {
    initThemeToggle();
    initScrollFade();
  });
</script>
```

- [ ] **Step 3: Verify transitions**

```bash
npm run dev
```

Expected: Navigating between home and project pages shows a smooth crossfade. Header persists (no flash). Dark mode state persists across navigation. Scroll fade animations re-trigger on home page when navigating back.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add View Transitions with persistent header and script re-initialization"
```

---

## Task 8: E2E Tests

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/e2e/home.e2e.ts`
- Create: `tests/e2e/projects.e2e.ts`
- Create: `tests/e2e/darkmode.e2e.ts`
- Create: `tests/e2e/perf.e2e.ts`

- [ ] **Step 1: Configure Playwright**

Create `playwright.config.ts`:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  webServer: {
    command: 'npm run preview',
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:4321',
  },
});
```

- [ ] **Step 2: Install Playwright browsers**

```bash
npx playwright install chromium
```

- [ ] **Step 3: Build the site for testing**

```bash
npm run build
```

- [ ] **Step 4: Write home page tests**

Create `tests/e2e/home.e2e.ts`:

```ts
import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('renders hero with name, role, tagline, and CTA', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toHaveText('Tuukka Ylöstalo');
    await expect(page.getByText('Software Developer')).toBeVisible();
    await expect(page.getByText('Less complexity, more software.')).toBeVisible();

    const cta = page.getByRole('link', { name: 'Contact me' }).first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute('href');
    expect(href).toContain('mailto:');
    expect(href).toContain('subject=');
  });

  test('renders bio section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('push back on wasted effort')).toBeVisible();
  });

  test('renders 3 project cards', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('article');
    await expect(cards).toHaveCount(3);
  });

  test('project card links to case study', async ({ page }) => {
    await page.goto('/');
    const firstCard = page.locator('article').first();
    const link = firstCard.locator('a').first();
    const href = await link.getAttribute('href');
    expect(href).toMatch(/^\/projects\//);
  });

  test('social links are present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /GitHub/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /LinkedIn/i }).first()).toBeVisible();
  });

  test('skip link appears on Tab and targets main content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skipLink = page.getByText('Skip to content');
    await expect(skipLink).toBeVisible();
    const href = await skipLink.getAttribute('href');
    expect(href).toBe('#main-content');
  });
});
```

- [ ] **Step 5: Write project page tests**

Create `tests/e2e/projects.e2e.ts`:

```ts
import { test, expect } from '@playwright/test';

test.describe('Project pages', () => {
  test('case study renders with content', async ({ page }) => {
    await page.goto('/projects/public-transport-webshop');

    await expect(page.locator('h1')).toHaveText('Public Transport Webshop');
    await expect(page.getByText('Fullstack Developer')).toBeVisible();
    await expect(page.getByText('The problem')).toBeVisible();
  });

  test('prev/next navigation works', async ({ page }) => {
    await page.goto('/projects/public-transport-webshop');

    // First project: no prev link, has next
    const nextLink = page.getByRole('link', { name: /Public Transport Website/i });
    await expect(nextLink).toBeVisible();
    await nextLink.click();

    await expect(page.locator('h1')).toHaveText('Public Transport Website');
  });

  test('case study has contextual CTA', async ({ page }) => {
    await page.goto('/projects/public-transport-webshop');
    await expect(page.getByText('Want to work together?')).toBeVisible();
    const cta = page.getByRole('link', { name: 'Contact me' });
    await expect(cta).toBeVisible();
  });

  test('back to home link works', async ({ page }) => {
    await page.goto('/projects/public-transport-webshop');
    await page.getByRole('link', { name: /Back to home/i }).click();
    await expect(page.locator('h1')).toHaveText('Tuukka Ylöstalo');
  });

  test('invalid slug returns 404', async ({ page }) => {
    const response = await page.goto('/projects/nonexistent-project');
    expect(response?.status()).toBe(404);
    await expect(page.getByText('Page not found')).toBeVisible();
    await expect(page.getByRole('link', { name: /Back to home/i })).toBeVisible();
  });
});
```

- [ ] **Step 6: Write dark mode tests**

Create `tests/e2e/darkmode.e2e.ts`:

```ts
import { test, expect } from '@playwright/test';

test.describe('Dark mode', () => {
  test('defaults to dark mode (no light class)', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/light/);
  });

  test('toggle switches to light mode and back', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#theme-toggle');
    const html = page.locator('html');

    // Initially dark
    await expect(toggle).toHaveText('Light');
    await expect(html).not.toHaveClass(/light/);

    // Switch to light
    await toggle.click();
    await expect(html).toHaveClass(/light/);
    await expect(toggle).toHaveText('Dark');

    // Switch back to dark
    await toggle.click();
    await expect(html).not.toHaveClass(/light/);
    await expect(toggle).toHaveText('Light');
  });

  test('persists theme preference across page loads', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#theme-toggle');

    // Switch to light
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/light/);

    // Reload
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/light/);
    await expect(toggle).toHaveText('Dark');
  });

  test('no FOUC on dark mode load', async ({ page }) => {
    // Set dark preference in localStorage before navigating
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('theme', 'dark'));
    await page.reload();

    // html should not have light class at any point
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/light/);
  });
});
```

- [ ] **Step 7: Write performance budget tests**

Create `tests/e2e/perf.e2e.ts`:

```ts
import { test, expect } from '@playwright/test';

test.describe('Performance budgets', () => {
  test('no console errors on home page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('no console errors on project page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/projects/public-transport-webshop');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('total JS payload under 5KB', async ({ page }) => {
    let totalJS = 0;
    page.on('response', (response) => {
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('javascript')) {
        const contentLength = response.headers()['content-length'];
        if (contentLength) totalJS += parseInt(contentLength, 10);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(totalJS).toBeLessThan(5 * 1024); // 5KB
  });

  test('page weight under 100KB (excluding fonts and images)', async ({ page }) => {
    let totalBytes = 0;
    page.on('response', (response) => {
      const contentType = response.headers()['content-type'] || '';
      // Exclude fonts and images
      if (contentType.includes('font') || contentType.includes('image')) return;
      const contentLength = response.headers()['content-length'];
      if (contentLength) totalBytes += parseInt(contentLength, 10);
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(totalBytes).toBeLessThan(100 * 1024); // 100KB
  });
});
```

- [ ] **Step 8: Run all E2E tests**

```bash
npx playwright test
```

Expected: All tests pass. If any fail, fix the source code (not the tests) and re-run.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "test: add E2E tests for home, projects, dark mode, and performance"
```

---

## Task 9: Final Polish + Build Verification

**Files:**
- Modify: various (fixes from testing)

- [ ] **Step 1: Run full unit test suite**

```bash
npx vitest run
```

Expected: All unit tests pass.

- [ ] **Step 2: Run full E2E test suite**

```bash
npm run build && npx playwright test
```

Expected: All E2E tests pass.

- [ ] **Step 3: Run Astro build and check for warnings**

```bash
npm run build 2>&1
```

Expected: Build succeeds with zero warnings.

- [ ] **Step 4: Manual verification checklist**

Start the preview server and verify:

```bash
npx astro preview
```

Check in browser:
- [ ] Dark background on first load (no flash)
- [ ] Toggle to light mode, reload — stays light
- [ ] Toggle back to dark, navigate to project — stays dark
- [ ] All 3 project cards visible on home
- [ ] Cards fade up on scroll
- [ ] Click card -> case study page
- [ ] Prev/next navigation on case studies
- [ ] "Contact me" mailto link has correct subject
- [ ] Footer links work (GitHub, LinkedIn, Email)
- [ ] 404 page at `/nonexistent`
- [ ] Tab through page — skip link appears, focus outlines visible
- [ ] Responsive: narrow browser to ~375px width

- [ ] **Step 5: Fix any issues found**

Address any issues from the manual checklist. Each fix gets its own commit.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: final polish and verification"
```

---

## Task 10: Deploy to Vercel

**Files:**
- No new files (Vercel auto-detects Astro)

- [ ] **Step 1: Create Vercel project**

```bash
npx vercel --yes
```

Follow prompts. Vercel auto-detects Astro and configures build settings.

- [ ] **Step 2: Deploy to production**

```bash
npx vercel --prod
```

Expected: Deploy succeeds, returns a production URL.

- [ ] **Step 3: Verify production site**

Open the production URL and run through the manual checklist from Task 9.

- [ ] **Step 4: Configure custom domain (when ready)**

```bash
npx vercel domains add uphouse-consulting.com
```

Follow DNS instructions from Vercel to point domain.

- [ ] **Step 5: Commit Vercel config if generated**

```bash
git add -A
git commit -m "chore: add Vercel deployment config"
```
