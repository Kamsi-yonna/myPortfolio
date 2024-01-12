<template>
  <div
    v-for="(project, id) in displayedProjects"
    :key="id">
    <NuxtLink
      class="flex items-end gap-4 group p-2 -m-2 mt-8 rounded-lg"
      external
      target="_blank"
      :to="project.url">
      <div class="max-w-sm">
        <h3 class="text-sm">{{ project.name }}</h3>
        <p class="text-gray-400 text-sm">{{ project.description }}</p>
      </div>

      <div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"></div>
      <UAvatar
        :alt="project.name"
        size="md"
        :src="project.thumbnail"
        :ui="{ rounded: 'rounded z-10 relative' }" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Projects {
  name: string
  description: string
  thumbnail: string
  status: string
  url: string
}

const props = defineProps<{
  projectsToShow: number
}>()

const displayedProjects = computed(() => {
  return projects.value.slice(0, props.projectsToShow)
})

const projects = ref<Projects[]>([
  {
    name: 'Guess King',
    url: 'https://guessking.netlify.app/',
    description: "I'm thinking of a number between 1 and 20.Can you guess the number?",
    thumbnail: '/projects/pig.png',
    status: 'Active'
  },
  {
    name: 'Numbre',
    url: 'https://guessking.netlify.app/',
    description: 'The goal is to reach a winning score by rolling the dice.',
    thumbnail: '/projects/game_die.png',
    status: 'Active'
  },
  {
    name: 'Gitfinder',
    url: 'https://findmyhub.netlify.app/',
    description: "Leveraging github's API, search a username and see their repositories, followers and following.",
    thumbnail: '/projects/gitfinder.png',
    status: 'Active'
  },
  {
    name: 'Flicker',
    url: 'https://flickrqwe.netlify.app/',
    description: 'A simple CSS project.',
    thumbnail: '/projects/high_brightness.png',
    status: 'Active'
  }
])
</script>
