<template>
  <NuxtLink
    class="group"
    :to="article._path">
    <article>
      <div
        class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
        datetime="2022-09-05">
        <span class="absolute inset-y-0 left-0 flex items-center">
          <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
        </span>
        {{ useReadableDate(article.published) }}
      </div>
      <h2
        class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600">
        {{ article.title }}
      </h2>
      <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
        {{ article.description }}
      </p>
      <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
        {{ article.author }}
      </p>
    </article>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>
