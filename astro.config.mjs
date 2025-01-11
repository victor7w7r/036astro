/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import svelte from '@astrojs/svelte'
import { defineConfig } from 'astro/config'
import swc from 'unplugin-swc'

export default defineConfig({
  integrations: [svelte()],
  prefetch: {
    prefetchAll: true
  },
  vite: {
    esbuild: false,
    plugins: [swc.vite()]
  }
})
