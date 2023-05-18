<template>
  <div class="flex flex-col items-start justify-center w-4/5">
    <div>
      <h1 class="text-3xl md:text-4xl">Pascal Johann</h1>
      <h2 class="text-xl md:text-2xl">
        {{ calculateAge() }}yrs Full-Stack Developer
      </h2>
      <p class="xl:w-3/4 mt-5">
        With the beginning of my apprenticeship I build a strong foundation in
        C# and Powerscript. <br />Additionally, I've dedicated my free time to
        mastering languages such as JavaScript/TypeScript, GoLang, Python, and
        Rust. <br />Currently, I thrive as a full stack developer specializing
        in the captivating domain of Industrial Internet of Things (IIOT).
        <br />In my private projects I love the Tech-Stack of Nuxt, TailwindCSS,
        NestJs with Prisma and Postgres.
      </p>
      <div class="mt-5 flex gap-10">
        <NuxtLink to="mailto:me@pscl.dev”">
          <Icon size="36" name="fa:envelope" />
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/pascal-johann-046278203"
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
</script>
