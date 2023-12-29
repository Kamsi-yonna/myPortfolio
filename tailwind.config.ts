import type { Config } from 'tailwindcss'
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      boxShadow: {
        zoop: 'rgba(102, 109, 128, 0.08) 0px 1.2672px 1.2672px 0px, rgba(102, 109, 128, 0.08) 0px 5.06879px 10.1376px 0px',
        zoopdark: 'rgba(10, 10, 10, 0.2) 0px 1.2672px 1.2672px 0px, rgba(10, 10, 10, 0.2) 0px 5.06879px 10.1376px 0px'
      }
    },
    fontFamily: {
      Poppins: []
    },
    keyframes: {
      pulse: {
        '0%, 100%': {
          opacity: '1'
        },
        '50%': {
          opacity: '.8'
        }
      }
    },
    animation: {
      pulse: 'pulse 1.4s ease-in-out infinite'
    }
  },
  plugins: [require('@tailwindcss/typography'), '@tailwindcss/animation']
} satisfies Config
