import type { UTextarea } from '#build/components';
<script setup>
const isOpen = ref(false)
</script>

<template>
  <div>
    <div class="mb-6 items-center space-y-3">
      <div class="flex-none rounded-full text-gray-900 dark:text-gray-400">
        <div class="h-2 w-2 rounded-full bg-primary dark:bg-secondary"></div>
      </div>
      <h2 class="uppercase text-[13px] font-semibold text-gray-900 dark:text-gray-400 animate-bounce">
        If you like my work, feel free to hit me up for a project collab or even just a chat!
        <br />
        Let's make things happen together! 🚀
      </h2>
      <UButton
        class="text-xs py-2 font-semibold text-gray-50 dark:text-gray-900"
        color="black"
        label="Send an Email &#8599;"
        @click="isOpen = true" />
    </div>

    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <Placeholder class="h-4" />
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Leave a message</h3>
            <UButton
              class="-my-1"
              color="gray"
              icon="i-heroicons-x-mark-20-solid"
              @click="isOpen = false" />
          </div>
        </template>

        <Placeholder class="h-32" />

        <form class="max-w-sm mx-auto">
          <div class="mb-5">
            <label
              class="label-input"
              for="name">
              Your name
            </label>
            <UInput
              id="name"
              placeholder="John Doe"
              required
              type="text" />
          </div>
          <div class="mb-5">
            <label
              class="label-input"
              for="email">
              Your email
            </label>
            <UInput
              id="email"
              placeholder="example@email.com"
              required
              type="email" />
          </div>
          <div class="mb-5">
            <label
              class="label-input"
              for="message">
              Your message
            </label>
            <UTextarea
              id="message"
              class="block"
              placeholder="Leave a message..."
              required
              rows="4"
              type="text" />
          </div>

          <UButton
            color="black"
            label="Send &rarr;"
            size="lg"
            type="submit" />
        </form>

        <template #footer>
          <Placeholder class="h-8 items-center" />
          <span class="text-sm font-light leading-6 text-gray-900 dark:text-white">
            I will definitely respond within 24 hours.
          </span>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
