# Agent Notes

This repository is a small bilingual Astro portfolio site for UpHouse Consulting.
Keep changes focused, content-led, and easy to verify.

## Project Shape

- Stack: Astro 5, TypeScript, Tailwind CSS v4 through the Vite plugin, Playwright.
- Deployment target: static Astro build, configured with `site: "https://uphouseconsulting.fi"` in `astro.config.mjs`.
- Main routes:
  - English home: `src/pages/index.astro`
  - Finnish home: `src/pages/fi/index.astro`
  - English projects: `src/pages/projects/[slug].astro`
  - Finnish projects: `src/pages/fi/projects/[slug].astro`
- Shared page shell: `src/layouts/BaseLayout.astro`
- Shared UI: `src/components/`
- Global styling and theme variables: `src/styles/global.css`
- Lightweight browser behavior: `src/scripts/theme-init.ts`, `src/scripts/theme-toggle.ts`, `src/scripts/scroll-fade.ts`

## Commands

Install dependencies:

```bash
npm install
```

Run local development:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Run Playwright tests:

```bash
npm test
```

On the Ubuntu 26.04 Alfred host, `npm test` goes through `scripts/playwright-test.mjs`, which sets Playwright's host-platform override to the Ubuntu 24.04 browser build because Playwright 1.59 has no native `ubuntu26.04-x64` browser target yet.

Preview the production build:

```bash
npm run preview
```

The Playwright config starts `npm run preview -- --host 127.0.0.1 --port 4323`
for tests, so run `npm run build` before `npm test` when testing changes that affect
generated output.

## Content Model

- Global profile data lives in `src/data/profile.json`.
- Shared localized UI copy lives in `src/data/site-copy.ts`.
- Project content lives in Astro content collections:
  - English: `src/content/projects/*.md`
  - Finnish: `src/content/projectsFi/*.md`
- Project frontmatter is validated in `src/content/config.ts`.
- `projectKey` is the stable identity that links English and Finnish versions.
  Keep it identical across locales.
- `order` controls project ordering and previous/next navigation.
- `outcome` must stay at or below 150 characters because the content schema enforces it.
- `atAGlance` is required project frontmatter with `problem`, `contribution`, and
  `result` fields. Keep each field concise and focused on proof/value, not a
  repeat of the opening prose.

When changing user-visible copy, update both English and Finnish unless the task is
explicitly locale-specific. Keep case studies written from the User's perspective and
keep client-sensitive work anonymized.

## Internationalization

- Supported locales are `en` and `fi`, declared in `src/data/site-copy.ts`.
- English is the default locale.
- Locale path helpers are in `src/utils/locale.ts`; use them instead of hardcoding
  route strings inside components.
- Project lookup, sorting, linked slugs, and adjacent navigation are in
  `src/utils/projects.ts`.
- Header language switching depends on each page passing the correct `switchHref`
  into `BaseLayout`.

## UI And Styling

- The site is intentionally restrained: narrow content column, dark mode as the
  default experience, light client-side behavior, and accessible semantic markup.
- Prefer existing CSS custom properties from `global.css` over new one-off colors.
- Tailwind utility classes are used inline in Astro components. Match nearby patterns.
- Preserve accessibility affordances: skip link, semantic headings, aria labels for
  language switching, and visible focus states.
- Avoid adding heavy client-side JavaScript unless the feature clearly needs it.

## Testing Guidance

Use the smallest useful verification for the change:

- Content or copy change: `npm run build`
- Routing, i18n, theme, accessibility, or project navigation change:
  `npm run build` then `npm test`
- Visual/layout change: check desktop and mobile in a browser in addition to build/tests

Relevant tests are in `tests/e2e/`:

- `home.e2e.ts`: home page content, locale switching, project card links, skip link
- `projects.e2e.ts`: project pages, localized project routing, prev/next navigation
- `darkmode.e2e.ts`: theme behavior
- `perf.e2e.ts`: basic performance expectations

## Agent Workflow

### Implementation discipline:

- State material assumptions before editing when they affect scope or safety.
- Prefer the smallest coherent change that satisfies the request.
- When fixing a bug, changing code, or adding a feature, inspect the related and surrounding code to understand the full impact.
- Clean up code that the task makes redundant, duplicated, unreachable, obsolete, or unused. This cleanup is part of the task, not optional refactoring.
- Do not perform unrelated refactors, formatting changes, comment rewrites, documentation edits, or API changes unless they are required by the task or its direct cleanup.
- Update relevant tests to match the intended behaviour. Remove tests only when the behaviour they covered is genuinely obsolete or no longer applicable.
- Every changed line should trace to the task, validation, or cleanup directly caused by the task.
- Define and run appropriate verification before calling the work complete.

- Read this file, `README.md`, and the relevant source files before editing.
- Use `rg`/`rg --files` for search.
- Do not overwrite unrelated local changes. Check `git status --short` before and
  after edits.
- Keep generated artifacts and dependency churn out of commits unless directly needed.
- Prefer small, reviewable changes over broad refactors.
- For library, framework, SDK, API, CLI, or cloud-service questions, use Context7 MCP
  for current documentation before answering or changing code.
- If a change introduces a new workflow, command, environment variable, or content
  convention, update this file or `README.md` so the next agent has the map.

### Branch and PR workflow

- For any project work in this repository — including new features, bug fixes,
  content changes, documentation updates, or agent-policy changes — do not work
  directly on the default branch.
- Create a focused feature/fix branch or worktree from the project default branch,
  make the change there, commit it, push it, and open a GitHub pull request
  against this repository.
- When the work is done, provide the User with the PR link in the normal GitHub format,
  for example `https://github.com/uphouse-tuukka/uphouse-consulting/pull/<number>`.
- Keep the PR focused and reviewable. Do not merge it without explicit instruction.

## Known Helpful Context

- `public/llms.txt` exists and summarizes the public site for LLM consumers.
- The repo currently has no custom lint command beyond Astro build validation and
  Playwright tests.
- The production domain in Astro config is `.fi`; make sure public docs, metadata,
  and generated links do not drift across domains without intent.
