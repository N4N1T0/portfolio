import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';
import vercel from "@astrojs/vercel/serverless";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://portfolio-nine-theta-20.vercel.app' : 'http://localhost:4321',
  integrations: [tailwind(), sitemap(), robotsTxt(), partytown()],
  output: "server",
  adapter: vercel()
});