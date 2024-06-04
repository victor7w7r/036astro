import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import AutoImport from 'unplugin-auto-import/astro'

import { imports, importTypes } from './auto-import'

export default defineConfig({
  integrations: [
    solid(),
    tailwind(),
    AutoImport({
      dts: 'src/generated/auto-imports.d.ts',
      imports: [
        'solid-js',
        {
          'axios': [['default', 'axios']]
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...imports,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...importTypes
      ]
    }),
    compress()
  ],
  prefetch: true
})
