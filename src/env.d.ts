/// <reference types="astro/client" />

type ImportMetaEnv = Readonly<{
  PUBLIC_API_URL: string
}>

// eslint-disable-next-line no-unused-vars
type ImportMeta = Readonly<{
  env: ImportMetaEnv
}>
