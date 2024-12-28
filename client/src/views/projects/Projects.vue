<script setup>
import { useHead } from '@unhead/vue';
import FeaturedProject from './-FeaturedProject.vue';
import { inject, onMounted, ref } from 'vue';
import { useSmartFetch } from '@/composables/smart-fetch';
import SmartImg from '@/components/smart/SmartImg.vue';
import SmartSvg from '@/components/smart/SmartSvg.vue';
import { buildTagUrl } from '@/assets/utility';

useHead({
  title: 'Devlos | Projects',
  meta: [
    {
      name: 'description',
      content: '[project, project]',
    },
  ],
});

const projectOne = ref(null);
const projectTwo = ref(null);
const projectThree = ref(null);
const projectFour = ref(null);

const projects = ref([]);

async function fetchFeaturedProjects() {
  const response = await useSmartFetch({
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
    [projectOne.value, projectTwo.value, projectThree.value, projectFour.value] =
      response.data;
  }
}

async function fetchProjects() {
  const response = await useSmartFetch({
    url: '/api/project/list',
    method: 'GET',
    params: {
      featured: false,
      orderBy: {
        priority: 'ASC',
      },
      include: {
        tags: true,
      },
    },
  });

  if (response.success) {
    projects.value = response.data;
  }
}

const isLoading = ref(true);
const startOverlay = inject('start-overlay', () => {});
const stopOverlay = inject('stop-overlay', () => {});

onMounted(async () => {
  startOverlay();

  const promises = [];
  promises.push(fetchFeaturedProjects());
  promises.push(fetchProjects());

  await Promise.all(promises);

  stopOverlay();
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading" class="h-svh" />
  <div v-else>
    <div class="px-5 py-10">
      <swiper-container
        :slides-per-view="1"
        :pagination="{
          enabled: true,
          clickable: true,
        }"
        :parallax="true"
        :mousewheel="{
          enabled: true,
          forceToAxis: true,
        }"
        space-between="80"
        :speed="1600"
      >
        <swiper-slide>
          <div class="pb-8 pt-10">
            <FeaturedProject v-if="projectOne" class="mx-auto" :project="projectOne">
              <template #image>
                <div class="relative mb-6 sm:mb-10 lg:mb-0">
                  <div class="shadow-xl" data-swiper-parallax="-50">
                    <SmartImg
                      class="rounded"
                      :src="projectOne.file.src"
                      width="3454"
                      height="1924"
                      :type="projectOne.file.type"
                      :alt="projectOne.title"
                    />
                  </div>
                  <img
                    class="absolute -top-10 left-1/2 max-w-28 sm:max-w-36"
                    src="/dark-cube.png"
                    alt="Dark Cube"
                    data-swiper-parallax="-400"
                  />
                  <img
                    class="absolute -bottom-12 left-24 max-w-28 sm:-bottom-16 sm:max-w-36"
                    src="/white-cube.png"
                    alt="White Cube"
                    data-swiper-parallax="-1200"
                  />
                </div>
              </template>
            </FeaturedProject>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pb-8 pt-10">
            <FeaturedProject v-if="projectTwo" class="mx-auto" :project="projectTwo">
              <template #image>
                <div class="relative mb-6 sm:mb-10 lg:mb-0">
                  <div class="shadow-xl" data-swiper-parallax="-50">
                    <SmartImg
                      class="rounded"
                      :src="projectTwo.file.src"
                      width="3454"
                      height="1924"
                      :type="projectTwo.file.type"
                      :alt="projectTwo.title"
                    />
                  </div>
                  <img
                    class="absolute -bottom-12 left-24 max-w-28 sm:-bottom-16 sm:max-w-36"
                    src="/dark-cube.png"
                    alt="Dark Cube"
                    data-swiper-parallax="-800"
                  />
                </div>
              </template>
            </FeaturedProject>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="relative pb-8 pt-10">
            <FeaturedProject v-if="projectThree" class="mx-auto" :project="projectThree">
              <template #image>
                <div class="mb-6 sm:mb-10 lg:mb-0">
                  <div class="shadow-xl" data-swiper-parallax="-50">
                    <SmartImg
                      class="rounded"
                      :src="projectThree.file.src"
                      width="3454"
                      height="1924"
                      :type="projectThree.file.type"
                      :alt="projectThree.title"
                    />
                  </div>
                </div>
              </template>
            </FeaturedProject>
            <div class="dots" data-swiper-parallax="-500" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="relative pb-8 pt-10">
            <FeaturedProject v-if="projectFour" class="mx-auto" :project="projectFour">
              <template #image>
                <div class="mb-6 sm:mb-10 lg:mb-0">
                  <div class="shadow-xl" data-swiper-parallax="-50">
                    <SmartImg
                      class="rounded"
                      :src="projectFour.file.src"
                      width="3454"
                      height="1924"
                      :type="projectFour.file.type"
                      :alt="projectFour.title"
                    />
                  </div>
                </div>
              </template>
            </FeaturedProject>
            <div class="diagonal-lines" data-swiper-parallax="-500" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>

    <div class="mx-auto max-w-6xl px-3 pb-14 pt-28 sm:px-10 xl:px-0">
      <h3 class="pb-14 text-center text-lg font-bold tracking-wider">
        Other Noteworthy Projects
      </h3>
      <div class="grid auto-rows-fr gap-3 md:grid-cols-2 xl:grid-cols-3">
        <a
          v-for="project in projects"
          :key="project.id"
          :href="project.source"
          class="group flex flex-col rounded bg-alternate-100 p-8 transition-all hover:-translate-y-2 dark:bg-primary-700"
        >
          <div class="flex justify-between">
            <SmartSvg class="h-9 w-9 fill-alternate" name="FolderSvg" />

            <div class="flex items-center gap-4 lg:justify-end">
              <a v-if="project.source" :href="project.source" target="_blank">
                <SmartSvg
                  class="h-5 w-5 hover:stroke-alternate dark:stroke-slate-200 hover:dark:stroke-alternate"
                  name="GithubOutlineSvg"
                />
              </a>
              <a v-if="project.site" :href="project.site" target="_blank">
                <SmartSvg
                  class="h-6 w-6 -translate-y-[1px] hover:stroke-alternate"
                  name="SquareArrowSvg"
                />
              </a>
            </div>
          </div>

          <h4
            class="py-3 text-xl font-bold transition-all group-hover:text-alternate-300"
          >
            {{ project.title }}
          </h4>

          <p class="ellipsis mb-4 text-sm">
            {{ project.description }}
          </p>

          <div class="flex grow flex-wrap items-end gap-1">
            <div v-for="tag in project?.tags" :key="tag.id">
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
                      logo: tag.logoName,
                    })
                  "
                  width=""
                  loading="lazy"
                  :aria-label="tag.title"
                  :alt="tag.title"
                />
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.dots {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 75%;
  height: 75%;
  opacity: 1;
  z-index: -100;

  background-image: radial-gradient(#4383cb 2px, transparent 0);
  background-size: 40px 40px;
}

.diagonal-lines {
  position: absolute;
  left: 35%;
  top: 0px;
  width: 40%;
  height: 90%;
  z-index: -100;
  opacity: 0.5;

  background-color: rgba(255, 255, 255, 0);
  background: repeating-linear-gradient(
    45deg,
    #4383cb,
    #4383cb 2px,
    rgba(255, 255, 255, 0) 2px,
    rgba(255, 255, 255, 0) 10px
  );
}

.ellipsis {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  line-clamp: 7; /* Number of lines before ellipsis */
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}
</style>
