<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">RECENT ARTICLES</h2>
    <ul class="space-y-8">
      <li
        v-for="(article, id) in articles"
        :key="id">
        <ArticleCard :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        color="gray"
        label="All Articles &rarr;"
        to="/articles"
        variant="link" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const articles = [
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
]
</script>
