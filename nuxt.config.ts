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
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '~/public/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '~/public/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '~/public/favicon-16x16.png',
        },
        { rel: 'manifest', href: '~/public/site.webmanifest' },
        { rel: 'mask-icon', href: '~/public/safari-pinned-tab.svg' },
      ],
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
