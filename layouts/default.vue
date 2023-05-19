<template>
  <div class="h-full min-h-full">
    <Header />
    <div class="h-full min-h-full p-12">
      <slot />
    </div>
    <Background class="-z-10" />
  </div>
</template>
