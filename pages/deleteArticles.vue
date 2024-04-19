<template>
  <main class="min-h-screen">
    <div class="mb-6">
      <h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Articles</h1>
      <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
const description =
  'Explore a diverse collection of insightful articles pertaining to my career insights, programming expertise, and life as I percive it.'

useSeoMeta({
  title: 'Articles | Kamsiyonna',
  description
})
</script>
