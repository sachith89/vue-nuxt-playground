<script setup lang="ts">

import NavigationBar from "~/components/NavigationBar.vue";

useHead({
  title: 'My cool dashboard'
})

const counter1 = ref(0)
const counter2 = useState<number>('counter2', () => 0)


const {data, pending, error} = useFetch('/api/hello', {server: false});

</script>

<template>
  <NavigationBar/>
  <h3 class="text-2xl font-red">Welcome to home page</h3>
  <div>
  </div>

  <div>
    <p>Counter using ref() -> {{ counter1 }}. Click here to
      <Button class="underline" @click="counter1++">Increment</Button>
    </p>
  </div>

  <div>
    <p>Counter using useState() -> {{ counter2 }}. Click here to
      <Button class="underline" @click="counter2++">Increment</Button>
    </p>
  </div>

  <div>
    <p v-if="pending">Data from API loading...</p>
    <p v-if="error">There was an error while fetching data. Error : {{ error.data.message }}</p>
    <ul class="list-disc list-inside p-4">
      <li v-for="fruit in data?.fruits" :key="fruit.id">
        {{ fruit.name }}
      </li>
    </ul>
  </div>


</template>