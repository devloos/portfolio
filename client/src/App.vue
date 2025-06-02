<script lang="ts">
export const { provideContext: provideAppContext, injectContext: injectAppContext } =
  useCreateContext('app');
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import { useRoute } from 'vue-router';
import { useDark } from '@vueuse/core';
import DefaultLayout from './layouts/DefaultLayout.vue';
import { useCreateContext } from './composables/create-context';

const route = useRoute();

const layoutComponent = computed(() => route.meta.layout || DefaultLayout);
const isLoading = ref(false);

provideAppContext({
  overlay: {
    start: () => (isLoading.value = true),
    stop: () => (isLoading.value = false),
  },
});

useDark();
</script>

<template>
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
</template>

<style scoped lang="scss">
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
