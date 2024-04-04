/// <reference types="astro/client" />

type ImportMetaEnv = Readonly<{
  PUBLIC_API_URL: string
}>

type ImportMeta = Readonly<{
  env: ImportMetaEnv
}>
