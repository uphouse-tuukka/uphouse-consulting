import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://uphouse-consulting.com',
  i18n: {
    locales: ['en', 'fi'],
    defaultLocale: 'en',
  },
});
