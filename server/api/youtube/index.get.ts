export default defineCachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig(event);

    const apiKey = config.youtubeApiKey;
    const channelId = config.public.channelId;

    const { maxResults = '10' } = getQuery(event);

    const url = 'https://www.googleapis.com/youtube/v3/search';

    try {
      const res = await $fetch<any>(url, {
        query: {
          key: apiKey,
          channelId: String(channelId),
          part: 'snippet,id',
          order: 'date',
          maxResults: String(maxResults),
          type: 'video',
          videoDuration: 'any',
        },
      });

      const items: YtVideo[] =
        res?.items
          ?.filter((item: any) => item?.id?.videoId)
          .map((item: any) => {
            const video = item.snippet;

            return {
              url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
              thumbnail: video?.thumbnails?.high?.url ?? '',
              title: video?.title ?? '',
              description: video?.description ?? '',
            };
          }) ?? [];

      return {
        items,
      };
    } catch {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch youtube videos.',
      });
    }
  },
  {
    // Cache TTL = 30 minutes
    maxAge: 60 * 60,
    getKey: (event) => {
      const q = getQuery(event);
      return `yt-videos:${q.channelId}:${q.maxResults}`;
    },
  },
);
