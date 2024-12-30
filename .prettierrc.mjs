// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        singleQuote: true,
        trailingComma: "none",
        tabWidth: 2,
        semi: false,
        jsxSingleQuote: true,
      },
    },
    {
      files: "*.md",
      options: {
        singleQuote: true,
        parser: "md",
        trailingComma: "none",
        tabWidth: 2,
        semi: false,
        jsxSingleQuote: true,
      },
    },
    {
      files: "*.ts",
      options: {
        singleQuote: true,
        parser: "typescript",
        trailingComma: "none",
        tabWidth: 2,
        semi: false,
        jsxSingleQuote: true,
      },
    },
  ],
};
