<template>
  <div>
    <div>Logo</div>
    <div
      @click="
        $colorMode.preference =
          $colorMode.preference === 'light' ? 'dark' : 'light'
      "
    >
      Theme Toggle
    </div>
  </div>
</template>