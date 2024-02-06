module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:astro/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["./**/*.cjs"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    extraFileExtensions: [".astro"],
  },
  rules: {},
};
