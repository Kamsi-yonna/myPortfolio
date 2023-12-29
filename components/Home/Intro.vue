<template>
  <div class="space-y-6">
    <UTooltip
      :popper="{ placement: 'right', arrow: 'true' }"
      text="Myself">
      <NuxtImg
        alt="Kamsiyonna Etiobi"
        class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-24 w-24 sm:h-24 sm:w-24 object-cover"
        format="webp"
        placeholder
        sizes="48px sm:64px"
        src="/images/profile.jpg" />
    </UTooltip>
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Hey there!</h1>
    <p class="text-gray-900 dark:text-gray-400 font-light">
      My name is
      <span class="text-primary dark:text-blue animate-pulse">Kamsiyonna</span>
      , a self-motivated & curious developer based in the vibrant city of Lagos, Nigeria.
      <br />
      I have a passion for learning and a desire to solve problems with design. My approach involves uncovering
      insights, reframing problems, and crafting forward-thinking solutions.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I am deeply passionate about contributing and providing accessible solutions that not only meet user needs but
      also pave the way for developments accross the web.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a Junior Frontend Developer at
      <a
        class="underline text-primary dark:text-blue"
        href="https://check-dc.com/"
        target="_blank">
        Check
      </a>
      , and by night, I'm reading or getting my hands dirty with codes written by my seniors.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Outside of programming, I dabble in architecture and interior design. I enjoy listening to music a lot, reading
      and simply being.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Kamsiyonna Etiobi',
  description:
    'My name is Kamsiyonna, a self-motivated & curious developer based in the vibrant city of Lagos, Nigeria.I have a passion for learning and a desire to create functional user friendly websites. I build web applications and sites using Javascript, Typescript, Vuejs, Nuxtjs & tailwind css.'
})
</script>
