<script setup lang="ts">
const BG_DARK_HEX = '#000000';
const BG_LIGHT_HEX = '#F1F1F1';

useSeoMeta({
  ogImage: '/assets/og.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Carlos Aguilera',
  twitterCard: 'summary_large_image',
});

useHead({
  meta: [
    {
      name: 'apple-mobile-web-app-title',
      content: 'Devlos',
    },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
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
