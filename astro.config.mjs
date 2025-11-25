import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  srcDir: './web/src',
  outDir: './web/dist',
  publicDir: './blahblah',
  build: {
    format: 'file',
  },
  integrations: []
});
