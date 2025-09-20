<script lang="ts">
import { useCreateContext } from '@/composables/create-context';

interface AppContext {
  overlay: {
    start: () => void;
    stop: () => void;
  };
}

export const [provideAppContext, injectAppContext] = useCreateContext<AppContext>('App');
</script>

<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import LoadingOverlay from '@/components/LoadingOverlay.vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import SnowfallBg from '@/components/ui/SnowfallBg.vue';

import DefaultLayout from './layouts/DefaultLayout.vue';

const route = useRoute();

const layoutComponent = computed(() => route.meta.layout || DefaultLayout);
const isLoading = ref(false);

provideAppContext({
  overlay: {
    start: () => (isLoading.value = true),
    stop: () => (isLoading.value = false),
  },
});

const isDark = useDark();
</script>

<template>
  <div class="relative">
    <LoadingOverlay :loading="isLoading" />
    <SmartTransition name="fade" mode="out-in">
      <component :is="layoutComponent">
        <RouterView v-slot="{ Component }" class="router-view">
          <SmartTransition name="fade-up" mode="out-in" duration="500">
            <component :is="Component" />
          </SmartTransition>
        </RouterView>
      </component>
    </SmartTransition>

    <SnowfallBg
      :color="isDark ? 'ADD8E6' : '000000'"
      class="absolute inset-0 -z-100"
      :min-radius="0.2"
      :max-radius="5"
      :speed="0.5"
    />
  </div>
</template>

<style scoped lang="scss">
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
