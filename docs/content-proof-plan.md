# Content Proof Plan: Good Fit Section + Case Study Proof Blocks

## Summary

Add two restrained content improvements to the UpHouse Consulting portfolio:

1. A homepage **"Where I'm useful"** section.
2. A project-page **"At a glance"** proof block.

These should reduce interpretation work for readers without changing the site's essence. The site should still feel quiet, narrow, bilingual, content-led, and personal.

## Visual Direction

Use a **quiet editorial style**, not a services-page style.

- Homepage treatment: **Editorial List**
  - Place after "How I work" and before "Projects".
  - Use one short intro paragraph.
  - Render four fit items as a vertical list, not a card grid.
  - Use small muted mono numbers or labels for structure.
  - Avoid icons, illustrations, large cards, gradients, and sales-page styling.
- Project-page treatment: **Compact Proof Box**
  - Place after project title metadata and before the markdown narrative.
  - Use a subtle bordered box with existing theme tokens.
  - Use compact labels: `Problem`, `My contribution`, `Result`.
  - Keep labels visually distinct but quiet, likely small, muted, and mono/uppercase.
  - The block should be scannable but not louder than the actual case study.

## Content Changes

Add homepage copy for:

- Long-running product work
- Public-facing services
- Modernization without drama
- Greenfield projects with ambition

Add a small "probably not the best fit" note. Keep it direct and tasteful, not defensive.

Add structured project proof content for every English and Finnish case study:

```ts
atAGlance: {
  problem: string;
  contribution: string;
  result: string;
}
```

Each value should be one concise sentence. The proof block should summarize the value of the work, not repeat the opening paragraphs.

## Implementation Notes

- Update localized homepage copy in `src/data/site-copy.ts`.
- Extend the project content schema in `src/content/config.ts`.
- Add `atAGlance` frontmatter to all English and Finnish project markdown files.
- Render the homepage section in `src/components/HomePage.astro`.
- Render the proof box in `src/components/ProjectPage.astro`.
- Keep styling inline with existing Tailwind patterns and CSS variables.
- Do not add backend functionality, contact forms, analytics, or view-source interaction as part of this change.

## Test Plan

- Run `npm run build`.
- Run `npm test`.
- Manually inspect English and Finnish homepage/project pages on desktop and mobile.
- Confirm the homepage does not feel like a generic services page.
- Confirm proof boxes improve skim value without overpowering the case study prose.

## Assumptions

- The contact flow remains email-first.
- The site remains a small bilingual portfolio, not a productized consulting landing page.
- Visual hierarchy should stay restrained: text first, structure second, decoration never.
