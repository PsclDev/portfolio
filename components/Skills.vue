<template>
  <div>
    <p class="mb-5 text-xl">
      Some of my favorite used Tech for personal projects
    </p>
    <div class="flex w-full flex-col justify-evenly gap-5 lg:flex-row">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="flex flex-col items-center gap-4"
      >
        <h3 class="text-3xl">{{ skill.name }}</h3>
        <div class="flex gap-4">
          <Icon
            v-for="icon in skill.items"
            :key="icon"
            :name="`devicon:${icon}`"
            class="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = ref([
  {
    name: 'Languages',
    items: ['typescript', 'csharp']
  },
  {
    name: 'Frameworks',
    items: ['nuxtjs', 'nestjs', 'dotnetcore', 'tailwindcss']
  },
  {
    name: 'Tools',
    items: ['apple', 'postgresql', 'docker', 'githubactions']
  }
]);
</script>
