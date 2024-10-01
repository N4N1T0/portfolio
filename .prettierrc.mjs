// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
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
  ],
};
