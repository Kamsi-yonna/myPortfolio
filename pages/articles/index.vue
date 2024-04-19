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
          :items="sort"
          :popper="{ placement: 'bottom-start' }">
          <UButton
            color="white"
            label="Sort"
            trailing-icon="i-heroicons-arrows-up-down" />
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
          size="sm" />
        <UButton
          label="Search"
          @click="fetchArticles" />
      </div>
    </section>

    <section>
      <div v-if="articles.length > 0">
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
      </div>
      <div v-else>
        <div class="search-box mt-4">
          <div class="w-full md:w-3/5 mx-auto flex items-center gap-2 p-8">
            <UAlert
              :avatar="{
                src: 'https://media.giphy.com/media/NXOF5rlaSXdAc/giphy.gif',
                size: '2xl',
                base: 'flex-shrink-0 self-center'
              }"
              :description="noArticlesFound"
              title="Oops!🫠"
              variant="solid" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const description =
  'Explore a diverse collection of articles pertaining to my career insights, programming expertise, and life as I perceive it.'

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
const noArticlesFound = ref<string>('')

const sort = [
  [
    {
      label: 'Latest',
      click: () => {
        publishedDate.value = 1
        fetchArticles()
      }
    },
    {
      label: 'Earliest',
      click: () => {
        publishedDate.value = -1
        fetchArticles()
      }
    }
  ]
]

const fetchArticles = async () => {
  try {
    const regexVal = new RegExp(searchVal.value, 'i')
    const fetchedArticles = await queryContent<Article>('articles')
      .where({
        $or: [
          { title: { $regex: regexVal } },
          { description: { $regex: regexVal } },
          { author: { $regex: regexVal } },
          { randomProp: { $regex: regexVal } },
          { slug: { $regex: regexVal } }
        ]
      })
      .sort({ published: publishedDate.value })
      .limit(7)
      .find()
    if (fetchedArticles.length > 0) {
      articles.value = fetchedArticles
    } else {
      articles.value = fetchedArticles
      noArticlesFound.value = 'I guess I have to write about that.'
    }
  } catch (error) {}
}
onMounted(() => {
  fetchArticles()
})
</script>
