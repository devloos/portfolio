<template>
  <div class="ps-24 pt-26">
    <div class="flex max-w-3xl gap-13">
      <NuxtLink to="/" class="inline-block shrink-0">
        <img
          class="size-22 rounded-full object-cover object-top"
          src="/assets/stud.jpeg"
          alt="Carlos Aguilera"
        />
      </NuxtLink>

      <div class="pt-1">
        <div class="pb-10">
          <NuxtLink to="/" class="mb-3 inline-block">
            <h1 class="font-instrument-serif text-4xl tracking-wider italic">
              Carlos Aguilera
            </h1>
          </NuxtLink>

          <div class="flex gap-6">
            <NuxtLink to="/" active-class="text-foreground-active">About</NuxtLink>

            <NuxtLink to="/experiences" active-class="text-foreground-active">
              Experiences
            </NuxtLink>

            <NuxtLink to="/projects" active-class="text-foreground-active">
              Projects
            </NuxtLink>

            <NuxtLink to="/articles" active-class="text-foreground-active">
              Articles
            </NuxtLink>

            <NuxtLink to="/youtube" active-class="text-foreground-active">
              Youtube
            </NuxtLink>

            <NuxtLink to="/resume" active-class="text-foreground-active">Resume</NuxtLink>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>
