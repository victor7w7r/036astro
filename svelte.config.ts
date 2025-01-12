import { vitePreprocess } from '@astrojs/svelte'
import type { Config } from '@sveltejs/kit'

const config: Config = {
  compilerOptions: {
    customElement: true,
    runes: true
  },
  preprocess: vitePreprocess()
}

export default config
