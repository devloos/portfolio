<script setup>
import SmartNav from '@/components/smart/SmartNav.vue';
import SmartFooter from '@/components/smart/SmartFooter.vue';
import MediaKit from '@/components/MediaKit.vue';
</script>

<template>
  <div>
    <MediaKit
      class="absolute -top-28 right-0 left-0 -z-40 mx-auto sm:-top-48 md:-top-96"
      src="/portfolio/rays.png"
      :width="927"
      :height="807"
      alt="rays"
    />
    <div>
      <SmartNav />
      <div class="pb-12">
        <slot />
      </div>
      <SmartFooter />
    </div>
  </div>
</template>
