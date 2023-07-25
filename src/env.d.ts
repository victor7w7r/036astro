/// <reference types="astro/client" />

type ImportMetaEnv = {
  readonly PUBLIC_API_URL: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
