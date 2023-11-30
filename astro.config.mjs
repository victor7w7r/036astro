import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import qwikdev from '@qwikdev/astro';

export default defineConfig({
  prefetch: true,
  integrations: [compress(), svelte(), tailwind(), qwikdev()]
});
