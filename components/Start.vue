<template>
  <div class="flex items-center justify-center select-none h-full min-h-full">
    <div class="absolute">
      <!-- used because of hydration issues with the useColorMode composable -->
      <ClientOnly>
        <img
          :src="logoBlack"
          class="w-1/2 m-auto"
          :class="colorMode.value === 'light' ? 'opacity-[.03]' : 'opacity-20'"
        />
      </ClientOnly>
    </div>
    <h1 class="z-10 text-[360px] tracking-tight font-['Kill_The_Noise']">
      pscl
    </h1>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

import logoBlack from '~/assets/images/logo-black.svg';
</script>
