import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    ignores: [".vscode/*", ".husky/*", "**.lock", "package.json"],
  },
];
