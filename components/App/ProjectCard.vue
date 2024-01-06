<template>
  <NuxtLink
    class="flex items-end gap-4 group p-2 -m-2 rounded-lg"
    external
    target="_blank"
    :to="project.url">
    <div class="max-w-sm">
      <h3 class="text-sm">{{ props.project.name }}</h3>
      <p class="text-gray-400 text-sm">{{ props.project.description }}</p>
    </div>

    <div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"></div>
    <UAvatar
      :alt="props.project.name"
      size="md"
      :src="props.project.thumbnail"
      :ui="{ rounded: 'rounded z-10 relative' }" />
  </NuxtLink>
</template>

<script setup lang="ts">
interface ParsedContent {
  name: string
  url: string
  description: string
  thumbnail: string
  status?: string // Add any optional properties as needed
}

const props = defineProps({
  project: {
    type: Object as () => ParsedContent,
    default: () => ({})
  }
})
</script>
