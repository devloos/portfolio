<script setup lang="js">
import { computed } from 'vue';

import { buildTagUrl } from '@/assets/utils/helpers';
import SmartSvg from '@/components/smart/SmartSvg.vue';

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});

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
  <a
    :href="experience.url"
    target="_blank"
    class="group/card mb-14 flex flex-col gap-1 rounded-sm transition-all lg:mb-8 lg:cursor-pointer lg:p-6"
  >
    <div>
      <p class="text-xs font-semibold tracking-wide uppercase">
        {{ normalizedDate }}
      </p>
    </div>
    <div>
      <div class="mb-3 flex items-center gap-2 font-bold dark:text-slate-400">
        <span>{{ experience.title }} - {{ experience.company }}</span>
        <SmartSvg
          class="mb-1 ml-1 inline w-5 transition-all group-hover/card:translate-x-1 group-hover/card:-translate-y-1"
          src="square-arrow"
        />
      </div>
      <p class="mb-4 text-sm leading-relaxed tracking-wide">
        {{ experience.summary }}
      </p>
      <div class="flex flex-wrap gap-2">
        <div v-for="tag in experience.tags" :key="tag.id">
          <a
            href="/"
            target="_blank"
            :aria-label="tag.title"
            class="inline-block transition-all hover:opacity-80"
          >
            <img
              :src="
                buildTagUrl({
                  text: tag.title,
                  backgroundColor: '121923',
                  logo: tag.logoName,
                })
              "
              :alt="tag.title"
            />
          </a>
        </div>
      </div>
    </div>
  </a>
</template>
