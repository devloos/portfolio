<script setup lang="ts">
const BG_DARK_HEX = '#1B1717';
const BG_LIGHT_HEX = '#F1F1F1';

const config = useRuntimeConfig();

useSeoMeta({
  title: 'Carlos Aguilera',
  description:
    "I'm a software engineer who thrives on building modern, scalable web applications.",

  ogUrl: config.public.baseUrl,
  ogType: 'website',
  ogTitle: 'Carlos Aguilera',
  ogDescription:
    "I'm a software engineer who thrives on building modern, scalable web applications.",
  ogImage: '/assets/card.jpg',
  ogLocale: 'en_US',

  twitterCard: 'summary_large_image',
  twitterSite: config.public.baseUrl,
  twitterTitle: 'Carlos Aguilera',
  twitterDescription:
    "I'm a software engineer who thrives on building modern, scalable web applications.",
  twitterImage: '/assets/card.jpg',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: config.public.baseUrl },
  ],
});

const colorMode = useColorMode();

const bgColor = computed(() => {
  if (colorMode.preference === 'dark') {
    return BG_DARK_HEX;
  }

  return BG_LIGHT_HEX;
});

const chroma = computed(() => {
  if (colorMode.preference === 'dark') {
    return 2;
  }

  return 0;
});
</script>

<template>
  <div class="relative">
    <NeuralBg
      class="fixed inset-0 -z-10"
      :backgroundColor="bgColor"
      :hue="0"
      :saturation="0"
      :chroma="chroma"
    />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.icon {
  stroke-width: 1.5px;
}
</style>
