<template>
  <PageTitle>Register page</PageTitle>
  <div class="register-page">
    <form class="flex flex-col gap-2 items-center" @submit.prevent="submitForm">
      <div class="flex gap-2 items-center justify-center">
        <label for="username">Username:</label>
        <input v-model="form.username" type="text" name="username" id="username">
      </div>

      <div class="flex gap-2 items-center justify-center">
        <label for="password">Password:</label>
        <input v-model="form.password" type="password" name="password" id="password">
      </div>
      <button type="submit" class="px-6!">
        Submit
      </button>
    </form>

    <div v-if="errors" class="flex items-center justify-center">
      {{ errors }}
    </div>

  </div>
</template>

<script setup lang="ts">

const errors = ref<string | null>(null)

async function submitForm() {
  errors.value = null;

  if (!form.username) {
    errors.value = 'Username is required';
    return;
  }

  if (!form.password) {
    errors.value = 'Password is required';
    return;
  }

  const result = await $fetch.raw('/api/auth/register', {
    method: 'POST',
    body: {username: form.username, password: form.password},
  })

  if (!result.ok) {
    errors.value = 'Something went wrong while registering';
    return;
  }

  errors.value = 'Registration successful';

}

const form = reactive({
  username: '',
  password: '',
})

</script>

<style scoped>
@import "tailwindcss";
@import "tailwindcss";

input {
  @apply bg-neutral-700 border border-neutral-700 p-2 rounded-full;
}
</style>