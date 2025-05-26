import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: 'MyRocket',
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.webp' },
      ]
    }
  },
  nitro : {
    prerender: {
      routes: ['/', '/cgvu', '/webp-app'],
    }
  },
  compatibilityDate: '2025-05-22',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpPort: process.env.SMTP_PORT,
  },
  gtag: {
    id: 'G-GNPYYRH5DL'
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-gtag'
  ],

  plugins: [
    '~/plugins/vue-scrollto.js'
  ]
})