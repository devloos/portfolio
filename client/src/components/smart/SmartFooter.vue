<script setup>
import TopWave from '@/components/wave-svgs/TopWave.vue';
import SmartSvg from '@/components/smart/SmartSvg.vue';
import MediaKit from '@/components/MediaKit.vue';
import StyledButton from '@/components/styled/StyledButton.vue';
import { RouterLink } from 'vue-router';

const year = new Date().getFullYear();
</script>
<template>
  <div class="relative mt-24 pt-12">
    <TopWave class="fill-alternate-100 dark:fill-primary-700" />
    <div class="absolute -top-10 w-full px-3">
      <div
        class="border-animated dark:dark-conic-border light-conic-border mx-auto w-fit rounded-sm bg-slate-500 p-8 shadow-lg md:px-10 md:py-12 lg:px-12 lg:py-14 dark:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div class="text-nowrap">
            <p class="text-2xl font-bold">Contact me</p>
          </div>
          <div class="max-w-96 text-lg md:max-w-64 lg:max-w-lg xl:max-w-xl">
            <p>
              Interested in working together or need help with anything? We should queue
              up a time to chat. I’ll buy the coffee.
            </p>
          </div>
          <div>
            <RouterLink class="group inline-block text-slate-200" to="/contact">
              <StyledButton
                class="bg-primary ring-primary-100 ring-1 dark:bg-slate-700 dark:ring-slate-400"
              >
                <div class="flex items-center gap-3 text-nowrap">
                  <SmartSvg
                    src="message"
                    class="h-6 w-6 transition-all group-hover:-translate-y-1"
                  />
                  <span>Let Me Know!</span>
                </div>
              </StyledButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-alternate-100 dark:bg-primary-700 pt-72 md:pt-40">
      <div class="flex flex-col items-center justify-center gap-10">
        <div>
          <MediaKit
            class="max-w-20 self-center rounded-full border border-slate-700"
            src="/portfolio/stud-1733607141582.jpeg"
            :width="830"
            :height="830"
            alt="stud"
          />
        </div>
        <blockquote class="mb-5">
          <p class="max-w-sm text-center font-mono text-xl tracking-wide antialiased">
            Leave a meaningful impact, regardless of its scale.
          </p>
        </blockquote>
        <div class="flex items-center justify-around gap-6 md:gap-16">
          <a
            class="group rounded-sm transition-all hover:bg-slate-700 dark:hover:bg-slate-200"
            href="https://www.linkedin.com/in/aguilerac"
            aria-label="Linkedin"
            target="_blank"
          >
            <div
              class="rounded-sm border border-slate-700 p-2 px-3 dark:border-slate-200"
            >
              <SmartSvg
                class="group-hover:fill-alternate-100 h-7 w-7 fill-slate-700 transition-all dark:fill-slate-200 dark:group-hover:fill-slate-700"
                src="linkedin"
              />
            </div>
          </a>
          <a
            class="group rounded-sm transition-all hover:bg-slate-700 dark:hover:bg-slate-200"
            href="https://www.instagram.com/devloos"
            aria-label="Instagram"
            target="_blank"
          >
            <div
              class="rounded-sm border border-slate-700 p-2 px-3 dark:border-slate-200"
            >
              <SmartSvg
                class="group-hover:fill-alternate-100 h-7 w-7 fill-slate-700 transition-all dark:fill-slate-200 dark:group-hover:fill-slate-700"
                src="instagram"
              />
            </div>
          </a>
          <a
            class="group rounded-sm transition-all hover:bg-slate-700 dark:hover:bg-slate-200"
            href="https://github.com/devloos"
            aria-label="Github"
            target="_blank"
          >
            <div
              class="rounded-sm border border-slate-700 p-2 px-3 dark:border-slate-200"
            >
              <SmartSvg
                class="group-hover:fill-alternate-100 h-7 w-7 fill-slate-700 transition-all dark:fill-slate-200 dark:group-hover:fill-slate-700"
                src="github"
              />
            </div>
          </a>
          <a
            class="group rounded-sm transition-all hover:bg-slate-700 dark:hover:bg-slate-200"
            href="https://twitter.com/18aguilerac"
            aria-label="Twitter"
            target="_blank"
          >
            <div
              class="rounded-sm border border-slate-700 p-2 px-3 dark:border-slate-200"
            >
              <SmartSvg
                class="group-hover:fill-alternate-100 h-7 w-7 fill-slate-700 transition-all dark:fill-slate-200 dark:group-hover:fill-slate-700"
                src="twitter"
              />
            </div>
          </a>
          <a
            class="group rounded-sm transition-all hover:bg-slate-700 dark:hover:bg-slate-200"
            href="https://leetcode.com/devlos/"
            aria-label="Leetcode"
            target="_blank"
          >
            <div
              class="rounded-sm border border-slate-700 p-2 px-3 dark:border-slate-200"
            >
              <SmartSvg
                class="group-hover:fill-alternate-100 h-7 w-7 fill-slate-700 transition-all dark:fill-slate-200 dark:group-hover:fill-slate-700"
                src="laptop"
              />
            </div>
          </a>
        </div>
      </div>
      <div>
        <p class="pt-16 pb-2 text-center text-gray-500 dark:text-gray-400">
          &copy; {{ year }} Carlos Aguilera
        </p>

        <div class="flex justify-end pe-5 pb-5 md:pe-9 md:pb-8">
          <a href="https://v1.caguilera.dev/#/" target="_blank">
            <MediaKit
              src="/portfolio/nether-portal.webp"
              :width="250"
              :height="432"
              class="max-w-12 transition-all hover:-translate-y-2"
              alt="nether-portal"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.border-animated {
  --border-size: 3px;
  --border-angle: 0turn;

  background-size:
    calc(100% - (var(--border-size) * 2)) calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }
}

@property --border-angle {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0turn;
}
</style>
