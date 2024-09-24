<template>
  <div class="flex grouped cursor-pointer flex-col gap-2 max-md:w-[400px] w-[25%]">
    <img :src="image" class="rounded-2xl" />
    <div class="space-y-4 mt-4 min-h-40">
        <span class="text-[29px]  font-[500]">{{ title }}</span>
    <p class="text-[15px] font-[]">{{ description }}</p>
    </div>
  
    <div class="flex gap-2 items-center">
      <a href="#" class="text-xl font-[500]  underlined">Découvrir</a>
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