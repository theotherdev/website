// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import pageInsight from "astro-page-insight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    // Map language names to standard locale codes
    locales: ["en", "de", "ur"],
    // Assuming English is the default language
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react(), robotsTxt(), pageInsight(), sitemap({
    i18n: {
      defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        en: 'en-US', // The `defaultLocale` value must present in `locales` keys
        de: 'de-DE',
        ur: 'ur-PK',
      },
    },
  }), partytown()],
});