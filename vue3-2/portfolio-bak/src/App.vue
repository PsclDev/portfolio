<template>
  <div class='wrapper is-flex is-justify-content-center is-align-items-center' :class='mode'>
    <the-header :mode='mode' @toggle='toggle' />
    <start />
  </div>
</template>

<script>
import TheHeader from './components/Layout/TheHeader';
import Start from './components/Start';

export default {
  components: {
    TheHeader,
    Start
  },
  data() {
    return {
      mode: 'dark'
    };
  },
  methods: {
    toggle() {
      if (this.mode === 'dark')
        this.mode = 'light';
      else
        this.mode = 'dark';
    }
  }
};
</script>


<style lang='scss'>
@import '@/assets/styles/variables.scss';

.wrapper {
  height: 100%;
  width: 100%;

  &.dark {
    background-color: $purple;
    color: $white;
  }

  &.light {
    background-color: $white;
    color: $purple;
  }
}

</style>