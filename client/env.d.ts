/// <reference types="vite/client" />

declare const __VITE_APP_VERSION__: string;

interface ImportMetaEnv {
  readonly VITE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
