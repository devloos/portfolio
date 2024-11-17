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
      <h5
        class="flex whitespace-pre pb-3 text-2xl font-bold lg:justify-end lg:pb-10 lg:text-3xl"
      >
        <p
          v-for="(letter, i) in project.title"
          :key="i"
          class="animate-rubberband cursor-default transition-all hover:text-alternate"
        >
          {{ letter }}
        </p>
      </h5>
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
        <a href="#">
          <SmartSvg
            class="h-5 w-5 hover:stroke-alternate dark:stroke-slate-200 hover:dark:stroke-alternate"
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
