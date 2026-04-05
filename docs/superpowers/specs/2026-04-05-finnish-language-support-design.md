# Spec: Finnish language support for uphouse-consulting

Date: 2026-04-05
Status: Draft
Source: brainstorming

## Purpose

Introduce a dedicated Finnish version of the site while keeping English as the default experience. The Finnish version should feel native-written, not machine translated, and it must not compromise the site's current performance profile or Lighthouse results.

## Goals

- Keep English as the default locale and default public entry point
- Add first-class Finnish routes for the full site, including project case studies
- Make language switching easy and obvious
- Preserve locale while navigating within the site
- Avoid adding meaningful client-side JavaScript for localization
- Support Finnish copy that is authored separately from English

## Non-Goals

- No same-URL language switching
- No browser-language auto-redirects or auto-suggestions
- No cross-visit locale persistence via localStorage or cookies
- No automatic English-to-Finnish fallback on pages that are meant to exist in Finnish

## Recommended Approach

Use Astro's i18n routing with English as the default locale and Finnish under `/fi/`.

Why this approach:

- Fits Astro's static-site model and keeps localization mostly at build time
- Keeps English and Finnish pages crawlable, shareable, and metadata-correct
- Allows a simple language switcher made of normal links instead of a client-side state system
- Minimizes risk to Lighthouse by avoiding hydration-heavy translation logic

Rejected alternatives:

1. Manual duplicated routes without Astro i18n: workable, but easier to get wrong for links, metadata, and long-term maintenance
2. Same-URL state-based switching: worse for SEO, shareability, simplicity, and likely worse for performance

## Routing and Page Architecture

### Locale structure

- English home: `/`
- English project pages: `/projects/[slug]`
- Finnish home: `/fi/`
- Finnish project pages: `/fi/projects/[slug]`
- Locale-specific 404 handling should exist so Finnish navigation does not bounce users back into English unexpectedly
- Project slugs stay the same across locales; Finnish project pages reuse the English slug under the `/fi/` prefix

### Routing behavior

- English remains the default locale
- English URLs stay unprefixed
- Finnish URLs live under `/fi/`
- No locale is chosen automatically by browser settings
- Locale only changes when a visitor explicitly follows the language switch link

### Shared rendering model

The site should continue to use shared layouts and shared components. Locale-specific behavior should enter through route params and locale-aware content helpers, not through client-side state.

Expected structure:

- Locale-aware page entry points for home, project detail, and not-found flows
- Shared layout receives locale-specific metadata and labels
- Shared components render per-locale labels and links
- Link generation uses locale-aware helpers so navigation stays inside the current locale tree

## Content Model

### Shared UI labels

Short reusable strings should live in a small locale dictionary, for example:

- Header labels
- CTA labels
- Footer labels
- Navigation labels
- Accessibility labels
- 404 copy

This keeps shared chrome consistent while avoiding duplicated hardcoded strings across components.

### Authored page copy

Long-form content should be authored separately per locale.

This includes:

- Home page marketing copy
- Meta titles and descriptions
- Project card outcome text
- Project case study frontmatter
- Project case study body content

Finnish should not be derived mechanically from English at render time. The content model should support two intentionally written versions of the same page.

### Project pairing

Each project should have a stable cross-locale identity so English and Finnish versions can be linked together safely. The implementation plan should include a project key or equivalent pairing field rather than relying on title matching or ad hoc slug conventions. Slugs themselves remain shared across locales to keep routing and pairing straightforward.

### Publication rule

If a Finnish counterpart for a page does not exist, the Finnish version of that page should not be exposed. In that case, locale-switch links to Finnish should be hidden on that page instead of sending users to a fallback location. This avoids mixed-language UX and keeps the Finnish section trustworthy.

## Navigation and Language Switching

### Language switcher

The language switch should be a normal route link, not a dark-mode-style client toggle.

Behavior:

- On `/`, switcher points to `/fi/`
- On `/fi/`, switcher points to `/`
- On English project pages, switcher points to the paired Finnish project page
- On Finnish project pages, switcher points to the paired English project page
- If no counterpart exists for the destination locale, the switcher is hidden on that page

### Locale continuity

Once a user is inside a locale tree, internal links should remain inside that locale:

- Project cards
- Previous/next project navigation
- Back-to-home links
- Header home link
- Footer CTA where relevant

No localStorage, cookie, or browser preference logic is needed. Locale continuity comes from the links themselves.

## Launch Assumption

The initial rollout includes both English and Finnish for all current public pages:

- Home page
- Every current project detail page
- The not-found experience

Missing-counterpart rules exist to keep future content additions safe, but the launch target is a fully bilingual public site rather than a partial Finnish beta.

## Metadata and SEO

Each locale should have its own:

- `<html lang>`
- page title
- meta description
- canonical URL
- alternate language links where appropriate

Canonical URLs should be self-referential per locale page. English remains the default entry point and default unprefixed URL structure, but Finnish pages should canonicalize to their own `/fi/...` URLs and use alternate-language links to express the relationship.

If a page does not have a counterpart in the other locale, alternate-language links for that missing counterpart should be omitted.

## Accessibility

Localization should preserve the current accessibility standard.

Requirements:

- Localize visible labels and matching accessible names together
- Keep switcher text clear about the destination language
- Preserve semantic structure and landmark consistency across locales
- Keep touch targets and keyboard behavior unchanged
- Ensure `lang` is correct on every localized page

## Performance Constraints

The localization design must behave like a routing and content change, not like a runtime translation system.

Guardrails:

- Avoid meaningful additional client JavaScript for localization
- Do not hydrate a language store or translation framework for this feature
- Keep the language switcher server-rendered
- Reject any implementation that materially increases shipped JS or page weight compared with the current site

The existing performance tests already create a useful baseline, and the implementation plan should extend them rather than introducing a separate performance strategy.

At minimum, planners should preserve and extend the existing Playwright performance coverage that checks console cleanliness, JavaScript payload budget, and total transferred bytes on representative pages.

## Testing Strategy

Playwright coverage should expand to validate:

- English still works as the default locale
- Finnish home page renders under `/fi/`
- Finnish project pages render under `/fi/projects/[slug]`
- Language switching preserves page context
- Locale-specific navigation stays in-locale
- Missing localized counterparts do not create broken or mixed-language links
- Console stays clean on both English and Finnish pages
- Performance budgets remain within the current intent of the site

## What It Will Take

The work falls into four main areas:

1. Routing and layout updates
   - Add Astro i18n configuration
   - Introduce locale-aware routes
   - Add locale-aware metadata and alternate links
   - Add a server-rendered language switcher

2. Content restructuring
   - Extract shared UI labels into a locale dictionary
   - Restructure home-page copy into locale-aware content
   - Introduce bilingual project content pairing
   - Write Finnish content for all existing pages and case studies

3. Navigation and QA wiring
   - Update all internal links to preserve locale
   - Ensure 404 and edge navigation behave correctly
   - Verify accessibility labels across locales

4. Test expansion
   - Add Finnish route coverage
   - Add locale-switch navigation coverage
   - Keep performance and console checks active for both locales

## Main Risks

1. Content quality risk
   - The biggest risk is weak Finnish copy, not routing complexity
   - Native-sounding Finnish requires deliberate writing and review

2. Content maintenance risk
   - English and Finnish can drift if updates are made in only one locale
   - The implementation plan should include a clear rule for updating both locales together

3. Pairing risk
   - If English and Finnish project entries are not linked by a stable key, locale switching on project pages will become fragile

4. Performance regression risk
   - Adding a client-side i18n layer would conflict with the site's performance goals
   - The implementation must keep localization mostly static and route-based
