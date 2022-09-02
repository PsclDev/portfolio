<template>
  <div class="noselect">
    <div class="logo">
      <img
        draggable="false"
        class="logo-img filter-green"
        src="../assets/images/start/logo.svg"
      />
    </div>
    <div class="is-flex is-justify-content-center is-align-items-center">
      <h1 class="name">pscl</h1>
    </div>
  </div>
</template>

<style scoped lang='scss'>
@import '../assets/styles/variables.scss';

div {
  height: 100%;

  &.logo {
    position: absolute;
    opacity: 3%;
    top: 50%;
    left: 50%;
    width: 1000px;
    height: 1000px;
    margin-top: -500px; /* Half the height */
    margin-left: -500px; /* Half the width */
  }
}

.name {
  letter-spacing: -10px;
  font-size: 425px;
  font-family: 'TitleFont';
}

.filter-green {
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(223deg)
    brightness(107%) contrast(101%);
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
