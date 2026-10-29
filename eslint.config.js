// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // 1. Global Ignores (Applies to all files)
  {
    ignores: ["dist/**", "build/**", "node_modules/**"],
  },

  // 2. Base Configuration for JavaScript and TypeScript
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // 3. JavaScript Specific Rules
  js.configs.recommended,

  // 4. TypeScript Specific Rules & Overrides
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Customize or override specific TS rules here
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // 5. Custom Rule Overrides for All Files
  {
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
    },
  },

  eslintConfigPrettier, 
]
