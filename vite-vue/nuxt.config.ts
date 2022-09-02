import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    css: [
        '~/assets/scss/main.scss'
    ],
    "buildModules": [
        "@nuxtjs/color-mode",
    ]
})
