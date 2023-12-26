/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default <Partial<Config>>{
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
      sans: [
        'Inter',
        'Avenir Next',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Ubuntu',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      mono: [
        'Cascadia Code',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    }
  },
  plugins: [daisyui, require('@tailwindcss/typography')],
  daisyui: {
    styled: true,
    themes: [
      {
        hello: {
          primary: '#DD1313',
          'primary-focus': '#1F1A2B',
          'primary-content': '#ffffff',
          secondary: '#302742',
          'secondary-focus': '#1A1622',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#342C52',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          blue: '#1C4ED8',
          'base-200': '#eaebee',
          'base-300': '#c9cdd5',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#42ba96',
          warning: '#FF7B53',
          error: '#d9534f'
        }
      }
    ],
    logs: false
  }
}
