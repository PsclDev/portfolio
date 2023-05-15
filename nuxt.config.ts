import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  app: {
    head: {
      title: 'PsclDev - Developer',
    },
  },
  css: ['~/fonts/css/kill-the-noise.css', '~/assets/styles/main.css'],
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    download: true,
    base64: true,
    outputDir: 'fonts',
    families: {
      Poppins: true,
    },
  },
  vite: {
    plugins: [vsharp()],
  },
});
