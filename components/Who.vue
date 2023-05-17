<template>
  <div class="flex flex-col items-center justify-center w-4/5">
    <div>
      <h1 class="text-3xl md:text-4xl">Pascal Johann</h1>
      <h2 class="text-xl md:text-2xl">{{ age }}yrs Full-Stack Developer</h2>
      <p class="mt-5">
        With the beginning of my apprenticeship I learned the development and
        since then I programmed mainly backend applications, in some cases also
        a suitable frontend. Started with C# and Powerscript/PowerBuilder for
        professional reasons and now with typescript in nodejs and vuejs I have
        enriched my knowledge in many areas of development. Through many small
        solo and sometimes team projects I could work on many different tasks
        and solve them.
      </p>
      <div class="mt-5 flex gap-10">
        <NuxtLink to="mailto:me@pscl.dev”">
          <Icon size="36" name="fa:envelope" />
        </NuxtLink>
        <NuxtLink
          to="https://de.linkedin.com/in/pascal-johann-046278203"
          target="_blank"
        >
          <Icon size="36" name="fa:linkedin" />
        </NuxtLink>
        <NuxtLink to="https://github.com/pscldev" target="_blank">
          <Icon size="36" name="fa:github" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function calculateAge() {
  const difference = new Date().getTime() - new Date(2000, 9, 25).getTime();
  return Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
}

const age = ref(calculateAge());
</script>
