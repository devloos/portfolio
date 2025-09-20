<script setup lang="js">
import { toRefs } from 'vue';

import { buildTagUrl } from '@/assets/utils/helpers';
import MediaKit from '@/components/MediaKit.vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const { project } = toRefs(props);
</script>

<template>
  <div class="group flex h-full max-w-xl flex-col rounded-sm">
    <MediaKit
      class="rounded-t"
      :src="project.file.src"
      :width="3454"
      :height="1924"
      :media-type="project.file.type"
      :alt="project.title"
      muted
      autoplay
      loop
    />
    <div class="flex grow flex-col justify-between px-4 py-2">
      <div>
        <h5 class="text-alternate dark:text-alternate-200 mb-1 font-semibold">
          {{ project.title }}
        </h5>
        <p class="mb-2 text-sm">
          {{ project.description }}
        </p>
        <div class="mb-2 flex flex-wrap items-center justify-start gap-2">
          <img
            v-for="tag in project.tags"
            :key="tag.id"
            :src="
              buildTagUrl({
                text: tag.title,
                backgroundColor: '121923',
                logo: tag.logoName,
              })
            "
            loading="lazy"
            :alt="tag.title"
          />
        </div>
      </div>
      <div>
        <a
          v-if="project?.site"
          class="text-primary-400 hover:text-primary-600 mr-4 text-sm underline underline-offset-2 transition-colors dark:text-slate-400 dark:hover:text-slate-500"
          :href="project.site"
          target="_blank"
        >
          Visit Site
        </a>
        <a
          v-if="project?.source"
          class="text-primary-400 hover:text-primary-600 text-sm underline underline-offset-2 transition-colors dark:text-slate-400 dark:hover:text-slate-500"
          :href="project.source"
          target="_blank"
        >
          View Source
        </a>
      </div>
    </div>
  </div>
</template>
