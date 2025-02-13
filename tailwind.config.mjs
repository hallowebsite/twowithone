/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/dot-notation */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
