<template>
  <section class="flex select-none flex-col gap-5">
    <h1 class="text-5xl md:text-7xl">{{ title }}</h1>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>
