<template>
  <div class="columns is-flex is-justify-content-center is-align-items-center">
    <div class="column is-3 text">{{ text }}</div>
    <slot class="column is-9"></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style scoped>
.text {
  letter-spacing: -10px;
  font-size: 325px;
  font-family: 'TitleFont';
}
</style>