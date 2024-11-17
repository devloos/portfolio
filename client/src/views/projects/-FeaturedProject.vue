<script setup>
import { buildTagUrl } from '@/assets/utility';
import SmartSvg from '@/components/smart/SmartSvg.vue';
import { useDark } from '@vueuse/core';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const isDark = useDark();
</script>

<template>
  <div class="grid max-w-6xl justify-center lg:justify-normal lg:text-end">
    <div class="max-w-xl lg:col-start-1 lg:row-start-1 lg:pb-0">
      <slot name="image" />
    </div>

    <div
      class="z-10 flex max-w-xl flex-col justify-center justify-self-end lg:col-start-1 lg:row-start-1 xl:max-w-2xl"
      data-swiper-parallax="-150"
    >
      <h4
        class="pb-2 text-lg font-semibold text-alternate dark:text-alternate-300 lg:text-xl"
      >
        Featured Project
      </h4>
      <h5 class="pb-3 text-2xl font-bold lg:pb-10 lg:text-3xl">{{ project.title }}</h5>
      <div class="mb-3 rounded lg:mb-10 lg:bg-primary-700 lg:p-6 lg:text-slate-200">
        <slot name="description" />
      </div>

      <div class="flex gap-1 pb-3 lg:justify-end">
        <div v-for="tag in project.tags" :key="tag.id">
          <a
            :href="tag.url"
            target="_blank"
            class="inline-block transition-all hover:opacity-80"
          >
            <img
              :src="
                buildTagUrl({
                  text: tag.title,
                  backgroundColor: isDark ? '333' : 'cbd5e1',
                  style: 'plastic',
                  logo: tag.logoName,
                })
              "
              loading="lazy"
              :aria-label="tag.title"
              :alt="tag.title"
            />
          </a>
        </div>
      </div>

      <div class="flex items-center gap-4 lg:justify-end">
        <a href="#">
          <SmartSvg
            class="h-5 w-5 hover:stroke-alternate dark:stroke-slate-200"
            name="GithubOutlineSvg"
          />
        </a>
        <a href="#">
          <SmartSvg
            class="h-6 w-6 -translate-y-[1px] hover:stroke-alternate"
            name="SquareArrowSvg"
          />
        </a>
      </div>
    </div>
  </div>
</template>
