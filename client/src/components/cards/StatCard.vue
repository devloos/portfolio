<script setup lang="js">
import { computed, ref } from 'vue';
import { usePerspective } from '@/composables/perspective.js';
import { useDark } from '@vueuse/core';

const props = defineProps({
  perspective: {
    type: Boolean,
    default: false,
  },
});

const isDark = useDark();

const statCard = ref(null);
const { transformClass } = usePerspective(statCard);

const statCardUrl = computed(() => {
  const url = new URL('https://github-readme-stats.vercel.app/api');
  url.searchParams.append('username', 'devloos');
  url.searchParams.append('count_private', 'true');
  url.searchParams.append('show_icons', 'true');
  url.searchParams.append('include_all_commits', 'true');
  url.searchParams.append('icon_color', '1e81b0');

  if (isDark.value) {
    url.searchParams.append('bg_color', '121923');
    url.searchParams.append('text_color', 'e2e8f0');
    url.searchParams.append('title_color', 'e2e8f0');
  } else {
    url.searchParams.append('bg_color', 'd9e6f5');
    url.searchParams.append('text_color', '18212f');
    url.searchParams.append('title_color', '18212f');
  }

  url.searchParams.append('border_color', '699cd5');
  url.searchParams.append('disable_animations', 'true');
  return url;
});
</script>
<template>
  <img
    ref="statCard"
    class="mx-auto"
    :class="{ perspective: props.perspective }"
    :src="statCardUrl"
    loading="lazy"
    alt=""
  />
</template>

<style scoped lang="scss">
.perspective {
  transform: v-bind(transformClass);
  transition: transform 0.25s ease-out;
}
</style>
