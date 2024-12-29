import eslintPluginAstro from "eslint-plugin-astro";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    ignores: [".vscode/*", ".husky/*", "**.lock", "package.json"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
    },
    plugins: {
      "unused-imports": unusedImports,
    },
  },
];
