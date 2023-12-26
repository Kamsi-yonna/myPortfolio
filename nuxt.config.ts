// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,

  ssr: false,

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  css: ['~/assets/css/tailwind/main.css'],
  devServer: {
    port: 5000
  },
  modules: [
    [
      '@nuxtjs/eslint-module',
      {
        failOnError: true,
        lintOnStart: true
      }
    ],
    ['@nuxtjs/tailwindcss', {}],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Karla: {
            wght: [300, 400, 500, 700, 800],
            ital: [300, 400, 500, 700, 800]
          }
        },
        display: 'swap',
        download: true
      }
    ],
    '@nuxt/image',
    '@vueuse/core'
  ],
  components: [],
  plugins: [],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind/index.css',
    configPath: 'tailwind.config',
    injectPosition: 'first',
    viewer: false
  }
})
