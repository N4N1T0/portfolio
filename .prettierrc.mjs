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
      files: "*.mdx",
      options: {
        singleQuote: true,
        parser: "mdx",
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
