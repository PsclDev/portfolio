<template>
  <div class="flex flex-wrap items-center justify-center w-full gap-5">
    <Card v-for="project in projects" :key="project.title" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { Project } from '~/types/project';

var projects = ref<Project[]>([
  {
    title: 'Automate-SSL-Certificates',
    introduction:
      'Can be used to generate SSL certificates quickly, ideal for a local network setup',
    repo_url: 'https://github.com/FrostyLabs/Automate-SSL-Certificates',
    language: 'Shell',
    color: '#89e051',
  },
  {
    title: 'Lisense',
    introduction:
      'A simple but working CLI tool to extract NPM package licenses reliably',
    repo_url: 'https://github.com/maxstrauch/lisense',
    language: 'JavaScript',
    color: '#f1e05a',
  },
  {
    title: 'wubbl0rz VOD Archiv',
    introduction: 'Twitch archive svelte frontend, go backend',
    repo_url: 'https://github.com/AgileProggers/archiv-backend',
    language: 'Svelte',
    color: '#ff3e00',
  },
]);
</script>
