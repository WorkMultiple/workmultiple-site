import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isKeystatic = process.argv.includes('dev');

export default defineConfig({
  site: 'https://workmultiple.com',
  integrations: [
    sitemap(),
    react(),
    markdoc(),
    ...(isKeystatic ? [keystatic()] : []),
  ],
});
