<template>
  <main class="min-h-screen">
    <div class="mb-6">
      <h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Projects</h1>
      <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>
      <ProjectCard :projectsToShow="4" />
    </div>
  </main>
</template>

<script setup lang="ts">
const description =
  'Discover my projects – a showcase of realistic and accomplished endeavors. Explore a curated collection of works that reflect my expertise and pride in various tech projects developed over the years.'

useSeoMeta({
  title: 'Projects | Kamsiyonna',
  description
})
</script>
