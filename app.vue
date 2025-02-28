<template>
  <div class="h-full min-h-full w-full">
    <NuxtLayout>
      <main class="flex h-full min-h-full w-full flex-col gap-32">
        <Start />
        <Section title="Who">
          <Who />
        </Section>
        <LazySection title="Skills">
          <Skills />
        </LazySection>
        <LazySection title="My Projects">
          <Projects />
        </LazySection>
        <LazySection title="Contributions">
          <Contributions />
        </LazySection>
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const metaDescription = `Hey there! I am a Pascal a ${useGetAge()}yrs, full-stack developer from Germany. I love to create awesome apps using nuxt and nest but also like to play around with other technologies.`;

useHead({
  script: [
    {
      src: 'https://umami.pscl.dev/script.js',
      'data-website-id': '0950d178-7753-435c-984b-942f611a0b5d',
      'data-domains': 'pscl.dev'
    }
  ],
  meta: [
    {
      name: 'description',
      content: metaDescription
    },
    {
      key: 'og-desc',
      property: 'og:description',
      content: metaDescription
    }
  ]
});
</script>
