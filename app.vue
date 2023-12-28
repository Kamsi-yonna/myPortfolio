<template>
  <NuxtLoadingIndicator color="#60a5fa" />
  <NuxtLayout>
    <NuxtPage />
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
  filter: blur(0.5rem);
}
.page-leave-to {
  transform: translateY(-5px);
}

.page-enter-from {
  transform: translateY(5px);
}
</style>
