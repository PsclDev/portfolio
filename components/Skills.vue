<template>
  <div>
    <p class="text-xl text-center mb-5">
      Some of my most used Langauges, Frameworks and Tools
    </p>
    <div class="flex justify-evenly gap-5 w-full">
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-3xl">Languages</h3>
        <div class="flex gap-4">
          <img :src="csharpLogo" class="w-14 h-14" />
          <img :src="tsLogo" class="w-14 h-14" />
          <img :src="goLogo" class="w-14 h-14" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-3xl">Frameworks</h3>
        <div class="flex gap-4">
          <img :src="vueLogo" class="w-14 h-14" />
          <img :src="nuxtLogo" class="w-14 h-14" />
          <img :src="angularLogo" class="w-14 h-14" />
          <img :src="svelteLogo" class="w-14 h-14" />
          <img :src="nestjsLogo" class="w-14 h-14" />
          <img :src="tailwindLogo" class="w-14 h-14" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-3xl">Tools</h3>
        <div class="flex gap-4">
          <img :src="postgresLogo" class="w-14 h-14" />
          <img :src="dockerLogo" class="w-14 h-14" />
          <img :src="kubernetesLogo" class="w-14 h-14" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import csharpLogo from '~/assets/images/skills/csharp.svg';
import tsLogo from '~/assets/images/skills/ts.svg';
import goLogo from '~/assets/images/skills/go.svg';
import vueLogo from '~/assets/images/skills/vuejs.svg';
import nuxtLogo from '~/assets/images/skills/nuxtjs.svg';
import svelteLogo from '~/assets/images/skills/svelte.svg';
import angularLogo from '~/assets/images/skills/angular.svg';
import nestjsLogo from '~/assets/images/skills/nestjs.svg';
import tailwindLogo from '~/assets/images/skills/tailwind.svg';
import postgresLogo from '~/assets/images/skills/postgres.svg';
import dockerLogo from '~/assets/images/skills/docker.svg';
import kubernetesLogo from '~/assets/images/skills/kubernetes.svg';

function calculateAge() {
  const difference = new Date().getTime() - new Date(2000, 9, 25).getTime();
  return Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
}

const age = ref(calculateAge());
</script>
