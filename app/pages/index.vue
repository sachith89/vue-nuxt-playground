<script setup lang="ts">

useHead({
  title: 'My cool dashboard'
})

</script>
<template>
  <h3 class="text-2xl font-red">Welcome to home page</h3>
  <div>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>