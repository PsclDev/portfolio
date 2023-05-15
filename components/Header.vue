<template>
  <header class="z-10 p-5 fixed w-full backdrop-blur-sm">
    <!-- used because of hydration issues with the useColorMode composable -->
    <ClientOnly>
      <div class="flex justify-between">
        <img
          loading="lazy"
          class="w-10"
          :src="colorMode.value === 'light' ? logoPurple : logoWhite"
        />
        <button @click="toggleColorMode">
          <Icon
            v-show="colorMode.value === 'dark'"
            size="42"
            name="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
          />
          <Icon
            v-show="colorMode.value === 'light'"
            size="42"
            name="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"
          />
        </button>
      </div>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
import logoPurple from '~/assets/images/logo-purple.svg';
import logoWhite from '~/assets/images/logo-white.svg';

const colorMode = useColorMode();

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
}
</script>
