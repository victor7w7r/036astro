import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    solidJs(),
    svelte(),
    tailwind()
  ]
});