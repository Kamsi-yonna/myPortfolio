<template>
  <NuxtLink
    class="group flex items-center justify-between"
    target="_blank"
    :to="article.url">
    <article>
      <div class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5">
        <span
          aria-hidden="true"
          class="absolute inset-y-0 left-0 flex items-center">
          <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
        </span>
        {{ article.datePublished }}
      </div>
      <h2
        class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600">
        {{ article.name }}
      </h2>
      <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
        {{ article.description }}
      </p>
    </article>
    <NuxtImg
      alt="Kamsiyonna Etiobi"
      class="hover:ring-4 transition-all duration-300 rounded-sm h-12 w-12 sm:h-12 sm:w-12 object-cover"
      format="webp"
      placeholder
      sizes="48px sm:64px"
      src="/images/Notion_app_logo.png" />
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
