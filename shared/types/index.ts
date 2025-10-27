export type YtVideo = {
  url: string;
  thumbnail: string;
  title: string;
  description: string;
};

export type YoutubeResponse = {
  items: YtVideo[];
  nextPageToken: string | null;
  prevPageToken: string | null;
  totalResults: number;
};
