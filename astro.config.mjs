import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://www.nanofighters.club' : 'http://localhost:4321',
  integrations: [tailwind(), sitemap()]
});