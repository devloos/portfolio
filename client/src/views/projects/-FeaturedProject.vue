<script setup>
import { buildTagUrl } from '@/assets/utility';
import SmartSvg from '@/components/smart/SmartSvg.vue';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="grid max-w-7xl items-center justify-center lg:justify-normal lg:text-end">
    <div class="max-w-xl lg:col-start-1 lg:row-start-1 lg:pb-0 xl:max-w-2xl">
      <slot name="image" />
    </div>

    <div
      class="z-10 flex max-w-xl flex-col justify-center justify-self-end lg:col-start-1 lg:row-start-1 xl:max-w-2xl"
      data-swiper-parallax="-200"
    >
      <h4
        class="text-alternate dark:text-alternate-300 pb-2 text-lg font-semibold lg:text-xl"
      >
        Featured Project
      </h4>
      <h5
        class="flex pb-3 text-2xl font-bold whitespace-pre lg:justify-end lg:pb-10 lg:text-3xl"
      >
        <p
          v-for="(letter, i) in project.title"
          :key="i"
          class="animate-rubberband hover:text-alternate cursor-default transition-all"
        >
          {{ letter }}
        </p>
      </h5>
      <div
        class="lg:bg-primary-700 mb-3 rounded-sm lg:mb-10 lg:p-6 lg:text-slate-200 lg:shadow-xl"
      >
        <p>
          {{ project.description }}
        </p>
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
                  backgroundColor: '121923',
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
        <a v-if="project.source" :href="project.source" target="_blank">
          <SmartSvg
            class="hover:stroke-alternate dark:hover:stroke-alternate h-5 w-5 dark:stroke-slate-200"
            src="github-outline"
          />
        </a>
        <a v-if="project.site" :href="project.site" target="_blank">
          <SmartSvg
            class="hover:stroke-alternate h-6 w-6 -translate-y-[1px]"
            src="square-arrow"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.animate-rubberband:hover {
  animation: rubberband 800ms alternate ease-out;
}

@keyframes rubberband {
  0% {
    transform: scaleX(1) scaleY(1);
  }
  40% {
    transform: scaleX(1.12) scaleY(0.75);
  }
  55% {
    transform: scaleX(0.85) scaleY(1);
  }
  65% {
    transform: scaleX(1.09) scaleY(0.85);
  }
  75% {
    transform: scaleX(0.9) scaleY(1);
  }
  90% {
    transform: scaleX(1.05) scaleY(0.95);
  }
  100% {
    transform: scaleX(1) scaleY(1);
  }
}
</style>
