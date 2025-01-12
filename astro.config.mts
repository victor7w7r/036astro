//import node from '@astrojs/node'
import svelte from '@astrojs/svelte'
import bun from '@hedystia/astro-bun'
import { defineConfig } from 'astro/config'
import swc from 'unplugin-swc'

export default defineConfig({
  /* adapter: node({
    mode: 'standalone'
  }),*/
  adapter: bun(),
  integrations: [svelte()],
  //output: 'server',
  prefetch: {
    prefetchAll: true
  },
  vite: {
    esbuild: false,
    plugins: [swc.vite()]
  }
})
