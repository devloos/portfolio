import tailwindcss from '@tailwindcss/vite';

const DESCRIPTION =
  "I'm a software engineer who thrives on building modern, scalable web applications.";

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
    '@nuxtjs/robots',
    'nuxt-schema-org',
    'nuxt-seo-utils',
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
      {
        name: 'Caveat',
        provider: 'google',
        weights: [400, 600, 700],
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
    description: DESCRIPTION,
    defaultLocale: 'en-US',
  },
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Carlos Aguilera',
      alternateName: 'Devlos',
      description: DESCRIPTION,
      jobTitle: 'Software Engineer',
      image: '/assets/stud.jpeg',
      url: 'https://www.caguilera.dev',
      worksFor: {
        '@type': 'Organization',
        name: 'Ethika',
        url: 'https://www.ethika.com',
      },
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: 'California State University, Long Beach',
        alternateName: 'CSULB',
        url: 'https://www.csulb.edu',
      },
      sameAs: [
        'https://www.linkedin.com/in/aguilerac',
        'https://github.com/devloos',
        'https://leetcode.com/devlos/',
      ],
    },
  },
});
