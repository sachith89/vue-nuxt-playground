<script setup lang="ts">

useHead({
  title: 'My cool dashboard'
})

const counter1 = ref(0)
const counter2 = useState<number>('counter2', () => 0)

</script>


<template>
  <h3 class="text-2xl font-red">Welcome to home page</h3>
  <div>
    <NuxtLink to="/about">About</NuxtLink>
  </div>

  <p>Counter using ref() -> {{ counter1 }}. Click here to <Button class="underline" @click="counter1++">Increment</Button></p>


  <p>Counter using useState() -> {{ counter2 }}. Click here to <Button class="underline" @click="counter2++">Increment</Button></p>


</template>