import eslintPluginAstro from 'eslint-plugin-astro'
import unusedImports from 'eslint-plugin-unused-imports'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    ignores: ['.vscode/*', '.husky/*', '**.lock', 'package.json'],
    file: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.astro'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error'
    },
    plugins: {
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y
    }
  }
]
