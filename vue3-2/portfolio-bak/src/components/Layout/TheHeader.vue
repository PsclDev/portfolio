<template>
  <header class='is-flex is-justify-content-flex-end pr-6 pt-3'>
    <input type='image' :src='theme' @click='$emit("toggle")' height='50' />
  </header>
</template>

<script>
export default {
  props: ['mode'],
  computed: {
    theme() {
      if (this.mode === 'light')
        return require('@/assets/images/header/theme_light.png');

      return require('@/assets/images/header/theme_dark.png');
    }
  }
};
</script>

<style scoped lang='scss'>
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/helpers/_all.sass";

//header {
//  padding-top: 3rem;
//}

</style>