import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  globalIgnores(["dist/**", ".astro/**"]),
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // Changed from error to warning
    },
  },
  ...eslintPluginAstro.configs.recommended,
]);
