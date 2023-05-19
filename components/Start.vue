<template>
  <div class="flex h-full min-h-full select-none items-center justify-center">
    <div class="absolute">
      <!-- used because of hydration issues with the useColorMode composable -->
      <ClientOnly>
        <img
          :src="logoBlack"
          class="m-auto w-1/2 xl:w-4/12"
          :class="colorMode.value === 'light' ? 'opacity-[.03]' : 'opacity-20'"
        />
      </ClientOnly>
    </div>
    <!-- w-full text-center is used because of cropped font on safari engine -->
    <h1
      class="z-10 w-full text-center font-['Kill_The_Noise'] text-[150px] tracking-tight md:text-[360px]"
    >
      pscl
    </h1>
  </div>
</template>

<script setup lang="ts">
import logoBlack from '~/assets/images/logo-black.svg';

const colorMode = useColorMode();
</script>
