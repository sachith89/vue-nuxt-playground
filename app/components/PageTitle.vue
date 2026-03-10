<template>
  <div class="text-3xl font-bold shadow-2xs" :class="props.colorClass">
    <slot/>
  </div>
</template>

<script setup lang="ts">

interface PageTitleProps {
  colorClass?: string
}

const props = withDefaults(defineProps<PageTitleProps>(), {
  colorClass: 'text-gray-800',
})
</script>