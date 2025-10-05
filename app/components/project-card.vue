<script setup lang="ts">
import type { Project } from '~/types';

const props = defineProps<{
  project: Project;
}>();
</script>

<template>
  <div>
    <div class="mb-8 flex gap-1 rounded-sm">
      <div>
        <a
          :href="project.site || ''"
          target="_blank"
          class="group/title text-secondary/75 mb-3 flex items-center gap-2 font-bold tracking-wide"
        >
          <span>{{ project.title }}</span>
          <Icon
            class="inline w-5 transition-all group-hover/title:translate-x-1 group-hover/title:-translate-y-1"
            name="lucide:square-arrow-out-up-right"
          />
        </a>

        <p class="mb-4 leading-relaxed tracking-wide">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>
