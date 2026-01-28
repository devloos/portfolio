import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
      channelId: 'UCDAXiYNVkGEZxb6AOgbz14g',
      imageKitUrl: 'https://ik.imagekit.io/devlos/portfolio',
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
  ],
  fonts: {
    families: [
      {
        name: 'Instrument Sans',
        provider: 'google',
        weights: [400, 600, 700, 800, 900],
      },
      {
        name: 'Instrument Serif',
        provider: 'google',
        weights: [400, 600, 700, 800, 900],
      },
    ],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    class: 'icon',
    serverBundle: {
      collections: ['lucide'],
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    dataValue: 'theme',
  },
  shadcn: {
    componentDir: './app/components/ui',
  },
  site: {
    url: 'https://www.caguilera.dev',
    name: 'Carlos Aguilera',
  },
});
