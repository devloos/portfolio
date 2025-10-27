<script lang="ts" setup>
const videos = ref<any[]>([]);
const isLoading = ref(false);
const nextPageToken = ref<string | null>(null);
const prevPageToken = ref<string | null>(null);
const currentPage = ref(1);
const totalResults = ref(0);

onMounted(async () => {
  await fetchVideos();
});

const fetchVideos = async (pageToken: string | null = null) => {
  isLoading.value = true;

  try {
    const res = await $fetch<YoutubeResponse>('/api/youtube', {
      ...(pageToken && { query: { pageToken } }),
    });

    videos.value = res.items;
    nextPageToken.value = res.nextPageToken;
    prevPageToken.value = res.prevPageToken;
    totalResults.value = res.totalResults;
  } catch {
    // todo: handle error
  } finally {
    isLoading.value = false;
  }
};
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
          <img
            :src="video.thumbnail"
            class="h-min w-full sm:w-[160px]"
            :alt="video.title"
          />

          <div>
            <div
              class="text-foreground-active mb-2 gap-2 text-lg font-bold tracking-wide"
            >
              <div>
                {{ video.title }}
                <Icon
                  class="w-5 -translate-y-0.5 align-middle transition-all group-hover/title:translate-x-1 group-hover/title:-translate-y-1"
                  name="lucide:square-arrow-out-up-right"
                />
              </div>
            </div>

            <p class="text-muted-foreground leading-relaxed tracking-wide">
              {{ video.description }}
            </p>
          </div>
        </div>
      </a>

      <div class="flex items-center justify-center gap-5">
        <Icon
          class="size-6"
          :class="{
            'cursor-not-allowed opacity-50': prevPageToken === null,
            'cursor-pointer': prevPageToken !== null,
          }"
          name="lucide:chevron-left"
          @click="
            () => {
              if (prevPageToken !== null) {
                currentPage--;
                fetchVideos(prevPageToken);
              }
            }
          "
        />

        <span class="text-foreground-active space-x-2">
          <span>
            {{ currentPage }}
          </span>
          <span>of</span>
          <span>
            {{ Math.ceil(totalResults / 5) }}
          </span>
        </span>

        <Icon
          class="size-6"
          :class="{
            'cursor-not-allowed opacity-50': nextPageToken === null,
            'cursor-pointer': nextPageToken !== null,
          }"
          name="lucide:chevron-right"
          @click="
            () => {
              if (nextPageToken !== null) {
                currentPage++;
                fetchVideos(nextPageToken);
              }
            }
          "
        />
      </div>
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
