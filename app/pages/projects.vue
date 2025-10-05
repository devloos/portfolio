<script lang="ts" setup>
import { FEATURED_PROJECTS } from '~/assets/constants/projects';
</script>

<template>
  <div>
    <div>
      <ProjectCard
        v-for="(proj, i) in FEATURED_PROJECTS"
        :key="proj.id"
        :project="proj"
      />
    </div>
  </div>
</template>
