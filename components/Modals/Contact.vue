import type { UTextarea } from '#build/components';
<script setup>
const isOpen = ref(false)
</script>

<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10">
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">STAY IN TOUCH:</h2>
      <UButton
        class="uppercase text-xs font-semibold text-gray-400"
        label="Click to send me a mail"
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
          <span class="text-sm text-base font-light leading-6 text-gray-900 dark:text-white">
            I will definitely respond within 24 hours.
          </span>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
