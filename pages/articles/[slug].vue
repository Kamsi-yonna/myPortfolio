<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
      <ContentDoc
        v-slot="{ doc }"
        tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>

    <!-- <div
      v-for="(article, index) in article"
      :key="index">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
      <p>{{ article.published }}</p>
    </div> -->
  </main>
</template>
<script setup>
const route = useRoute()
const { slug } = route.params

// const { data: article } = useContent('article', { slug })

console.log(slug)
useSeoMeta({
  title: `${slug} | Kamsiyonna`,
  articleAuthor: 'Kam'
})

// const article = ref(null)

// // Fetch article data based on the slug
// const fetchArticle = async () => {
//   // Simulate fetching article data based on slug
//   // Replace this with your actual data fetching logic
//   const slug = $route.params.slug
//   article.value = await fetch(`/api/articles/${slug}`).then((response) => response.json())
// }

// fetchArticle()
// console.log(article)
</script>

<style scoped>
/* .prose h2 a,
.prose h3 a {
  @apply no-underline;
} */
</style>

<!--
<template>
  <ContentDoc
    v-slot="{ doc }"
    tag="article">
    <article>
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
    </article>
  </ContentDoc>
</template>

<script setup>
const route = useRoute()
const { slug } = route.params

const description =
 'Explore a diverse collection of insightful articles pertaining to my career insights, programming expertise, and life as I percive it. An array of knowledge, experiences, and perspectives that capture the essence of my professional journey.'

useSeoMeta({
  title: `${slug} | Kamsiyonna`,
  description
})
</script>

<style lang="scss" scoped></style> -->
