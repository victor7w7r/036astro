import { vitePreprocess } from '@astrojs/svelte'

export default {
  compilerOptions: {
    customElement: true
  },
  preprocess: vitePreprocess()
}
