<template>
  <div class="h-full min-h-full">
    <Header />
    <div class="p-12 h-full min-h-full">
      <slot />
    </div>
    <Background class="-z-10" />
  </div>
</template>
