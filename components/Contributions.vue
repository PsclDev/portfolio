<template>
  <div class="flex w-full flex-wrap items-center justify-center gap-5 pb-16">
    <Card v-for="project in projects" :key="project.title" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { Project } from '~/types/project';

const projects = ref<Project[]>([
  {
    title: 'Automate-SSL-Certificates',
    introduction:
      'Can be used to generate SSL certificates quickly, ideal for a local network setup',
    repo_url: 'https://github.com/FrostyLabs/Automate-SSL-Certificates',
    language: 'Shell',
    shortenedLanguage: 'Shell',
    color: '#89e051'
  },
  {
    title: 'Lisense',
    introduction:
      'A simple but working CLI tool to extract NPM package licenses reliably',
    repo_url: 'https://github.com/maxstrauch/lisense',
    language: 'JavaScript',
    shortenedLanguage: 'JS',
    color: '#f1e05a'
  },
  {
    title: 'wubbl0rz VOD Archiv',
    introduction: 'Twitch archive svelte frontend, go backend',
    repo_url: 'https://github.com/AgileProggers/archiv-backend',
    language: 'SvelteKit',
    shortenedLanguage: 'Svelte',
    color: '#ff3e00'
  }
]);
</script>
