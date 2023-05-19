<template>
  <div>
    <p class="mb-5 text-xl">
      Some of my most used Langauges, Frameworks and Tools
    </p>
    <div class="flex w-full flex-col justify-evenly gap-5 lg:flex-row">
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-3xl">Languages</h3>
        <div class="flex gap-4">
          <img
            v-for="img in languages"
            :key="img"
            :src="img"
            class="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14"
          />
        </div>
      </div>
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-3xl">Frameworks</h3>
        <div class="flex gap-4">
          <img
            v-for="img in frameworks"
            :key="img"
            :src="img"
            class="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14"
          />
        </div>
      </div>
      <div class="flex flex-col items-center gap-4">
        <h3 class="text-3xl">Tools</h3>
        <div class="flex gap-4">
          <img
            v-for="img in tools"
            :key="img"
            :src="img"
            class="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import angularLogo from '~/assets/images/skills/angular.svg';
import csharpLogo from '~/assets/images/skills/csharp.svg';
import dockerLogo from '~/assets/images/skills/docker.svg';
import dotnet from '~/assets/images/skills/dotnet.svg';
import goLogo from '~/assets/images/skills/go.svg';
import kubernetesLogo from '~/assets/images/skills/kubernetes.svg';
import nestjsLogo from '~/assets/images/skills/nestjs.svg';
import nuxtLogo from '~/assets/images/skills/nuxtjs.svg';
import postgresLogo from '~/assets/images/skills/postgres.svg';
import svelteLogo from '~/assets/images/skills/svelte.svg';
import tailwindLogo from '~/assets/images/skills/tailwind.svg';
import tsLogo from '~/assets/images/skills/ts.svg';

const languages = ref([csharpLogo, tsLogo, goLogo]);
const frameworks = ref([
  dotnet,
  nuxtLogo,
  svelteLogo,
  angularLogo,
  nestjsLogo,
  tailwindLogo
]);
const tools = ref([postgresLogo, dockerLogo, kubernetesLogo]);
</script>
