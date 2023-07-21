import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    compress(),
    prefetch(),
    svelte(),
    tailwind()
  ]
});