<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">RECENT ARTICLES</h2>
    <ul class="space-y-16">
      <li>
        <!-- APP ARTICLE CARD START  -->

        <NuxtLink class="group">
          <article>
            <time
              class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
              datetime="2022-09-05">
              <span
                aria-hidden="true"
                class="absolute inset-y-0 left-0 flex items-center">
                <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
              </span>
              getReadableDate article.published
            </time>
            <h2
              class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600">
              article.title
            </h2>
            <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">article.description</p>
          </article>
        </NuxtLink>

        <!-- APP ARTICLE CARD TWO  -->
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

<script setup lang="ts"></script>
