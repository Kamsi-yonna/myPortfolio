<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <!-- APPNAVBAR START -->
  <div
    ref="headerRef"
    class="fixed top-0 w-full z-50"
    :style="styles">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <ul
        class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5">
        <li
          v-for="item in items"
          :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }">
            <ULink
              active-class="text-primary-600 dark:text-primary-400"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              :to="item.path">
              <Icon
                aria-hidden="true"
                class="w-5 h-5 z-10"
                :name="item.icon" />
              <span
                v-if="$route.path === item.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"></span>
              <span
                v-if="$route.path === item.path"
                class="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1"></li>
        <li>
          <!-- APPTHEME TOGGLE START -->
          <UTooltip
            text="Toggle theme"
            :ui="{ popper: { strategy: 'absolute' } }">
            <button
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              @click="isDark = !isDark">
              <Icon
                aria-hidden="true"
                class="w-5 h-5"
                :name="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'" />
              <span class="sr-only">Toggle theme</span>
            </button>
          </UTooltip>
          <!-- APPTHEME TOGGLE END -->
          >
        </li>
      </ul>
    </nav>
  </div>
  <!-- APPNAVBAR START -->
</template>

<script setup lang="ts">
import { useFixedHeader } from 'vue-use-fixed-header'

// APP THEME
// const colorMode = useColorMode()
import { useColorMode } from '@vueuse/core'

const metaDef = useDefault('meta')
useSeoMeta({ ...metaDef })
const headerRef = ref(null)
const { styles } = useFixedHeader(headerRef)

const items = [
  { name: 'Home', path: '/', icon: 'solar:home-smile-outline' },
  {
    name: 'Projects',
    path: '/projects',
    icon: 'solar:folder-with-files-outline'
  },
  {
    name: 'Articles',
    path: '/articles',
    icon: 'solar:document-add-outline'
  },
  { name: 'Lab', path: '/lab', icon: 'heroicons:beaker' },
  {
    name: "What's in my bag?",
    path: '/whats-in-my-bag',
    icon: 'solar:backpack-outline'
  },
  {
    name: 'Bookmarks',
    path: '/bookmarks',
    icon: 'solar:bookmark-linear'
  }
]

const mode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
