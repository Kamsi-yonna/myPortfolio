<template>
  <div
    ref="headerRef"
    class="animate-pulse fixed top-0 w-full z-50"
    :style="styles">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <ul class="navbar">
        <li
          v-for="item in items"
          :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute', arrow: 'true' } }">
            <ULink
              active-class="text-primary dark:text-primary-400"
              class="navbar-ul"
              :to="item.path">
              <Icon
                aria-hidden="true"
                class="w-5 h-5 z-10"
                :name="item.icon" />
              <span
                v-if="$route.path === item.path"
                class="active-link"></span>
              <span
                v-if="$route.path === item.path"
                class="active-link-circle"></span>
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1"></li>
        <li>
          <UTooltip
            text="Toggle theme"
            :ui="{ popper: { strategy: 'absolute', arrow: 'true' } }">
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
        </li>
      </ul>
    </nav>
  </div>
  <div class="h-32"></div>
  <Slot />
  <div class="h-32"></div>
  <footer class="text-[12px] max-w-2xl mx-auto text-gray-700 dark:text-gray-50 text-center pb-8">
    <br />
    <p>© Etiobi Kamsiyonna {{ currentYear }}. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import { useFixedHeader } from 'vue-use-fixed-header'
import { useColorMode } from '@vueuse/core'

const headerRef = ref(null)
const { styles } = useFixedHeader(headerRef)

const items = [
  { name: 'Home', path: '/', icon: 'solar:home-smile-outline' },
  { name: 'Projects', path: '/Projects', icon: 'solar:folder-with-files-outline' },
  { name: 'Articles', path: '/Articles', icon: 'solar:document-add-outline' },
  { name: 'Lab', path: '/lab', icon: 'heroicons:beaker' },
  { name: "What's in my bag?", path: '/red', icon: 'solar:backpack-outline' },
  { name: 'Bookmarks', path: '/Bookmarks', icon: 'solar:bookmark-linear' }
]

const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
const currentYear = new Date().getFullYear()
</script>
