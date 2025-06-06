<script setup lang="ts">
import { useDark, useWindowSize } from '@vueuse/core';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import MediaKit from '@/components/MediaKit.vue';
import SmartSvg from '@/components/smart/SmartSvg.vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';

interface Link {
  displayName: string;
  name: string;
  hash?: string;
  fullPath: string;
}

const NAV_LINKS: Array<Link> = [
  {
    displayName: 'Home',
    name: 'Home',
    fullPath: '/',
  },
  {
    displayName: 'Projects',
    name: 'Projects',
    fullPath: '/projects',
  },
  {
    displayName: 'About',
    name: 'Home',
    hash: '#about',
    fullPath: '/#about',
  },
  {
    displayName: 'Contact',
    name: 'Contact',
    fullPath: '/contact',
  },
];

const isDark = useDark();

const navOpened = ref(false);

watch(navOpened, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'visible';
});

const route = useRoute();

watch(route, () => {
  navOpened.value = false;
});

const { width: windowWidth } = useWindowSize();

watch(windowWidth, () => {
  if (windowWidth.value >= 768) {
    navOpened.value = false;
  }
});

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') {
      return;
    }

    navOpened.value = false;
  });
});
</script>
<template>
  <nav class="sticky top-0 z-50">
    <div
      class="dark:bg-primary/[.8] flex items-center justify-between border-b border-neutral-300 bg-slate-100/[.8] px-5 py-2 backdrop-blur-xs md:justify-center md:gap-24 xl:gap-36 dark:border-neutral-500"
    >
      <RouterLink to="/">
        <MediaKit
          src="/portfolio/stud-1733607141582.jpeg"
          :width="830"
          :height="830"
          alt="goat"
          class="max-w-12 rounded-3xl"
          aria-label="Home"
        />
      </RouterLink>
      <div class="hidden gap-6 font-semibold md:flex md:gap-12 md:text-xl lg:gap-16">
        <RouterLink
          v-for="(link, i) in NAV_LINKS"
          :key="i"
          :to="link"
          class="transition-all hover:text-gray-500"
          @click="navOpened = false"
        >
          <span
            :class="{
              'text-alternate dark:text-alternate-400': route.fullPath === link.fullPath,
            }"
          >
            {{ link.displayName }}
          </span>
        </RouterLink>
      </div>
      <button
        class="group hover:ring-primary-800 dark:bg-primary-400 dark:hover:ring-primary-200 hidden h-[29px] w-[58px] items-center rounded-full bg-slate-300 pl-[2px] transition-all hover:ring-1 md:flex"
        type="button"
        @click="isDark = !isDark"
      >
        <div
          class="dark:bg-primary flex h-[26px] w-[26px] items-center justify-center rounded-full bg-slate-400 transition-all!"
          :class="{ 'translate-x-[28px]': isDark }"
        >
          <i
            class="fa-solid group-hover:animate-spin-once"
            :class="isDark ? 'fa-moon' : 'fa-sun'"
          ></i>
        </div>
      </button>
      <button class="md:hidden" type="button" @click="navOpened = !navOpened">
        <SmartTransition mode="out-in" :duration="150">
          <SmartSvg
            v-if="navOpened"
            src="x"
            class="fill-primary dark:fill-alternate-600 h-7 w-7"
          />
          <SmartSvg
            v-else
            src="bars"
            class="fill-primary dark:fill-alternate-600 h-8 w-8"
          />
        </SmartTransition>
      </button>
    </div>
    <Teleport to="body">
      <SmartTransition>
        <div
          v-if="navOpened"
          class="fixed inset-0 top-[59.2px] z-30 bg-black/[.5] backdrop-blur-xs"
          @click.self="navOpened = false"
        />
      </SmartTransition>
      <SmartTransition name="slide-from-right">
        <div
          v-if="navOpened"
          class="dark:bg-primary-600 fixed top-[59.3px] right-0 z-40 h-80 w-80 rounded-b bg-slate-100/[.9] backdrop-blur-xs"
        >
          <div class="grid gap-4 p-5 text-lg font-semibold">
            <RouterLink
              v-for="(link, i) in NAV_LINKS"
              :key="i"
              :to="link"
              class="transition-all hover:text-gray-500"
              @click="navOpened = false"
            >
              <span
                :class="{
                  'text-alternate dark:text-alternate-400':
                    route.fullPath === link.fullPath,
                }"
              >
                {{ link.displayName }}
              </span>
            </RouterLink>
            <div class="flex gap-8">
              <a href="https://www.linkedin.com/in/aguilerac" target="_blank">
                <SmartSvg
                  class="fill-primary-600 w-5 dark:fill-slate-200"
                  src="linkedin"
                />
              </a>
              <a href="https://www.instagram.com/devloos" target="_blank">
                <SmartSvg
                  class="fill-primary-600 w-5 dark:fill-slate-200"
                  src="instagram"
                />
              </a>
              <a href="https://github.com/devloos" target="_blank">
                <SmartSvg class="fill-primary-600 w-5 dark:fill-slate-200" src="github" />
              </a>
              <a href="https://twitter.com/18aguilerac" target="_blank">
                <SmartSvg
                  class="fill-primary-600 w-5 dark:fill-slate-200"
                  src="twitter"
                />
              </a>
            </div>
            <div>
              <hr class="dark:bg-coal mb-3 bg-neutral-300" />
              <button
                class="bg-alternate-400 dark:bg-alternate-600 flex w-full items-center justify-center gap-5 rounded-sm py-3 transition-all"
                @click="isDark = !isDark"
              >
                <i class="fa-solid" :class="isDark ? 'fa-sun' : 'fa-moon'"></i>
                <span>Switch to {{ isDark ? 'light' : 'dark' }} theme</span>
              </button>
            </div>
          </div>
        </div>
      </SmartTransition>
    </Teleport>
  </nav>
</template>

<style lang="scss" scoped>
hr {
  border: none;
  height: 1px;
}
</style>
