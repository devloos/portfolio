<script setup lang="ts">
import { computed } from 'vue';
import type { Experience } from '~/types/experiences';

const props = defineProps<{
  experience: Experience;
}>();

const normalizedDate = computed(() => {
  const startDate = new Date(props.experience.startDate.date);

  const startDateFormatted = startDate.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    year: 'numeric',
  });

  let endDateFormatted = 'PRESENT';

  if (props.experience?.endDate?.date) {
    const endDate = new Date(props.experience.endDate.date);

    endDateFormatted = endDate.toLocaleDateString('en-US', {
      timeZone: 'UTC',
      month: 'long',
      year: 'numeric',
    });
  }

  return `${startDateFormatted} - ${endDateFormatted}`;
});
</script>

<template>
  <div class="mb-8 flex flex-col gap-1 rounded-sm">
    <div>
      <p class="text-xs font-semibold tracking-wide uppercase">
        {{ normalizedDate }}
      </p>
    </div>

    <div>
      <a
        :href="experience.url"
        target="_blank"
        class="group/title text-secondary/75 mb-3 flex items-center gap-2 font-bold tracking-wide"
      >
        <span>{{ experience.title }} - {{ experience.company }}</span>
        <Icon
          class="inline w-5 transition-all group-hover/title:translate-x-1 group-hover/title:-translate-y-1"
          name="lucide:square-arrow-out-up-right"
        />
      </a>

      <p class="mb-4 leading-relaxed tracking-wide">
        {{ experience.summary }}
      </p>
    </div>
  </div>
</template>
