/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: "preserve",
  trailingComma: "none",
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
        singleQuote: true,
      },
    },
    {
      files: "*.json",
      options: {
        parser: "json",
        printWidth: 100,
      },
    },
  ],
};
