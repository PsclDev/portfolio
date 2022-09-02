<template>
  <base-section text="who">
    <div
      class="
        container
        is-flex is-flex-direction-column is-align-items-flex-start
      "
    >
      <div class="is-size-2 has-text-weight-bold">Pascal Johann</div>
      <div class="is-size-4 has-text-weight-semibold">
        {{ age }}yrs | Full-Stack Developer
      </div>
      <div class="is-size-5 mt-4 has-text-left">
        With the beginning of my apprenticeship I learned the development and
        since then I programmed mainly backend applications, in some cases also
        a suitable frontend. Started with C# and Powerscript/PowerBuilder for
        professional reasons and now with typescript in nodejs and vuejs I have
        enriched my knowledge in many areas of development. Through many small
        solo and sometimes team projects I could work on many different tasks
        and solve them.
      </div>
      <div class="mt-5">
        <a href="mailto:me@pscl.dev"
          ><font-awesome-icon icon="at" class="icon mr-3"
        /></a>
        <a
          href="https://de.linkedin.com/in/pascal-johann-046278203"
          target="_blank"
          ><font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon mx-3"
        /></a>
        <a href="https://github.com/PsclDev/" target="_blank"
          ><font-awesome-icon :icon="['fab', 'github']" class="icon mx-3"
        /></a>
        <a href="https://twitter.com/pscldev" target="_blank"
          ><font-awesome-icon :icon="['fab', 'twitter']" class="icon mx-3"
        /></a>
      </div>
    </div>
  </base-section>
</template>

<script>
import moment from 'moment';

export default {
  computed: {
    age() {
      const birthday = moment([2000, 10, 25]);
      const now = moment();
      return now.diff(birthday, 'year');
    }
  }
};
</script>

<style scoped>
.icon {
  width: 45px;
  height: 45px;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>