<script setup lang="ts">
import { log } from '@/assets/utils/log';
import { computed, defineAsyncComponent } from 'vue';

const SVGS = import.meta.glob('@/assets/svgs/**/*.svg');

const props = defineProps<{ src: string }>();

const derivedComponent = computed(() => {
  try {
    const component = SVGS[`/src/assets/svgs/${props.src}.svg`]();
    return defineAsyncComponent(() => component);
  } catch {
    log(`Error: svg ${props.src} not found.`);
  }

  return null;
});
</script>

<template>
  <component :is="derivedComponent" />
</template>
