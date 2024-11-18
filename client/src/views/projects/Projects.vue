<script setup>
import { useHead } from '@unhead/vue';
import FeaturedProject from './-FeaturedProject.vue';
import { onMounted, ref } from 'vue';
import { useSmartFetch } from '@/composables/smart-fetch';
import SmartImg from '@/components/smart/SmartImg.vue';

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

async function fetchFeaturedProjects() {
  const response = await useSmartFetch({
    url: '/api/project/list',
    method: 'GET',
    params: {
      featured: true,
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

onMounted(() => {
  fetchFeaturedProjects();
});
</script>

<template>
  <div>
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

    <div class="container flex items-center justify-center gap-2 py-24">
      <hr class="grow" />
      <h1 class="text-lg font-semibold">PROJECT PAGE UNFINISHED</h1>
      <hr class="grow" />
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
</style>
