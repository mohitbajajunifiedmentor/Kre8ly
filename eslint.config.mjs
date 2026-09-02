import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

/**
 * Flat config. `next lint` was removed in Next 16, so ESLint is invoked
 * directly (`npm run lint`).
 *
 * The rules that the migrated Vite code cannot satisfy without a large rewrite
 * (unescaped entities in copy, <img> vs next/image on ~1,100 static imports)
 * are downgraded to warnings so the signal from real errors is not drowned out.
 */
export default [
  {
    ignores: [".next/**", "node_modules/**", "src/assets/**", "public/**"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react/jsx-key": "warn",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];
