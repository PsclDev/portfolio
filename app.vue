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
