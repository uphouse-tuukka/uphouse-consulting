# Tuukka Ylostalo portfolio site

Personal portfolio site for Tuukka Ylostalo, built as a fast static site with Astro.

## Stack

- Astro 5
- TypeScript
- Tailwind CSS v4
- Playwright

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

On the Ubuntu 26.04 Alfred host, `npm test` uses `scripts/playwright-test.mjs` to run Playwright with the Ubuntu 24.04 browser build until Playwright publishes a native `ubuntu26.04-x64` target.

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content

- Profile and global metadata: `src/data/profile.json`
- Case studies: `src/content/projects/`

## Notes

- Dark mode is the default experience.
- The project uses Astro view transitions and lightweight client-side behavior for theme toggling and scroll effects.
