<template>
  <main class="min-h-screen">
    <div class="mb-6">
      <h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Lab</h1>
      <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
const description =
  'Explore my Lab – a creative space for experimental UI integrations, playful API exploration, and various raw projects. These works showcase my personal exploration and passion for innovation in a casual, unpolished form.'

useSeoMeta({
  title: 'Lab | Kamsiyonna',
  description
})
</script>
