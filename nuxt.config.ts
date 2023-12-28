// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,

  ssr: false,

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      htmlAttrs: {
        lang: 'en',
        class: 'h-full'
      },
      bodyAttrs: {
        class: 'antialiased bg-gray-50 dark:bg-black min-h-screen '
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
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Audiowide: {
            wght: [300, 400, 500, 700, 800]
          }
        },
        display: 'swap',
        download: true
      }
    ],
    '@nuxt/image',
    'nuxt-icon',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/content'
  ],
  ui: {
    icons: ['heroicons', 'lucide']
  },
  components: [],
  plugins: [],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind/index.css',
    configPath: 'tailwind.config',
    injectPosition: 'first',
    viewer: false
  }
})
