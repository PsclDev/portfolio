<template>
  <section class="flex flex-col gap-5 select-none">
    <h1 class="text-5xl md:text-7xl">{{ title }}</h1>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
