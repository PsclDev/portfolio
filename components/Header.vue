<template>
  <header class="fixed z-10 w-full p-5 backdrop-blur-sm">
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
declare let umami: any;

const colorMode = useColorMode();

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
  umami.track(`colorMode-to-${colorMode.preference}`);
}
</script>
