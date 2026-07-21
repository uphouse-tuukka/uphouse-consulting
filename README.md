# Tuukka Ylostalo portfolio site

Personal portfolio site for Tuukka Ylostalo, built as a fast static site with Astro.

## Stack

- Astro 7
- TypeScript
- Tailwind CSS v4
- Playwright

## Local development

Requires Node.js 22.12.0 or newer.

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
