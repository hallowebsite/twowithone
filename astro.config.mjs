import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "compile",
  }),
  integrations: [tailwind()],
  site: "https://twowithwone.pages.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    prefixDefault: false,
  },
});
