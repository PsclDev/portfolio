<template>
  <div class="flex w-4/5 flex-col items-start justify-center">
    <div>
      <h1 class="text-3xl md:text-4xl">Pascal Johann</h1>
      <h2 class="text-xl md:text-2xl">
        {{ useGetAge() }}yrs Full-Stack Developer
      </h2>
      <p class="mt-5 xl:w-3/4">
        With the beginning of my apprenticeship I build a strong foundation in
        C# and Powerscript. <br />Additionally, I've dedicated my free time to
        mastering languages such as JavaScript/TypeScript, GoLang, Python, and
        Rust. <br />Currently, I thrive as a full stack developer specializing
        in the captivating domain of Industrial Internet of Things (IIOT).
        <br />In my private projects I love the Tech-Stack of Nuxt, TailwindCSS,
        NestJs with Prisma and Postgres.
      </p>
      <div class="mt-5 flex gap-10">
        <NuxtLink to="mailto:me@pscl.dev”" data-umami-event="social-mailto">
          <Icon size="36" name="fa:envelope" />
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/pascal-johann-046278203"
          target="_blank"
          data-umami-event="social-linkedin"
        >
          <Icon size="36" name="fa:linkedin" />
        </NuxtLink>
        <NuxtLink
          to="https://github.com/pscldev"
          target="_blank"
          data-umami-event="social-github"
        >
          <Icon size="36" name="fa:github" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
