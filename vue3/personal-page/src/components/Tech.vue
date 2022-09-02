<template>
  <base-section text="tech">
    <div
      class="container is-flex is-flex-direction-column is-align-items-center"
    >
      <div class="is-flex">
        <base-tile
          v-for="tech in frontend"
          :key="tech.title"
          :title="tech.title"
          :image="tech.image"
          class="m-3"
        />
      </div>
      <div class="is-flex">
        <base-tile
          v-for="tech in backend"
          :key="tech.title"
          :title="tech.title"
          :image="tech.image"
          class="m-3"
        />
      </div>
      <div class="is-flex">
        <base-tile
          v-for="tech in tools"
          :key="tech.title"
          :title="tech.title"
          :image="tech.image"
          class="m-3"
        />
      </div>
    </div>
  </base-section>
</template>

<script>
import { frontend, backend, tools } from '../assets/data/techstack.json';

export default {
  data() {
    return {
      frontend,
      backend,
      tools
    };
  }
};
</script>