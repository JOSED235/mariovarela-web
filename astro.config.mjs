import { defineConfig } from 'astro/config';

// SITE/BASE los define el workflow de GitHub Pages (subruta /mariovarela-web/); local y dominio propio usan la raíz.
export default defineConfig({
  site: process.env.SITE ?? 'https://josed235.github.io',
  base: process.env.BASE ?? '/',
});
