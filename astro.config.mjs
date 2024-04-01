import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://www.adrian-alvarez.dev' : 'http://localhost:4321',
  integrations: [tailwind(), sitemap(), robotsTxt({
    sitemap: 'https://www.adrian-alvarez.dev/sitemap-0.xml',
    host: 'adrian-alvarez.dev'
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
      debug: false
    }
  }), compress(), react()],
  output: "server",
  adapter: vercel()
});