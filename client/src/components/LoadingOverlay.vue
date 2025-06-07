<script setup lang="ts">
import { watch } from 'vue';

import LoadingIndicator from '@/components/LoadingIndicator.vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';

const { loading = false } = defineProps<{ loading?: boolean }>();

watch(
  () => loading,
  (newValue) => {
    document.body.style.overflow = newValue ? 'hidden' : 'visible';
  },
);
</script>

<template>
  <Teleport to="body">
    <SmartTransition>
      <div
        v-if="loading"
        class="fixed inset-0 z-50 bg-gray-700/[.5] text-center backdrop:blur-sm"
      >
        <LoadingIndicator />
      </div>
    </SmartTransition>
  </Teleport>
</template>
