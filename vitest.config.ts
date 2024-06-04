/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import solidPlugin from 'vite-plugin-solid'

export default getViteConfig({
  plugins: [solidPlugin()],
  test: {
    coverage: {
      enabled: true,
      exclude: ['*.{cjs,js,mjs}']
    },
    environment: 'jsdom',
    globals: true,
    include: ['./test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: './test/setup-tests.ts'
  }
})
