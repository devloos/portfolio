<script setup lang="ts">
const BG_DARK_HEX = '#1B1717';
const BG_LIGHT_HEX = '#F1F1F1';

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
    <Teleport to="body">
      <NeuralBg
        class="-z-10"
        :backgroundColor="bgColor"
        :hue="0"
        :saturation="0"
        :chroma="chroma"
      />
    </Teleport>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
