/// <reference types="astro/client" />

type ImportMetaEnv = {
  readonly PUBLIC_API_URL: string
}

// eslint-disable-next-line no-unused-vars
type ImportMeta = {
  readonly env: ImportMetaEnv
}
