<script lang="ts" setup>
import { PROJECTS } from '~/assets/constants/projects';

const PAGE_SIZE = 3;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(PROJECTS.length / PAGE_SIZE));

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return PROJECTS.slice(start, start + PAGE_SIZE);
});

const hasPrev = computed(() => currentPage.value > 1);
const hasNext = computed(() => currentPage.value < totalPages.value);

const quotes = [
  "Oo, you're still here?",
  "Yup, it's a lot of projects.",
  'If you made it this far you should just hire me at this point.',
  'Still scrolling? I respect the dedication.',
  "You've seen more of my work than most recruiters.",
  "At this point we're basically friends.",
  "Plot twist: there's more.",
  'I promise I go outside too.',
  'Fun fact: I built this page instead of sleeping.',
  "You're either impressed or very bored. Either way, welcome.",
];

const pageQuote = computed(() => {
  if (currentPage.value <= 1) return null;
  return quotes[(currentPage.value - 2) % quotes.length];
});

const goToPrev = () => {
  if (hasPrev.value) currentPage.value--;
};

const goToNext = () => {
  if (hasNext.value) currentPage.value++;
};
</script>

<template>
  <div class="flex flex-col gap-5">
    <div>
      <ProjectCard v-for="proj in paginatedProjects" :key="proj.id" :project="proj" />
    </div>

    <p
      v-if="pageQuote"
      class="text-muted-foreground border-muted mx-auto max-w-md border-l-2 pl-4 text-center text-sm tracking-wide italic"
    >
      "{{ pageQuote }}"
    </p>

    <div class="flex items-center justify-center gap-5">
      <Icon
        class="size-6"
        :class="{
          'cursor-not-allowed opacity-50': !hasPrev,
          'cursor-pointer': hasPrev,
        }"
        name="lucide:chevron-left"
        @click="goToPrev"
      />

      <span class="text-foreground-active space-x-2">
        <span>{{ currentPage }}</span>
        <span>of</span>
        <span>{{ totalPages }}</span>
      </span>

      <Icon
        class="size-6"
        :class="{
          'cursor-not-allowed opacity-50': !hasNext,
          'cursor-pointer': hasNext,
        }"
        name="lucide:chevron-right"
        @click="goToNext"
      />
    </div>
  </div>
</template>
