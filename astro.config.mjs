// Site/base are env-driven so the same build works on the temporary
// GitHub Pages project URL and, later, on the custom domain (SPEC/06-LAUNCH.md).
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = process.env.SITE_URL ?? 'https://darshandv.github.io';
const BASE = process.env.BASE_PATH ?? '/portfolio-page';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
