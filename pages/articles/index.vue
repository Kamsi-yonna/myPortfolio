<template>
  <main class="min-h-screen">
    <Header
      class="mb-4"
      :description="description"
      title="Articles" />

    <section class="search-box">
      <div class="search-button">
        <UButton
          color="gray"
          label="Search Articles"
          @click="showSearchInput = !showSearchInput" />

        <UDropdown
          :items="items"
          :popper="{ placement: 'bottom-start' }">
          <UButton
            color="white"
            label="Filters"
            trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>
      </div>
      <div
        v-show="showSearchInput"
        class="search-input">
        <UInput
          v-model="searchVal"
          color="white"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search articles by topic..."
          size="sm"
          :trailing="false" />
        <UButton
          label="Search"
          @click="fetchArticles" />
      </div>
    </section>

    <ul class="space-y-12 mt-4">
      <li
        v-for="(article, id) in articles"
        :key="id">
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
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const description =
  'Explore a diverse collection of insightful articles pertaining to my career insights, programming expertise, and life as I perceive it.'
//  An array of knowledge, experiences, and perspectives that capture the essence of my professional journey.'

useSeoMeta({
  title: 'Articles | Kamsiyonna',
  description
})

interface Article {
  name: string
  author: string
  title: string
  _path: string

  description: string
  published: string
  url: string
}
const showSearchInput = ref(false)
const articles = ref<Article[]>([])
const searchVal = ref<string>('')
const publishedDate = ref<any>(-1)

const items = [
  [
    {
      label: 'Latest',
      click: () => {
        publishedDate.value = 1
        fetchArticles()
      }
    },
    {
      label: 'Oldest',
      click: () => {
        publishedDate.value = -1
        fetchArticles()
      }
    }
  ]
  // [
  //   {
  //     label: 'Notion',
  //     icon: 'devicon:notion'
  //   },
  //   {
  //     label: 'Medium',
  //     icon: 'basil:medium-solid'
  //   }
  // ]
]
const fetchArticles = async () => {
  try {
    const fetchedArticles = await queryContent<Article>('articles')
      .where({ title: { $contains: searchVal.value } })
      // .where({ author: { $contains: 'Kamsiyonna' } })

      .sort({ published: publishedDate.value })
      .limit(7)
      .find()

    articles.value = fetchedArticles
  } catch (error) {
    // console.log('Error fetching articles', error)
  }
}

onMounted(() => {
  fetchArticles()
})

// const { data: articles } = await useAsyncData('all-articles', () => queryContent('/articles').find())
</script>
