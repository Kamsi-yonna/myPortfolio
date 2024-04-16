<template>
  <main class="min-h-screen">
    <Header
      class="mb-16"
      :description="description"
      title="Articles" />

    <ul class="space-y-16">
      <li
        v-for="(article, id) in articles"
        :key="id">
        <ArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const description =
  'Explore a diverse collection of insightful articles chronicling my tech journey, career insights, programming expertise, and musings on user interfaces and front-end development. Delve into a wealth of knowledge, experiences, and perspectives that capture the essence of my professional narrative and expertise in the tech industry.'

useSeoMeta({
  title: 'Articles | Kamsiyonna',
  description
})

// const { data: articles } = await useAsyncData('som-articles', () =>
//   queryContent('/articles').sort({ published: -1 }).find()
// )

// if slug === relax
// if-else statements look like this
// const articles = await queryContent('articles')
//   .where({ author: { $contains: 'great' } })
//   .where({ slug: { $contains: 'love' } })
//   .find()

// if author is not Kamsiyonna
// const articles = await queryContent('articles')
//   .where({ author: { $not: 'Kamsiyonna' } })
//   .find()

// if author isnt kamsiyonna and the alug contains webflow
// const articles = await queryContent('articles')
// .where({ author: { $not: 'Kamsiyonna' } })
// .where({ slug: { $contains: 'webflow' } })

// .find()

// this is supposed to show the first article... Soehow doesn't work
// const articles = await queryContent('articles').findOne()

// const articles = await queryContent('articles')
//   .where({ author: { $contains: 'Kamsiyonna' } })
//   .find()

// sorts the articles by id ascending
// const articles = await queryContent('articles').sort({ id: 1 }).find()

// if author isnt kamsiyonna and the alug contains webflow
// const articles = await queryContent('articles')
//   .where({ author: { $contains: 'Kamsiyonna' } })
//   .sort({ id: 1 })
//   .limit(3)
//   .find()

// console.log(articles)

// This takes care of the reactive issue
const articles = ref({})

const fetchArticles = async () => {
  try {
    const fetchedArticles = await queryContent('articles')
      .where({ author: { $contains: 'Kamsiyonna' } })
      .where({ slug: { $contains: 'Nuxt Configuration' } })

      // .sort({ id: 1 })
      // .limit(7)
      .find()

    articles.value = fetchedArticles
  } catch (error) {
    console.log('Error fetching articles', error)
  }
}

onMounted(() => {
  fetchArticles()
})

// const { data: articles } = await useAsyncData('all-articles', () => queryContent('/articles').find())
</script>
