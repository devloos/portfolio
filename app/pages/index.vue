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
      I have 5 years of experience in software development. I like to desgin clean
      systems, think about performance, and most importantly own projects end-to-end.
    </p>

    <br />

    <p class="mb-3">
      Outside of code, my real priority is my family. Being a husband and dad is the main
      thing that keeps me grounded and motivated, everything else is just leveling up.
    </p>

    <br />

    <p class="mb-3">
      This is my son, Mateo. But us nerds call him Devteo. Get it Developer Teo... Anyways
      hes already cracked at vim, gadot, and leetcode.
    </p>

    <div
      class="mx-auto mt-10 max-w-1/3 overflow-hidden rounded-2xl border-3 border-gray-600"
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
