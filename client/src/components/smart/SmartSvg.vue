<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

import { log } from '@/assets/utils/log';

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
