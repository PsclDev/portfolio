<template>
  <div
    class="group relative mb-3 flex h-24 w-[500px] select-none items-center justify-center overflow-hidden rounded-xl bg-concrete-50 p-2 shadow-[0_0_15px_rgba(0,0,0,0.3)] dark:bg-christalle-800 lg:h-36"
    tabindex="0"
  >
    <p
      class="absolute bottom-4 right-4 z-[99] cursor-pointer text-xs tracking-[1px] text-black opacity-0 transition-[0.2s] duration-[ease] group-hover:opacity-100 group-focus:opacity-100"
    >
      <NuxtLink :to="project.repo_url" target="_blank">
        Click to open the repo
      </NuxtLink>
    </p>

    <h2
      class="z-50 w-4/5 text-center font-bold transition-[0.2s] duration-[ease] group-hover:opacity-50 group-hover:blur-sm group-focus:opacity-50 group-focus:blur-sm"
      :class="
        project.title.length > 12
          ? 'text-[25px] md:text-[30px]'
          : 'text-[35px] md:text-[40px]'
      "
    >
      {{ project.title }}
    </h2>
    <p
      class="absolute left-1/2 top-1/2 z-50 w-11/12 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 transition-[0.2s] duration-[ease] group-hover:opacity-100 group-focus:opacity-100"
    >
      {{ project.introduction }}
    </p>
    <div
      class="absolute right-4 flex h-full flex-col items-center justify-between py-4"
    >
      <span
        class="z-50 text-xs tracking-[1px] opacity-70 transition-[0.2s] duration-[ease] [writing-mode:vertical-lr] group-hover:opacity-0 group-focus:opacity-0 md:hidden"
        >{{ project.shortenedLanguage }}</span
      >
      <span
        class="z-50 hidden text-xs tracking-[1px] opacity-70 transition-[0.2s] duration-[ease] [writing-mode:vertical-lr] group-hover:opacity-0 group-focus:opacity-0 md:block"
        >{{ project.language }}</span
      >
      <button
        class="h-5 w-5 cursor-pointer rounded-xl border-[none] opacity-100 outline-none transition-[0.3s] duration-[ease] group-hover:scale-[50] group-hover:opacity-[.65] group-focus:scale-[50] group-focus:opacity-[.65] md:h-7 md:w-7"
        :style="{ backgroundColor: `${project.color}` }"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from '~/types/project';

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  }
});
</script>
