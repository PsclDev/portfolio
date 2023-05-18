<template>
  <div
    class="group flex justify-center items-center select-none relative w-[500px] h-24 lg:h-36 bg-concrete-50 dark:bg-christalle-800 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] mb-3 p-2 rounded-xl"
    tabindex="0"
  >
    <p
      class="z-[99] absolute text-black opacity-0 text-xs cursor-pointer tracking-[1px] transition-[0.2s] duration-[ease] right-4 bottom-4 group-hover:opacity-100 group-focus:opacity-100"
    >
      <NuxtLink :to="project.repo_url" target="_blank">
        Click to open the repo
      </NuxtLink>
    </p>

    <h2
      class="z-50 text-center w-4/5 font-bold transition-[0.2s] duration-[ease] group-hover:blur-sm group-hover:opacity-50 group-focus:blur-sm group-focus:opacity-50"
      :class="
        project.title.length > 12
          ? 'text-[25px] md:text-[30px]'
          : 'text-[35px] md:text-[40px]'
      "
    >
      {{ project.title }}
    </h2>
    <p
      class="z-50 absolute w-11/12 text-black opacity-0 text-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-[0.2s] duration-[ease] group-hover:opacity-100 group-focus:opacity-100"
    >
      {{ project.introduction }}
    </p>
    <div
      class="absolute right-4 flex flex-col py-4 h-full items-center justify-between"
    >
      <span
        class="md:hidden z-50 [writing-mode:vertical-lr] text-xs tracking-[1px] transition-[0.2s] duration-[ease] opacity-70 group-hover:opacity-0 group-focus:opacity-0"
        >{{ project.shortenedLanguage }}</span
      >
      <span
        class="hidden md:block z-50 [writing-mode:vertical-lr] text-xs tracking-[1px] transition-[0.2s] duration-[ease] opacity-70 group-hover:opacity-0 group-focus:opacity-0"
        >{{ project.language }}</span
      >
      <button
        class="w-5 h-5 md:w-7 md:h-7 cursor-pointer opacity-100 transition-[0.3s] duration-[ease] rounded-xl border-[none] outline-none group-hover:opacity-[.65] group-hover:scale-[50] group-focus:opacity-[.65] group-focus:scale-[50]"
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
    required: true,
  },
});
</script>
