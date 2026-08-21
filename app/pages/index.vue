<script lang="ts" setup>
const { imageKitUrl } = useRuntimeConfig().public;
</script>

<template>
  <div class="leading-7">
    <p class="mb-3">
      Hey I'm Carlos. Someone who enjoys tech. I am a full time software developer at
      Ethika. I am also a lead software engineer at The Inked Network. For school, I am a
      Computer Science student at CSULB.
    </p>

    <br />

    <p class="mb-3">
      I have 4+ years of professional software development experience. I like to design
      clean systems, think about performance, and most importantly, own projects
      end-to-end.
    </p>

    <br />

    <p class="mb-3">
      Outside of code, my real priority is my family. Being a husband and dad is the main
      thing that keeps me grounded and motivated, everything else is just leveling up.
    </p>

    <br />

    <div
      class="pointer-events-none flex flex-col items-center gap-1 bg-linear-to-b from-black/70 via-black/25 to-transparent pt-3"
    >
      <p
        class="font-caveat -rotate-6 text-center text-4xl leading-none text-white drop-shadow-lg sm:text-5xl"
      >
        my son, Mateo
        <span class="block rotate-3 text-3xl sm:text-4xl">but we call him</span>
        <span class="block -rotate-2 text-5xl text-orange-300 sm:text-6xl">Devteo</span>
      </p>

      <Icon
        name="lucide:arrow-big-down-dash"
        class="size-10 rotate-6 animate-bounce text-orange-300 drop-shadow-lg"
      />
    </div>

    <div
      class="mx-auto mt-4 max-w-1/2 overflow-hidden rounded-2xl border-3 border-gray-600 md:max-w-1/3"
    >
      <img
        :src="`${imageKitUrl}/devteo.JPG`"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
        :width="1486"
        :height="1984"
        alt="Devteo Aguilera"
        loading="lazy"
      />
    </div>
  </div>
</template>
