<script setup lang="ts">
import { computed } from 'vue';

type Name = 'fade' | 'fade-up' | 'slide-from-right';
type Mode = 'in-out' | 'out-in' | 'default';

const {
  name = 'fade',
  mode = 'default',
  duration = 300,
} = defineProps<{
  name?: Name;
  mode?: Mode;
  duration?: string | number;
}>();

const durationMS = computed(() => `${duration}ms`);
</script>

<template>
  <Transition :name="name" :mode="mode">
    <slot />
  </Transition>
</template>

<style scoped lang="scss">
.fade {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all v-bind(durationMS) ease-in-out;
  }
}

.fade-up {
  &-enter-from,
  &-leave-to {
    transform: translateY(1%);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all v-bind(durationMS) ease;
  }
}

.slide-from-right {
  &-enter-from,
  &-leave-to {
    transform: translateX(100%);
  }

  &-enter-active,
  &-leave-active {
    transition: all v-bind(durationMS) ease-in-out;
  }
}
</style>
