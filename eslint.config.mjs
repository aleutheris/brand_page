import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "dist/**",
      "**/dist/**",
      ".astro/**",
      "**/.astro/**",
      "node_modules/**",
      "**/node_modules/**",
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
];
