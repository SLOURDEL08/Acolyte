<template>
  <div class="flex  max-lg:w-full flex-col group gap-2 w-[50%] ">
    <div class="relative overflow-hidden rounded-2xl">
      <img 
        :src="image" 
        class="rounded-2xl object-cover w-full h-[85vh]   transition-transform duration-500 hover:scale-110" 
      />
    </div>
    <div class="flex gap-4 mt-4 mb-2 items-center transition-all duration-500 group-hover:gap-6">
      <span class="text-2xl font-[500] uppercase">{{ title }}</span>
      <img src="/svg/arrow-right.svg" class="w-5"/>
    </div>
    <p class="w-[80%] font-light text-xl">{{ description }}</p>
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