import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          de: "de",
        },
      },
      filter: (page) => {
        // exclude motives en pages if the slug is capitalizsed
        if (page.locale === "en" && page.slug.match(/[A-Z]/)) {
          return false;
        }
        // exclude motives de pages if the slug is not capitalizsed
        if (page.locale === "de" && !page.slug.match(/[A-Z]/)) {
          return false;
        }
        return true;
      },
    }),
  ],
  site: "https://twowithone.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    prefixDefault: false,
  },
  vite: {
    define: {
      "process.env": process.env,
    },
    plugins: [tailwindcss()],
  },
});
