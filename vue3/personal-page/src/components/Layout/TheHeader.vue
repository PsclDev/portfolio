<template>
  <header>
    <div class="right">
      <font-awesome-icon icon="moon" class="icon" />
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$store.dispatch('setMode');
      this.setTheme();
    },
    setTheme() {
      document.querySelector('body').classList.toggle('dark');
    }
  },
  created() {
    this.$store.dispatch('getMode');

    const darkMode = this.$store.getters.getMode;
    if (darkMode === 'dark') this.setTheme();
  }
};
</script>

<style scoped>
.right {
  position: absolute;
  top: 20px;
  right: 20px;
}

.icon {
  width: 40px;
  height: 40px;
}
</style>