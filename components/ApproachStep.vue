<template>
    <div class="flex group items-center justify-start">
        <div class="w-auto">
    <div class="flex items-center transition-all duration-500 gap-4 group-hover:gap-6 ">
            <span class="uppercase text-7xl max-lg:text-4xl max-md:text-2xl font-semibold font-pp mt-4">{{ title }}</span>

    <img src="/img/arrow.svg" class="invert w-12 transition-all duration-700 group-hover:opacity-100 opacity-0">
  </div>
    <p class="text-lg w-[70%] max-md:w-[80%] max-md:text-base uppercase">{{ description }}</p>
  </div>
  
    </div>  
</template>

<script setup>
defineProps({
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