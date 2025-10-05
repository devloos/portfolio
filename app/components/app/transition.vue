<script lang="ts">
export type TransitionName =
  | 'fade'
  | 'fade-up'
  | 'slide-from-left'
  | 'slide-from-right'
  | 'scale'
  | 'slide-left'
  | 'slide-right';

export type TransitionMode = 'in-out' | 'out-in' | 'default';
</script>
<script setup lang="ts">
const {
  name = 'fade',
  mode = 'default',
  duration = 300,
} = defineProps<{
  name?: TransitionName;
  mode?: TransitionMode;
  duration?: string | number;
}>();

const durationMS = computed(() => `${duration}ms`);
</script>

<template>
  <Transition :name="name" :mode="mode">
    <slot />
  </Transition>
</template>

<style scoped lang="css">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all v-bind(durationMS) ease-in-out;
}

.fade-up-enter-from,
.fade-up-leave-to {
  transform: translateY(1%);
  opacity: 0;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all v-bind(durationMS) ease;
}

.slide-from-right-enter-from,
.slide-from-right-leave-to {
  transform: translateX(100%);
}

.slide-from-right-enter-active,
.slide-from-right-leave-active {
  transition: all v-bind(durationMS) ease-in-out;
}

.slide-from-left-enter-from,
.slide-from-left-leave-to {
  transform: translateX(-100%);
}

.slide-from-left-enter-active,
.slide-from-left-leave-active {
  transition: all v-bind(durationMS) ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
}

.scale-enter-active,
.scale-leave-active {
  transition: all v-bind(durationMS) ease-in-out;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform v-bind(durationMS) ease;
}

/* SLIDE LEFT */
.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0%);
}

.slide-left-leave-from {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

/* SLIDE RIGHT */
.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-enter-to {
  transform: translateX(0%);
}

.slide-right-leave-from {
  transform: translateX(0);
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
