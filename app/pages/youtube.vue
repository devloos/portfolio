<script lang="ts" setup>
const videos = ref<any[]>([]);
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;

  try {
    const res = await $fetch<{ items: YtVideo[] }>('/api/youtube');

    videos.value = res.items;
  } catch {
    // todo: handle error
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div>
    <div v-if="isLoading" class="py-4 text-center">
      <Icon name="lucide:loader-circle" class="size-8 animate-spin" />
    </div>
    <div v-else-if="videos.length > 0" class="flex flex-col gap-5">
      <a
        v-for="video in videos"
        :video="video.url"
        :href="video.url"
        target="_blank"
        class="group/title"
      >
        <div class="flex flex-col gap-3 sm:flex-row">
          <img :src="video.thumbnail" class="w-[480px] sm:w-[160px]" :alt="video.title" />

          <div>
            <div
              class="text-foreground-active mb-2 flex items-center gap-2 text-lg font-bold tracking-wide"
            >
              <span>{{ video.title }}</span>
              <Icon
                class="inline w-5 transition-all group-hover/title:translate-x-1 group-hover/title:-translate-y-1"
                name="lucide:square-arrow-out-up-right"
              />
            </div>

            <p class="text-muted-foreground leading-relaxed tracking-wide">
              {{ video.description }}
            </p>
          </div>
        </div>
      </a>
    </div>
    <div
      v-else
      class="mx-auto flex max-w-xs flex-col items-center gap-3 py-4 text-center"
    >
      <Icon name="lucide:camera-off" class="size-8" />

      <h3 class="text-foreground-active">No Youtube Videos</h3>
      <p class="text-muted-foreground">
        Looks like we didn't find any youtube videos try again later
      </p>
    </div>
  </div>
</template>
