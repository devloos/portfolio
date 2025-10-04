import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@vueuse/nuxt',
  ],
  fonts: {
    families: [
      {
        name: 'Instrument Sans',
        provider: 'google',
        weights: [400, 600, 700, 800, 900],
      },
    ],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    serverBundle: {
      collections: ['lucide'],
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    dataValue: 'theme',
  },
  shadcn: {
    componentDir: './app/components/ui',
  },
});
