import { defineConfig } from 'astro/config';

const site = process.env.PERSONAL_SITE_URL ?? 'https://cat-xierluo.github.io';
const base = process.env.PERSONAL_BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
});
