import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      i18: {
        defaultLocale: "en",
        locales: {
          en: "en",
          de: "de",
        },
      },
    }),
  ],
  site: "https://twowithone.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    prefixDefault: false,
  },
});
