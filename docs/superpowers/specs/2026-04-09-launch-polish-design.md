# Launch polish design

## Goal

Prepare the portfolio for launch by tightening a small set of high-impact details without changing its overall character. The site should stay calm, editorial, and personal rather than drifting toward a louder agency-marketing style.

## Scope

This design covers five launch changes:

1. Production domain and redirect configuration
2. Public demo link for the Japanese AI Tutor project
3. Testimonial placement and styling for the Public Transport Webshop case study
4. Theme-toggle usability improvement
5. A pragmatic AI mention on the homepage

It also records two decisions that are intentionally **out of scope** for implementation:

- No sticky hero CTA on scroll
- No AI mention inside the "How I work" section

## Design decisions

### 1. Domain and canonical URLs

- Set `Astro.site` to `https://uphouseconsulting.fi`
- Add Vercel redirects so:
  - `uphouseconsulting.com/*` redirects to `https://uphouseconsulting.fi/:path*`
  - `uphouseconsulting.online/*` redirects to `https://uphouseconsulting.fi/:path*`
- Redirects should preserve path segments so project-page links continue to work regardless of the incoming domain

This keeps canonical and hreflang tags aligned with the launch domain and avoids splitting trust signals across multiple public URLs.

### 2. AI Tutor demo link

- Extend the project content schema with an optional `demoUrl` field
- Add the public demo URL to both English and Finnish AI Tutor project entries
- Use this URL:
  - `https://japanese-learner-sooty.vercel.app/portfolio/challenge`
- Render the demo link in the project-page header under the existing title / role / stack / duration block
- Style it as a small secondary external link, not as a primary CTA button
- Provide locale-aware copy:
  - English: `Open live demo`
  - Finnish: `Avaa demo`

This placement makes the demo discoverable without competing with the contact CTA lower on the page.

### 3. Webshop testimonial

- Add the product-owner testimonial to the Public Transport Webshop project page in both locales
- Place it directly after **The result / Lopputulos**
- Style it as a restrained testimonial block that feels like part of the article, not a marketing banner
- Visual treatment:
  - subtle bordered surface
  - left-side vertical accent divider in the site accent color
  - attribution text in the accent color
  - no large quote icon and no oversized decorative treatment
- Use these quote texts:
  - Finnish: `Tuukka on ihailtavan kyvykäs hoitamaan montaa asiaa samanaikaisesti hektisissäkin tilanteissa sekä ratkaisemaan ongelmia oma-aloitteisesti ja ennakoivasti. Lisäksi työn laatu ja monipuolisuus kehittäjänä tekevät hänestä tiimimme todellisen tukipilarin, keneen pystyy aina luottamaan.`
  - English: `Tuukka is admirably capable of handling many things at once even in hectic situations, and of solving problems independently and proactively. On top of that, the quality and range of his work as a developer make him a real pillar of support for our team, someone we can always rely on.`
- Attribution should read simply:
  - English: `Product owner`
  - Finnish: `Tuoteomistaja`

The testimonial stays attached to the project where it was earned, which preserves the homepage's quieter tone.

### 4. Theme toggle

- Keep the current top-right placement in the header
- Change the control from plain text to a pill-shaped toggle with icon + text
- Keep the control static:
  - no looping animation
  - no pulsing halo
  - no icon motion
- The icon and label should both show the next available theme, matching the current behavior:
  - dark mode active -> sun icon + `Light`
  - light mode active -> moon icon + `Dark`
- The control should remain accessible through the existing aria-label pattern

The pill gives the button stronger affordance, while the no-animation decision keeps the UI aligned with the site's restrained aesthetic.

### 5. Homepage AI mention

- Keep the "How I work" section unchanged
- Add one pragmatic sentence to the About section in both locales
- The tone should present AI as a practical tool, not as a philosophy or sales hook
- The copy should emphasize using AI-assisted workflows when they genuinely reduce repetitive work or help exploration
- Use these lines:
  - English: `I also use AI-assisted workflows when they genuinely help reduce repetitive work or speed up exploration, but I care more about useful outcomes than hype.`
  - Finnish: `Hyödynnän myös AI-avusteisia työnkulkuja silloin, kun ne oikeasti vähentävät toisteista työtä tai nopeuttavat tutkimista, mutta minulle tärkeämpiä ovat hyödylliset lopputulokset kuin hype.`

This makes AI experience visible to recruiters without weakening the timeless feel of the principles section.

## Content and component changes

### Content model

- Update `src/content/config.ts` to allow `demoUrl?: string`

### Project content

- Update:
  - `src/content/projects/japanese-ai-tutor.md`
  - `src/content/projectsFi/japanese-ai-tutor.md`
  - `src/content/projects/public-transport-webshop.md`
  - `src/content/projectsFi/public-transport-webshop.md`

### Shared copy

- Update `src/data/site-copy.ts` with:
  - demo-link labels for both locales
  - testimonial attribution text for both locales
  - one new About sentence in both locales

### UI

- Update `src/components/ProjectPage.astro` to:
  - render optional demo link
  - render testimonial block from markdown content styling
  - support the final testimonial visual treatment
- Update `src/components/Header.astro` and `src/scripts/theme-toggle.ts` to support the pill toggle with icon + text

### Deployment config

- Update `astro.config.mjs`
- Add redirects in `vercel.json`

## Error handling and fallbacks

- If `demoUrl` is absent, render nothing for the demo link
- The theme toggle should continue to work with the existing local-storage behavior
- Redirect configuration should not affect local development behavior

## Testing

- Run `npm run build`
- Run `npm test`
- Manually verify:
  - canonical URL points to `uphouseconsulting.fi`
  - demo link appears only on the AI Tutor project page
  - testimonial appears only on the Webshop project page
  - theme toggle renders as the approved pill in both locales
  - About section includes the AI sentence in both locales

## Non-goals

- No sticky CTA behavior
- No homepage testimonial block
- No redesign of the project-page layout beyond the scoped additions above
- No change to the philosophy of the "How I work" section
