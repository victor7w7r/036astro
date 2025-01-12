import { onClientDirective } from '@astro-tools/client-directives/on'
import svelte from '@astrojs/svelte'
import bun from '@hedystia/astro-bun'
import { defineConfig } from 'astro/config'
import AutoImport from 'astro-auto-import'
import min from 'astro-min'
import swc from 'unplugin-swc'

export default defineConfig({
  adapter: bun(),
  integrations: [
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
  prefetch: {
    prefetchAll: true
  },
  vite: {
    esbuild: false,
    plugins: [swc.vite()]
  }
})
