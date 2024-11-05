// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import { loadEnv } from 'vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(
      {
        applyBaseStyles: false,
      }
    ),
    react(),
    robotsTxt(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      }
    }
  },
  output: 'hybrid',
  adapter: vercel()
});