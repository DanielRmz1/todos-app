import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

export default defineConfig([
  prettier,
  js.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
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