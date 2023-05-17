<template>
  <div class="flex items-center justify-center select-none h-full min-h-full">
    <div class="absolute">
      <!-- used because of hydration issues with the useColorMode composable -->
      <ClientOnly>
        <img
          :src="logoBlack"
          class="w-1/2 xl:w-4/12 m-auto"
          :class="colorMode.value === 'light' ? 'opacity-[.03]' : 'opacity-20'"
        />
      </ClientOnly>
    </div>
    <!-- w-full text-center is used because of cropped font on safari engine -->
    <h1
      class="z-10 w-full text-center text-[150px] md:text-[360px] tracking-tight font-['Kill_The_Noise']"
    >
      pscl
    </h1>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

import logoBlack from '~/assets/images/logo-black.svg';
</script>
