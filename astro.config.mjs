import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://uphouseconsulting.fi",
  i18n: {
    locales: ["en", "fi"],
    defaultLocale: "en",
  },
});
