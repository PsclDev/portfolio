<template>
  <div class="w-full h-full min-h-full">
    <NuxtLayout>
      <main class="w-full h-full min-h-full flex flex-col gap-32">
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
