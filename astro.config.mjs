import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'

export default defineConfig({
  integrations: [solid(), tailwind(), compress()],
  prefetch: true
})
