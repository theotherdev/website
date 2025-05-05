// @ts-check

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.otherdev.com",
  compressHTML: true,
  output: 'server',

  // Optional redundancy for certain plugins
  url: "https://www.otherdev.com",

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["en", "de", "ur"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    react({
      experimentalReactChildren: true
    }),
    robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          de: "de-DE",
          ur: "ur-PK",
        },
      },
    }),
  ],

  adapter: vercel(),
});