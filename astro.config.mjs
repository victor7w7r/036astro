import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import tailwind from '@astrojs/tailwind'
import qwikdev from '@qwikdev/astro'

export default defineConfig({
  prefetch: true,
  integrations: [compress(), tailwind(), qwikdev()]
})
