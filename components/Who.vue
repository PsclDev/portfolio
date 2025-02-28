<template>
  <div class="flex w-4/5 flex-col items-start justify-center">
    <div>
      <h1
        class="text-3xl transition-all duration-500 hover:translate-x-2 dark:text-white md:text-4xl"
      >
        Pascal Johann
      </h1>
      <h2 class="text-xl transition-all duration-500 md:text-2xl">
        {{ useGetAge() }}yrs Full-Stack Developer
      </h2>
      <div class="mt-5 xl:w-3/4">
        <p class="mb-6">
          I'm an IT Specialist in Application Development , specializing in C#
          and TypeScript. I build scalable full-stack applications with .NET,
          Vue, Angular, and NestJS, leveraging Azure, CI/CD, and Terraform for
          cloud automation.
        </p>

        <p class="mb-4">My expertise includes:</p>
        <ul class="mb-6 flex flex-col gap-2">
          <li
            v-for="(item, index) in expertiseItems"
            :key="index"
            class="flex items-start gap-2 transition-all duration-300 hover:translate-x-2 dark:text-gray-300"
          >
            <Icon
              size="24"
              name="nrk:bullet-square"
              class="mt-1 h-6 w-6 shrink-0 text-amber-600 dark:text-yellow-300"
            />
            <span>
              <strong class="text-amber-600 dark:text-yellow-300">{{
                item.title
              }}</strong>
              -
              {{ item.description }}
            </span>
          </li>
        </ul>

        <p class="mb-6">
          In my free time, I enjoy working on personal projects, exploring new
          technologies, and testing innovative ideas in development. When I’m
          not coding, I spend time outdoors hiking, mountain biking, or
          exploring nature with my dog.
        </p>

        <p class="mb-6">
          You can
          <strong class="text-amber-600 dark:text-yellow-300">find more</strong>
          about me
          <strong class="text-amber-600 dark:text-yellow-300"
            >on LinkedIn</strong
          >
        </p>
      </div>
      <div class="mt-5 flex gap-10">
        <NuxtLink
          to="mailto:me@pscl.dev"
          data-umami-event="social-mailto"
          class="transition-transform duration-300 hover:scale-110 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400"
        >
          <Icon size="36" name="fa:envelope" />
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/pascal-johann-046278203"
          target="_blank"
          data-umami-event="social-linkedin"
          class="transition-transform duration-300 hover:scale-110 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        >
          <Icon size="36" name="fa:linkedin" />
        </NuxtLink>
        <NuxtLink
          to="https://github.com/pscldev"
          target="_blank"
          data-umami-event="social-github"
          class="transition-transform duration-300 hover:scale-110 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          <Icon size="36" name="fa:github" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const expertiseItems = [
  {
    title: 'Software Architecture',
    description: 'Designing scalable, maintainable solutions.'
  },
  {
    title: 'AI Development',
    description: 'Building RAG-based AI chat systems.'
  },
  {
    title: 'Industrial IoT',
    description: 'Integrating software with hardware for automation.'
  },
  {
    title: 'Technical Leadership',
    description:
      'Guiding teams, defining project goals, and collaborating with customers & partners.'
  }
];
</script>
