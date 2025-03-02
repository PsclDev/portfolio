// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxt/icon'
  ],

  app: {
    head: {
      title: 'PsclDev - Developer',
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg' },
        { rel: 'canonical', href: 'https://pscl.dev' }
      ],
      meta: [
        {
          name: 'author',
          content: 'Pascal Johann'
        },
        {
          name: 'keywords',
          content:
            'Portfolio, Full-Stack, Fullstack, Frontend, Backend, Web, App, Apps, Pascal, Johann, PsclDev, Pscl, Dev, Developer'
        },
        {
          key: 'og-image',
          property: 'og:image',
          content: '/android-chrome-512x512.png'
        },
        {
          property: 'og:locale',
          content: 'en_US'
        },
        {
          property: 'og:locale:alternate',
          content: 'de_DE'
        },
        {
          property: 'og:site_name',
          content: "PsclDev's Portfolio"
        },
        {
          key: 'og-title',
          property: 'og:title',
          content: 'PsclDev - Developer'
        },
        {
          key: 'og-type',
          property: 'og:type',
          content: 'Website'
        },
        {
          key: 'og-url',
          property: 'og:url',
          content: 'https://pscl.dev'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'theme-color',
          content: '#603cba'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator',
          content: '@PsclDev'
        },
        {
          name: 'twitter:site',
          content: '@PsclDve'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },

  css: ['~/fonts/css/kill-the-noise.css', '~/assets/styles/main.css'],

  colorMode: {
    classSuffix: ''
  },

  googleFonts: {
    download: true,
    base64: true,
    outputDir: 'fonts',
    families: {
      Poppins: true
    }
  },

  compatibilityDate: '2025-03-02'
});
