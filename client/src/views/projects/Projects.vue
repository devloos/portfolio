<script setup>
import { useHead } from '@unhead/vue';
import FeaturedProject from './-FeaturedProject.vue';

useHead({
  title: 'Devlos | Projects',
  meta: [
    {
      name: 'description',
      content: '[project, project]',
    },
  ],
});

const project = {
  title: 'Pokemon Store',
  tags: [
    {
      title: 'Javascript',
      logoName: 'javascript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      title: 'Vue js',
      logoName: 'vuedotjs',
      url: 'https://vuejs.org/guide/introduction.html',
    },
    {
      title: 'Tailwind CSS',
      logoName: 'tailwindcss',
      url: 'https://tailwindcss.com/docs/installation',
    },
    {
      title: 'Laravel',
      logoName: 'laravel',
      url: 'https://laravel.com/docs/10.x',
    },
    {
      title: 'MongoDB',
      logoName: 'mongodb',
      url: 'https://www.mongodb.com/docs',
    },
  ],
};
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
        :speed="1600"
      >
        <swiper-slide>
          <div class="pb-8 pt-10">
            <FeaturedProject class="mx-auto" :project>
              <template #image>
                <div class="relative mb-6 sm:mb-10">
                  <img src="/macbook.png" alt="macbook" data-swiper-parallax="100" />
                  <img
                    class="absolute -top-10 left-1/2 max-w-28 sm:max-w-36"
                    src="/dark-cube.png"
                    alt="Dark Cube"
                    data-swiper-parallax="-500"
                  />
                  <img
                    class="absolute right-14 top-1/2 max-w-28 sm:max-w-36"
                    src="/dark-romb.png"
                    alt="Dark Romb"
                    data-swiper-parallax="-1000"
                  />
                  <img
                    class="absolute -bottom-12 left-24 max-w-28 sm:-bottom-16 sm:max-w-36"
                    src="/white-cube.png"
                    alt="White Cube"
                    data-swiper-parallax="-800"
                  />
                </div>
              </template>

              <template #description>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error culpa
                  molestias laborum hic facilis atque id maiores aut, magni ab, deleniti
                  fugiat iusto quisquam. Ratione blanditiis laudantium omnis quibusdam
                  aliquid!
                </p>
              </template>
            </FeaturedProject>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="pb-8 pt-10">
            <FeaturedProject class="mx-auto" :project>
              <template #image>
                <div class="relative mb-6 sm:mb-10">
                  <img src="/macbook.png" alt="macbook" />
                  <img
                    class="absolute -top-10 left-1/2 max-w-28 sm:max-w-36"
                    src="/dark-cube.png"
                    alt="Dark Cube"
                    data-swiper-parallax="-300"
                  />
                  <img
                    class="absolute right-14 top-1/2 max-w-28 sm:max-w-36"
                    src="/dark-romb.png"
                    alt="Dark Romb"
                    data-swiper-parallax="-800"
                  />
                  <img
                    class="absolute -bottom-12 left-24 max-w-28 sm:-bottom-16 sm:max-w-36"
                    src="/white-cube.png"
                    alt="White Cube"
                    data-swiper-parallax="-500"
                  />
                </div>
              </template>

              <template #description>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error culpa
                  molestias laborum hic facilis atque id maiores aut, magni ab, deleniti
                  fugiat iusto quisquam. Ratione blanditiis laudantium omnis quibusdam
                  aliquid!
                </p>
              </template>
            </FeaturedProject>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="pb-8 pt-10">
            <FeaturedProject class="mx-auto" :project>
              <template #image>
                <div class="relative mb-6 sm:mb-10">
                  <img src="/macbook.png" alt="macbook" />
                  <img
                    class="absolute -top-10 left-1/2 max-w-28 sm:max-w-36"
                    src="/dark-cube.png"
                    alt="Dark Cube"
                  />
                  <img
                    class="absolute right-14 top-1/2 max-w-28 sm:max-w-36"
                    src="/dark-romb.png"
                    alt="Dark Romb"
                  />
                  <img
                    class="absolute -bottom-12 left-24 max-w-28 sm:-bottom-16 sm:max-w-36"
                    src="/white-cube.png"
                    alt="White Cube"
                  />
                </div>
              </template>

              <template #description>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error culpa
                  molestias laborum hic facilis atque id maiores aut, magni ab, deleniti
                  fugiat iusto quisquam. Ratione blanditiis laudantium omnis quibusdam
                  aliquid!
                </p>
              </template>
            </FeaturedProject>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
