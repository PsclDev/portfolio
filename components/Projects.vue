<template>
  <div class="flex flex-wrap items-center justify-center w-full gap-5">
    <Card v-for="project in projects" :key="project.title" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { Project } from '~/types/project';

var projects = ref<Project[]>([
  {
    title: 'My Portfolio',
    introduction:
      'This portfolio is written in Nuxt 3 and TailwindCSS with the use of some cool nuxt modules',
    repo_url: 'https://github.com/PsclDev/portfolio',
    language: 'Nuxt 3',
    color: '#00DC82',
  },
  {
    title: 'Job Application',
    introduction:
      'Job Application is a small fun project where you as a applicant can add your applications to get a nice overview for each application',
    repo_url: 'https://github.com/PsclDev/job-application-frontend',
    language: 'Vue 3',
    color: '#41b883',
  },
  {
    title: 'Invoice App',
    introduction:
      'Create offers and invoices and manage clients for your small business. Generates a pdf which can be then send by mail or email. Including some statistics',
    repo_url: 'https://github.com/PsclDev/invoice-app',
    language: 'Nuxt 2',
    color: '#00DC82',
  },
  {
    title: 'Shortcut Helper',
    introduction:
      'Small and neat tool to get away from your mouse and enforcing more keyboard shortcuts',
    repo_url: 'https://github.com/PsclDev/shortcut-helper',
    language: 'C# + Vue',
    color: '#178600',
  },
  {
    title: 'Repo Rename',
    introduction:
      'simple and easy to use CLI tool to rename your repository into a new case style',
    repo_url: 'https://github.com/PsclDev/repo-rename',
    language: 'JavaScript',
    color: '#f1e05a',
  },
  {
    title: 'URL Shortener',
    introduction:
      'url-shortener based on a svelte frontend, nestjs backend and postgres database',
    repo_url: 'https://github.com/PsclDev/url-shortener-frontend',
    language: 'Svelte',
    color: '#ff3e00',
  },
  {
    title: 'ACC Server Configurator',
    introduction:
      'view race results, manage entrylist and server settings for your assetto corsa competizione serve',
    repo_url: 'https://github.com/PsclDev/acc-server-configurator-frontend',
    language: 'Vue 3',
    color: '#41b883',
  },
  {
    title: 'Automate SSL Certificates API',
    introduction: 'API wrapper around the Automate SSL Certificates script',
    repo_url: 'https://github.com/PsclDev/automate-ssl-certificates-api',
    language: 'Go',
    color: '#00ADD8',
  },
]);
</script>
