<template>
  <div class="grid h-dvh grid-cols-1">
    <div class="p-6 sm:p-16 md:ps-24 md:pt-26">
      <div class="flex max-w-3xl flex-col gap-6 lg:flex-row lg:gap-13">
        <NuxtLink to="/" class="inline-block shrink-0">
          <img
            class="size-18 rounded-full object-cover object-top md:size-22"
            src="/assets/stud.jpeg"
            alt="Carlos Aguilera"
          />
        </NuxtLink>

        <div class="w-full pt-1">
          <div class="pb-10">
            <NuxtLink to="/" class="mb-3 inline-block">
              <h1 class="font-instrument-serif text-4xl tracking-wider italic">
                Carlos Aguilera
              </h1>
            </NuxtLink>

            <div class="flex flex-wrap gap-3 sm:gap-6">
              <NuxtLink to="/" active-class="text-foreground-active">About</NuxtLink>

              <NuxtLink to="/experiences" active-class="text-foreground-active">
                Experiences
              </NuxtLink>

              <NuxtLink to="/projects" active-class="text-foreground-active">
                Projects
              </NuxtLink>

              <NuxtLink to="/youtube" active-class="text-foreground-active">
                Youtube
              </NuxtLink>

              <NuxtLink to="/resume" active-class="text-foreground-active">
                Resume
              </NuxtLink>
            </div>
          </div>

          <slot />
        </div>
      </div>
    </div>

    <div class="space-x-3.5 self-end pt-5 pb-3.5 text-center">
      <a
        href="https://www.linkedin.com/in/aguilerac"
        aria-label="Linkedin"
        target="_blank"
      >
        <Icon name="lucide:linkedin" class="size-6" />
      </a>

      <a href="https://github.com/devloos" aria-label="Github" target="_blank">
        <Icon name="lucide:github" class="size-6" />
      </a>

      <a href="https://www.youtube.com/@devlos-labs" aria-label="Youtube" target="_blank">
        <Icon name="lucide:youtube" class="size-6" />
      </a>

      <a href="https://leetcode.com/devlos/" aria-label="Leetcode" target="_blank">
        <Icon name="lucide:pyramid" class="size-6" />
      </a>

      <ClientOnly>
        <AppTransition name="scale" mode="out-in" :duration="150">
          <Icon
            v-if="$colorMode.preference === 'dark'"
            name="lucide:sun"
            class="size-6 cursor-pointer"
            @click="$colorMode.preference = 'light'"
          />
          <Icon
            v-else
            name="lucide:moon"
            class="size-6 cursor-pointer"
            @click="$colorMode.preference = 'dark'"
          />
        </AppTransition>
      </ClientOnly>
    </div>
  </div>
</template>
