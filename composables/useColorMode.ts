import { useColorMode } from '@vueuse/core'

export const mode = useColorMode({
  attribute: 'theme',
  modes: {
    dark: 'dark',
    light: 'light'
  }
})
