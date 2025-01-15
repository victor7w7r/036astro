import { onClientDirective } from '@astro-tools/client-directives/on'
import alpine from '@astrojs/alpinejs'
import svelte from '@astrojs/svelte'
import bun from '@hedystia/astro-bun'
import type { AstroIntegration } from 'astro'
import { defineConfig } from 'astro/config'
import AutoImport from 'astro-auto-import'
import min from 'astro-min'
import customElements from 'custom-elements-ssr/astro.js'
import swc from 'unplugin-swc'

export default defineConfig({
  adapter: bun(),
  integrations: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    customElements() as AstroIntegration,
    alpine(),
    svelte(),
    min(),
    AutoImport({
      imports: []
    }),
    onClientDirective({
      directives: [
        {
          entrypoint: '@astro-tools/client-directives/click/directive',
          name: 'click'
        }
      ]
    })
  ],
  //output: 'server',
  /*prefetch: {
    prefetchAll: true
  },*/
  vite: {
    esbuild: false,
    plugins: [swc.vite()]
  }
})
