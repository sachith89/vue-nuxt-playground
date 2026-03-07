<script setup lang="ts">
const counter = ref(3) // executes in server and client environments
const double = computed(() => counter.value * 2)

const handleClick = () => {
  counter.value++ // executes only in a client environment
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold italic font-red">
      Hello Tailwind in Nuxt 4!
    </h1>
    <NuxtPage />
  </div>
</template>
