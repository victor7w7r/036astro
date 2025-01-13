import { vitePreprocess } from '@astrojs/svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    customElement: true,
    runes: true
  },
  preprocess: vitePreprocess()
}

export default config
