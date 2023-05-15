<template>
  <div
    class="group flex justify-center items-center select-none cursor-pointer relative w-[500px] h-36 bg-concrete-50 dark:bg-christalle-800 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] mb-3 p-2 rounded-xl"
  >
    <NuxtLink :to="project.repo_url" target="_blank">
      <p
        class="z-[99] absolute text-black opacity-0 text-xs tracking-[1px] transition-[0.2s] duration-[ease] right-4 bottom-4 group-hover:opacity-100"
      >
        Click to open Repo
      </p>

      <h2
        class="z-50 font-bold transition-[0.2s] duration-[ease] group-hover:blur-sm group-hover:opacity-50"
        :style="{
          fontSize: `${project.title.length > 15 ? '30px' : '40px'}`,
          right: `${project.title.length > 15 ? '95px' : '130px'}`,
        }"
      >
        {{ project.title }}
      </h2>
      <p
        class="z-50 absolute w-11/12 text-black opacity-0 text-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-[0.2s] duration-[ease] group-hover:opacity-100"
      >
        {{ project.introduction }}
      </p>
      <span
        class="z-50 [writing-mode:vertical-lr] absolute text-xs tracking-[1px] transition-[0.2s] duration-[ease] opacity-70 right-7 top-5 group-hover:opacity-0"
        >{{ project.language }}</span
      >
      <button
        class="absolute w-7 h-7 cursor-pointer opacity-100 transition-[0.3s] duration-[ease] rounded-xl border-[none] right-6 bottom-4 outline-none group-hover:opacity-[.65] group-hover:scale-[50]"
        :style="{ backgroundColor: `${project.color}` }"
      ></button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';
import { defineProps } from 'vue';
import { Project } from '~/types/project';

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>
