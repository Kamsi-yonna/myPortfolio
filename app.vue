<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#60a5fa" />
    <UContainer>
      <NuxtPage />
    </UContainer>
  </NuxtLayout>
</template>

<script setup>
const metaDef = useDefault('meta')
useSeoMeta({ ...metaDef })
</script>

<style></style>
