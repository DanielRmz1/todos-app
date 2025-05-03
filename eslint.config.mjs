import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	prettier,
	js.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	{
		files: ["./client/**/*.tsx"],
		plugins: { react },
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		rules: {
			...react.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
			"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
			"react/self-closing-comp": "error",
		},
	},
	{
		files: ["./server/**/*.ts"],
		languageOptions: {
			globals: globals.node,
		},
	},
]);
