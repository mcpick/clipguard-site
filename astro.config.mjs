import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mcpick.github.io',
  base: '/clipguard-site',
  output: 'static',
  integrations: [sitemap()],
});
