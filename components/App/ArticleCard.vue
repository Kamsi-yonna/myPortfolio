<template>
  <ul class="space-y-8">
    <li
      v-for="(article, id) in displayedArticles"
      :key="id">
      <NuxtLink
        class="group flex items-center justify-between border-b border-gray-800"
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
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Article {
  name: string
  description: string
  datePublished: string
  url: string
}

const props = defineProps<{
  articlesToShow: number
}>()

const displayedArticles = computed(() => {
  return articles.value.slice(0, props.articlesToShow)
})

const articles = ref<Article[]>([
  {
    name: 'Personal Goals Roadmap',
    description: 'A career and personal growth guide',
    datePublished: 'Jan 5, 2024',
    url: 'https://www.notion.so/Personal-Goals-Roadmap-9f03de828e454e42ab940ce9e8a38ef6'
  },
  {
    name: 'Strategy planner for 2024',
    description: 'Strategic Reflection and Planning Guide for Future Success',
    datePublished: 'Jan 5, 2024',
    url: 'https://www.notion.so/2024-Strategy-87e024114414406fb4c58ac7d39d920a'
  }
])
</script>
