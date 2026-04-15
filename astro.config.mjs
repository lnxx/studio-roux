// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lnxx.github.io',
  base: '/studio-roux',
  vite: {
    plugins: [tailwindcss()]
  }
});