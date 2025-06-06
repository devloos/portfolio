<script setup lang="js">
import { useHead } from '@unhead/vue';
import { useDark } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import { injectAppContext } from '@/App.vue';
import { buildTagUrl } from '@/assets/utils/helpers';
import { smartFetch } from '@/assets/utils/smart-fetch';
import ExperienceCard from '@/components/cards/ExperienceCard.vue';
import ProjectCard from '@/components/cards/ProjectCard.vue';
import StatCard from '@/components/cards/StatCard.vue';
import MediaKit from '@/components/MediaKit.vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import StyledButton from '@/components/styled/StyledButton.vue';
import BottomWave from '@/components/wave-svgs/BottomWave.vue';
import TopWave from '@/components/wave-svgs/TopWave.vue';

useHead({
  title: 'Devlos',
  meta: [
    {
      name: 'description',
      content: '[object, object]',
    },
  ],
});

const isDark = useDark();
const featuredProjects = ref([]);

const isLoading = ref(true);

const appContext = injectAppContext();

async function fetchFeaturedProjects() {
  const response = await smartFetch({
    url: '/api/project/list',
    method: 'GET',
    params: {
      featured: true,
      orderBy: {
        priority: 'ASC',
      },
      include: {
        tags: true,
      },
    },
  });

  if (response.success) {
    featuredProjects.value = response.data.projects;
  }
}

const featuredTags = ref([]);

async function fetchFeaturedTags() {
  const response = await smartFetch({
    url: '/api/tag/list',
    method: 'GET',
    params: {
      featured: true,
    },
  });

  if (response.success) {
    featuredTags.value = response.data;
  }
}

const experiences = ref([]);

async function fetchExperiences() {
  const response = await smartFetch({
    url: '/api/experience/list',
    method: 'GET',
    params: {
      include: {
        tags: true,
      },
    },
  });

  if (response.success) {
    experiences.value = response.data;
  }
}

onMounted(async () => {
  appContext.overlay.start();

  const promises = [];
  promises.push(fetchFeaturedProjects());
  promises.push(fetchFeaturedTags());
  promises.push(fetchExperiences());

  await Promise.all(promises);

  appContext.overlay.stop();
  isLoading.value = false;
});

const hoveredIndex = ref(null);

function isHoveredIndex(i) {
  return i === hoveredIndex.value;
}
</script>
<template>
  <main v-if="isLoading" class="h-svh" />
  <main v-else>
    <section class="mb-16 pt-4 md:px-3 md:pt-20">
      <div
        class="container mx-auto flex flex-col items-center justify-center gap-4 md:max-w-[44rem] md:flex-row-reverse lg:max-w-4xl xl:max-w-[60rem]"
      >
        <div class="relative mb-14">
          <MediaKit
            class="animate-vertical max-w-48 md:max-w-44"
            src="/portfolio/avatar.png"
            :width="450"
            :height="450"
            alt="avatar"
          />
          <MediaKit
            class="animate-vertical absolute -right-10 -bottom-16 md:-right-8 md:-bottom-14 md:min-w-48 lg:-right-10 lg:-bottom-16 lg:min-w-52"
            src="/portfolio/nimbus.png"
            :width="683"
            :height="365"
            alt="nimbus"
          />
        </div>
        <div class="grow px-2 text-center md:text-start">
          <p class="mb-7 max-w-xl px-1 text-2xl font-semibold lg:text-3xl">
            <span>Hey! My name is&nbsp;</span>
            <span
              class="inline-block bg-linear-to-r from-[#38AECC] to-[#022F40] bg-clip-text font-extrabold text-transparent dark:from-[#0846DA] dark:to-[#25F9F5]"
            >
              Carlos
            </span>
            <span>. I work as a Full Stack Developer at Ethika Inc.</span>
          </p>
          <div class="px-2">
            <RouterLink class="mr-6" to="/resume">
              <StyledButton
                class="bg-alternate-200 ring-primary-400 dark:bg-primary-600 ring-1 dark:ring-slate-400"
              >
                Resume
              </StyledButton>
            </RouterLink>
            <RouterLink to="/projects" class="group inline-block">
              <StyledButton
                class="bg-primary-100 ring-primary-400 dark:bg-alternate-700 ring-1 dark:ring-slate-400"
              >
                <div class="flex items-center justify-center gap-3">
                  <p>Projects</p>
                  <i
                    class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-[2px]"
                  ></i>
                </div>
              </StyledButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section class="relative py-12">
      <TopWave class="fill-alternate-100 dark:fill-primary-700" />
      <div class="bg-alternate-100 dark:bg-primary-700 min-h-36">
        <SmartTransition name="fade" mode="out-in">
          <div v-if="featuredProjects.length > 0">
            <h4 class="mb-6 text-center text-lg font-semibold">Featured Projects</h4>
            <div
              class="container grid max-w-6xl grid-cols-1 place-items-center gap-6 px-3 lg:grid-cols-2"
            >
              <ProjectCard
                v-for="project in featuredProjects"
                :key="project.id"
                :project="project"
              />
            </div>
          </div>
        </SmartTransition>
      </div>
      <BottomWave class="fill-alternate-100 dark:fill-primary-700" />
    </section>
    <section id="about" class="mt-16">
      <div class="relative container flex max-w-7xl flex-col lg:flex-row">
        <div class="mx-auto max-w-2xl self-start px-4 lg:sticky lg:top-[78px]">
          <div class="mb-10">
            <h1 class="mb-2 text-3xl font-bold">Carlos Aguilera</h1>
            <p class="text-coal-400 font-light dark:text-slate-400">
              Full Stack Developer at Ethika Inc.
            </p>
          </div>
          <div class="mb-10 text-sm leading-relaxed">
            <p class="mb-3 text-base font-bold">About</p>
            <p class="mb-3">
              I'm a software engineer with a big passion for Computer Science. My journey
              started back in 2020, but it wasn't until late 2021 that I could fully focus
              on it. Once I got started, I dove into learning C++ through online tutorials
              and built projects like a
              <a
                href="https://github.com/devloos/Snake-Game"
                class="font-semibold hover:opacity-50 dark:text-white"
                target="_blank"
              >
                <span class="underline underline-offset-2">Snake Game</span>
              </a>
              , a
              <a
                href="https://github.com/devloos/Pokemon-Clone"
                class="font-semibold hover:opacity-50 dark:text-white"
                target="_blank"
              >
                <span class="underline underline-offset-2">Pokemon-inspired RPG</span>
              </a>
              , and a
              <a
                href="https://github.com/devloos/Sales-System"
                class="font-semibold hover:opacity-50 dark:text-white"
                target="_blank"
              >
                <span class="underline underline-offset-2">Sales System</span>
              </a>
              using tools like ncurses, RayLib, and mongocxx.
            </p>
            <p class="mb-3">
              Now, I'm studying Computer Science at Long Beach State University and
              keeping up a 3.85 GPA. Being the first in my family to go to university
              makes it all the more rewarding.
            </p>
            <p class="mb-3">
              While working as a supervisor at Ethika, my interest in tech really took
              off. I started sharing what I was learning, and that led to landing my first
              software development job, a huge moment for me.
            </p>
            <p>
              I'm all about learning new things and trying out different tools. Outside of
              coding, I love fishing, playing soccer, and spending time with my family. My
              dream is to create something meaningful that makes a difference, no matter
              how big or small.
            </p>
          </div>
        </div>

        <div class="mx-auto max-w-2xl px-4">
          <SmartTransition name="slide-from-right" mode="out-in">
            <div v-if="experiences.length > 0">
              <p class="mb-8 font-bold">Experience</p>
              <div>
                <ExperienceCard
                  v-for="(ex, i) in experiences"
                  :key="ex.id"
                  :class="{
                    'lg:bg-alternate-100 lg:opacity-100 lg:drop-shadow-lg lg:dark:bg-slate-700':
                      isHoveredIndex(i),
                    'lg:opacity-50': !isHoveredIndex(i) && hoveredIndex !== null,
                  }"
                  :experience="ex"
                  @mouseenter="hoveredIndex = i"
                  @mouseleave="hoveredIndex = null"
                />
              </div>
            </div>
          </SmartTransition>
        </div>
      </div>
    </section>
    <section class="relative mb-16 pt-6">
      <div class="mx-auto mt-8 max-w-4xl">
        <p class="mb-6 text-center text-lg font-semibold">Technologies</p>
        <SmartTransition name="fade" mode="out-in">
          <div
            v-if="featuredTags.length > 0"
            class="mb-14 flex flex-wrap justify-center gap-3"
          >
            <div v-for="tag in featuredTags" :key="tag.id">
              <a
                :href="tag.url"
                target="_blank"
                class="inline-block transition-all hover:opacity-80"
              >
                <img
                  :src="
                    buildTagUrl({
                      text: tag.title,
                      backgroundColor: isDark ? '121923' : 'd9e6f5',
                      style: 'for-the-badge',
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
        </SmartTransition>
        <div class="px-3">
          <StatCard perspective />
        </div>
      </div>
    </section>
  </main>
</template>

<style>
@keyframes vertical {
  from {
    transform: translateY(-0.3rem);
  }
  to {
    transform: translateY(0.7rem);
  }
}

.animate-vertical {
  animation-name: vertical;
  animation-duration: 2500ms;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
