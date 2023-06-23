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
        <LazySection title="Projects">
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
const config = useRuntimeConfig();

if (config.public.isDev) {
  useHead({
    script: [
      {
        src: 'https://umami.pscl.dev/script.js',
        'data-website-id': '0950d178-7753-435c-984b-942f611a0b5d'
      }
    ]
  });
}
</script>
