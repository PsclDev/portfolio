<template>
  <div class="fixed bottom-0 w-full">
    <!-- used because of hydration issues with the useColorMode composable -->
    <ClientOnly>
      <img
        :src="colorMode.value === 'light' ? backgroundWhite : backgroundPurple"
        class="m-auto w-full opacity-20"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import backgroundPurple from '~/assets/images/background-purple.svg';
import backgroundWhite from '~/assets/images/background-white.svg';

const colorMode = useColorMode();
</script>
