<template>
  <div class="flex grouped  flex-col gap-2 w-[25%]">
    <img :src="image" class="rounded-2xl" />
    <div class="space-y-4 mt-2 min-h-40">
        <span class="text-3xl font-light">{{ title }}</span>
    <p class="text-sm font-light">{{ description }}</p>
    </div>
  
    <div class="flex gap-2 items-center">
      <a href="#" class="text-lg font-light  underlined">Découvrir</a>
      <img src="/svg/arrow-right.svg"  class="w-4"/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>