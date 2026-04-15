import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://krismos.fr',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date('2026-02-26'),
    }),
  ],
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
});
