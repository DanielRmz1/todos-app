import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

export default defineConfig([
  prettier,
  tseslint.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  {
    files: ["**/client/**/*.tsx"],
    plugins: [pluginReact],
    settings: {
      react: {
        version: "detect"
      }
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: pluginReact.configs.recommended.parserOptions
    }
  },
  {
    files: ["**/server/**/*.ts"],
    languageOptions: {
      globals: globals.node
    }
  }
]);