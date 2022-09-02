<template>
  <the-background class="bg" />
  <the-header />
  <home />
  <who />
  <tech />
</template>

<script>
import TheBackground from './components/Layout/TheBackground';
import TheHeader from './components/Layout/TheHeader';
import Home from './components/Home';
import Who from './components/Who';
import Tech from './components/Tech';

export default {
  components: {
    TheBackground,
    TheHeader,
    Home,
    Who,
    Tech
  }
};
</script>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 44%;
}
</style>