<script lang="ts" setup>
import { EXPERIENCES } from '~/assets/constants/experiences';
</script>

<template>
  <div>
    <div>
      <ExperienceCard v-for="(ex, i) in EXPERIENCES" :key="ex.id" :experience="ex" />
    </div>
  </div>
</template>
