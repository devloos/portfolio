<script setup lang="ts">
const { lock, unlock } = useBodyScroll();
const refPortfolioVersions = useTemplateRef('portfolio-versions');
const shouldAllowTransitions = ref(false);

function openPortfolioVersions() {
  refPortfolioVersions.value?.showModal();
  lock();

  setTimeout(() => {
    shouldAllowTransitions.value = true;
  }, 300);
}

function closePortfolioVersions() {
  shouldAllowTransitions.value = false;
  refPortfolioVersions.value?.close();
  unlock();
}
</script>
<template>
  <div class="grid h-dvh grid-cols-1">
    <div class="p-6 sm:p-16 md:ps-24 md:pt-26">
      <div class="flex max-w-3xl flex-col gap-6 lg:flex-row lg:gap-13">
        <NuxtLink to="/" class="inline-block shrink-0" aria-label="About">
          <img
            class="size-18 rounded-full object-cover object-top md:size-22"
            src="/assets/stud-120.jpg"
            alt="Carlos Aguilera"
          />
        </NuxtLink>

        <div class="w-full pt-1">
          <div class="pb-10">
            <ClientOnly>
              <template #default>
                <NuxtLink to="/" class="mb-3 inline-block" aria-label="About">
                  <RadiantText
                    class="hover:text-foreground inline-flex items-center justify-center transition ease-out hover:duration-300"
                    :duration="5"
                  >
                    <h1 class="font-instrument-serif text-4xl tracking-wider italic">
                      Carlos Aguilera
                    </h1>
                  </RadiantText>
                </NuxtLink>
              </template>

              <template #fallback>
                <NuxtLink to="/" class="mb-3 inline-block" aria-label="About">
                  <h1 class="font-instrument-serif text-4xl tracking-wider italic">
                    Carlos Aguilera
                  </h1>
                </NuxtLink>
              </template>
            </ClientOnly>

            <div class="flex flex-wrap gap-3 sm:gap-6">
              <NuxtLink
                to="/"
                class="hover:text-foreground-active transition-all"
                active-class="text-foreground-active underline underline-offset-2"
              >
                About
              </NuxtLink>

              <NuxtLink
                to="/experiences"
                class="hover:text-foreground-active transition-all"
                active-class="text-foreground-active underline underline-offset-2"
              >
                Experiences
              </NuxtLink>

              <NuxtLink
                to="/projects"
                class="hover:text-foreground-active transition-all"
                active-class="text-foreground-active underline underline-offset-2"
              >
                Projects
              </NuxtLink>

              <NuxtLink
                to="/youtube"
                class="hover:text-foreground-active transition-all"
                active-class="text-foreground-active underline underline-offset-2"
              >
                Youtube
              </NuxtLink>

              <NuxtLink
                to="/resume"
                class="hover:text-foreground-active transition-all"
                active-class="text-foreground-active underline underline-offset-2"
              >
                Resume
              </NuxtLink>

              <NuxtLink
                to="/detours"
                class="hover:text-foreground-active transition-all"
                active-class="text-foreground-active underline underline-offset-2"
              >
                Detours
              </NuxtLink>
            </div>
          </div>

          <slot />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-x-3.5 self-end pt-5 pb-3.5">
      <a
        href="https://www.linkedin.com/in/aguilerac"
        aria-label="Linkedin"
        target="_blank"
        class="hover:text-foreground-active flex items-center justify-center transition-all"
      >
        <Icon name="lucide:linkedin" class="size-6" />
      </a>

      <a
        href="https://github.com/devloos"
        aria-label="Github"
        target="_blank"
        class="hover:text-foreground-active flex items-center justify-center transition-all"
      >
        <Icon name="lucide:github" class="size-6" />
      </a>

      <a
        href="https://www.youtube.com/@devlos-labs"
        aria-label="Youtube"
        target="_blank"
        class="hover:text-foreground-active flex items-center justify-center transition-all"
      >
        <Icon name="lucide:youtube" class="size-6" />
      </a>

      <a
        href="https://leetcode.com/devlos/"
        aria-label="Leetcode"
        target="_blank"
        class="hover:text-foreground-active flex items-center justify-center transition-all"
      >
        <Icon name="lucide:pyramid" class="size-6" />
      </a>

      <button
        class="hover:text-foreground-active flex cursor-pointer items-center justify-center transition-all"
        @click="openPortfolioVersions"
      >
        <Icon name="lucide:timer" class="size-6" />
      </button>

      <ClientOnly>
        <template #default>
          <AppTransition name="fade" mode="out-in" :duration="150">
            <Icon
              v-if="$colorMode.preference === 'dark'"
              name="lucide:sun"
              class="hover:text-foreground-active flex size-6 cursor-pointer items-center justify-center transition-all"
              @click="$colorMode.preference = 'light'"
            />
            <Icon
              v-else
              name="lucide:moon"
              class="hover:text-foreground-active flex size-6 cursor-pointer items-center justify-center transition-all"
              @click="$colorMode.preference = 'dark'"
            />
          </AppTransition>
        </template>
        <template #fallback>
          <Icon name="lucide:sun" class="size-6" />
        </template>
      </ClientOnly>
    </div>

    <dialog
      ref="portfolio-versions"
      class="bg-background/25 m-0 h-full max-h-full! w-full max-w-full! backdrop-blur-lg"
      @close="closePortfolioVersions"
    >
      <div class="flex h-full flex-col">
        <form method="dialog" class="flex justify-end p-2">
          <button
            class="hover:text-foreground-active text-foreground flex cursor-pointer items-center justify-center transition-all"
          >
            <Icon name="lucide:x" class="size-6" />
          </button>
        </form>

        <div
          class="flex grow translate-y-0 transform items-center justify-center gap-4 px-6 opacity-100 transition-all sm:px-24 starting:translate-y-96 starting:opacity-0"
        >
          <div class="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <a
              class="cursor-pointer perspective-distant"
              href="https://v1.caguilera.dev/#/"
              target="_blank"
            >
              <div
                class="relative transform lg:rotate-y-12"
                :class="{
                  'transition-all hover:rotate-y-0': shouldAllowTransitions,
                }"
              >
                <SafariMockup
                  url="v1.caguilera.dev"
                  src="/assets/v1.jpg"
                  class="size-full"
                />
              </div>
            </a>

            <a
              class="cursor-pointer perspective-distant"
              href="https://v2.caguilera.dev/"
              target="_blank"
            >
              <div
                class="relative transform lg:-rotate-y-12"
                :class="{
                  'transition-all hover:rotate-y-0': shouldAllowTransitions,
                }"
              >
                <SafariMockup
                  url="v2.caguilera.dev"
                  src="/assets/v2.jpg"
                  class="size-full"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>
