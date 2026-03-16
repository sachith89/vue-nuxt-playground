<template>
  <PageTitle>Login page</PageTitle>
  <div class="login-page">
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

  const result = await $fetch.raw('/api/auth/login', {
    method: 'POST',
    body: {username: form.username, password: form.password}, async onResponseError({response}) {
      if (response.status === 401) {
        errors.value = (response._data).message;
        return;
      }
    }
  })

  if (!result.ok) {
    errors.value = 'Something went wrong while login';
    return;
  }

  if (result._data && result._data.token) {
    useCookie("jwt_token").value = result._data.token;
  } else {
    errors.value = 'Something went wrong while login';
  }
}

const form = reactive({
  username: '',
  password: '',
})

</script>

<style scoped>
@import "tailwindcss";

input {
  @apply bg-neutral-700 border border-neutral-700 p-2 rounded-full;
}
</style>