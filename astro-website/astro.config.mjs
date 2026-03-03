// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  trailingSlash: 'always',
  adapter: netlify(),
  integrations: [sitemap()],
  site: 'https://www.locationbus.be',
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
