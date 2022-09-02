<template>
  <div class="tiles-card colors">
    <div class="tiles-overlay"></div>
    <div class="tiles-circle">
      <img :src="imagePath" />
    </div>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    image: {
      type: String
    }
  },
  computed: {
    imagePath() {
      return require(`../../assets/images/tech/${this.image}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.colors {
  --bg-color: #f3f3f3;
  --bg-color-light: #ebebeb;
  --text-color-hover: #4c5656;
  --box-shadow-color: rgba(51, 0, 116, 0.48);
}

.tiles-card {
  width: 135px;
  height: 165px;
  background: #ebebeb;
  border-top-right-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
  * {
    box-sizing: content-box;
  }
}

.tiles-card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--box-shadow-color);
}

.tiles-card:hover .tiles-overlay {
  transform: scale(4) translateZ(0);
}

.tiles-card:hover .tiles-circle {
  border-color: var(--bg-color-light);
  background: var(--bg-color);
}

.tiles-card:hover .tiles-circle:after {
  background: var(--bg-color-light);
}

.tiles-card:hover p {
  color: var(--text-color-hover);
}

.tiles-card p {
  font-size: 17px;
  color: #4c5656;
  margin-top: 30px;
  z-index: 1000;
  transition: color 0.3s ease-out;
}

.tiles-circle {
  width: 91px;
  height: 91px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
}

.tiles-circle:after {
  content: '';
  width: 78px;
  height: 78px;
  display: block;
  position: absolute;
  background: var(--bg-color);
  border-radius: 50%;
  top: 0.4rem;
  left: 0.4rem;
  transition: opacity 0.3s ease-out;
}

.tiles-circle img {
  height: 50px;
  z-index: 10000;
  transform: translateZ(0);
}

.tiles-overlay {
  width: 71px;
  position: absolute;
  height: 71px;
  border-radius: 50%;
  background: var(--bg-color);
  top: 15px;
  left: 30px;
  z-index: 0;
  transition: transform 0.3s ease-out;
}
</style>