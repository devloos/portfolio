<script setup lang="ts">
interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const BASE_COL_WIDTH = 200;
const BASE_ROW_HEIGHT = 120;

const { imageKitUrl } = useRuntimeConfig().public;

const galleryItems: GalleryItem[] = [
  { src: `${imageKitUrl}/1.jpg`, alt: 'Photo 1', width: 1486, height: 1984 },
  { src: `${imageKitUrl}/2.jpg`, alt: 'Photo 2', width: 1486, height: 1982 },
  { src: `${imageKitUrl}/3.jpg`, alt: 'Photo 3', width: 1480, height: 1970 },
  { src: `${imageKitUrl}/6.jpg`, alt: 'Photo 6', width: 2232, height: 1762 },
  { src: `${imageKitUrl}/4.jpg`, alt: 'Photo 4', width: 1468, height: 1962 },
  { src: `${imageKitUrl}/5.jpg`, alt: 'Photo 5', width: 1478, height: 1976 },
  { src: `${imageKitUrl}/7.jpg`, alt: 'Photo 7', width: 2628, height: 1960 },
  { src: `${imageKitUrl}/8.jpg`, alt: 'Photo 8', width: 1468, height: 1976 },
  { src: `${imageKitUrl}/9.jpg`, alt: 'Photo 9', width: 1478, height: 1956 },
  { src: `${imageKitUrl}/10.jpg`, alt: 'Photo 10', width: 1442, height: 1940 },
  { src: `${imageKitUrl}/11.jpg`, alt: 'Photo 11', width: 1160, height: 1972 },
  { src: `${imageKitUrl}/12.jpg`, alt: 'Photo 12', width: 1478, height: 1974 },
];

function getSpans(item: GalleryItem) {
  const aspectRatio = item.width / item.height;
  const isWide = aspectRatio > 1.1;
  const colSpan = isWide ? 2 : 1;
  const displayWidth = BASE_COL_WIDTH * colSpan;
  const displayHeight = displayWidth / aspectRatio;
  const rowSpan = Math.round(displayHeight / BASE_ROW_HEIGHT);

  return { colSpan, rowSpan };
}

function imageSrcset(baseUrl: string, widths: number[] = [400, 800, 1200]) {
  return widths.map((w) => `${baseUrl}?tr=w-${w} ${w}w`).join(', ');
}

function getGridStyle(item: GalleryItem) {
  const { colSpan, rowSpan } = getSpans(item);

  return {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
  };
}
</script>

<template>
  <div>
    <div class="gallery">
      <div
        v-for="(item, index) in galleryItems"
        :key="index"
        class="gallery-item overflow-hidden rounded-lg"
        :style="getGridStyle(item)"
      >
        <img
          :src="item.src"
          :srcset="imageSrcset(item.src)"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          :width="item.width"
          :height="item.height"
          :alt="item.alt"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
  gap: 10px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
