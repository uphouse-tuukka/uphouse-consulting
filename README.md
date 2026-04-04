# Tuukka Ylostalo portfolio site

Personal portfolio site for Tuukka Ylostalo, built as a fast static site with Astro.

## Stack

- Astro 5
- TypeScript
- Tailwind CSS v4
- Vitest
- Playwright

## Local development

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Start the dev server:

```bash
npm run dev
```

Run tests:

```bash
npm test
npm run test:e2e
```

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
