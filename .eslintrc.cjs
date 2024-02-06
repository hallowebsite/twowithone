module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:prettier/recommended",
    "plugin:astro/recommended",
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
  },
  rules: {},
};
