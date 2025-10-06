<script lang="ts" setup>
const config = useRuntimeConfig();

const URL = `https://www.googleapis.com/youtube/v3/search?key=${config.public.youtubeApiKey}&channelId=${config.public.channelId}&part=snippet,id&order=date&maxResults=10`;

const videos = ref<any[]>([]);

onMounted(async () => {
  const res = await $fetch<any>(URL);

  const data = res.items
    .filter((item: any) => item.id.videoId)
    .map((item: any) => {
      const video = item.snippet;
      const url = `https://www.youtube.com/watch?v=${item.id.videoId}`;
      const thumbnail = item.snippet.thumbnails.high.url;
      const title = video.title;
      const description = video.description;

      return {
        url,
        thumbnail,
        title,
        description,
      };
    });

  videos.value = data;
});
</script>

<template>
  <div>
    <div class="flex flex-col gap-5">
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
              class="text-secondary/75 mb-2 flex items-center gap-2 font-bold tracking-wide"
            >
              <span>{{ video.title }}</span>
              <Icon
                class="inline w-5 transition-all group-hover/title:translate-x-1 group-hover/title:-translate-y-1"
                name="lucide:square-arrow-out-up-right"
              />
            </div>
            <p>{{ video.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
