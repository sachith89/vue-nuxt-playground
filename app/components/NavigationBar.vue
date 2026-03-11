<script setup lang="ts">
</script>
<template>
  <nav class="flex justify-between p-4 bg-gray-200">
    <NuxtLink to="/">Website</NuxtLink>
    <ul class="inline-flex gap-4">
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile/1">Profiles</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/register">Register</NuxtLink>
      </li>
    </ul>
  </nav>
</template>