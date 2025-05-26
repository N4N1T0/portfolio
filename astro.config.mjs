import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: process.env.CI
    ? 'https://www.adrian-alvarez.dev'
    : 'http://localhost:4321',

  integrations: [sitemap(), robotsTxt({
    sitemap: 'https://www.adrian-alvarez.dev/sitemap-0.xml',
    host: 'adrian-alvarez.dev'
  }), playformCompress(), mdx()],

  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
})