<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-900 dark:text-gray-400 mb-4 sm:mb-2">FIND ME ON</h2>
    <div class="space-y-5 sm:flex gap-4 text-gray-900 dark:text-gray-400">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        class="flex items-end gap-2 hover:text-gray-300 dark:hover:text-gray-100"
        external
        target="_blank"
        :to="link.url">
        <span class="text-sm">
          {{ link.name }}
        </span>
        <Icon
          class="w-6 h-6"
          :name="link.icon"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/kamsi_yonna',
    icon: 'mdi:twitter'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kamsi-yonna',
    icon: 'mdi:github'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kamsi.yonna/',
    icon: 'mdi:instagram'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/1kamsiyonna/',
    icon: 'mdi:linkedin'
  }
]
</script>
