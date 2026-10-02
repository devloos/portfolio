<script lang="ts" setup>
import { EXPERIENCES } from '~/assets/constants/experiences';

useSeoMeta({
  description:
    'Software engineering roles held by Carlos Aguilera and the work behind them.',
});

useSchemaOrg([defineWebPage({ '@type': 'CollectionPage' })]);
</script>

<template>
  <div>
    <div>
      <ExperienceCard v-for="(ex, i) in EXPERIENCES" :key="ex.id" :experience="ex" />
    </div>
  </div>
</template>
