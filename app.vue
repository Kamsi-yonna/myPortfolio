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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
