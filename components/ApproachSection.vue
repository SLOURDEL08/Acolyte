<template>
  <div class="mt-40">
    <p class="w-[40%] text-2xl mb-2 font-light uppercase">Notre approche précise et efficace assure le développement d’une marque intelligente et durable.</p>
    <div class="flex  max-lg:flex-wrap gap-6">
      <div class="w-1/2 relative">
        <img src="/img/interieur.webp" class="rounded-2xl  w-full h-[600px] object-cover"/>
        <img class="absolute bottom-20 right-10 -rotate-12 w-40 h-auto" src="/svg/approche.svg" />
      </div>
      <div class="w-1/2 flex flex-col items-start justify-between">
        <ApproachStep 
          v-for="step in approachSteps" 
          :key="step.title"
          :title="step.title"
          :description="step.description"
        />
        <button class="p-2.5 uppercase text-sm px-6 hover:bg-transparent hover:text-black hover:border-black hover:font-[500] transition-all duration-500 border text-white bg-black rounded-full">
          Notre approche vue de plus proche
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ApproachStep from './ApproachStep.vue';

const approachSteps = [
  { title: 'définir', description: 'Comprendre d\'où on vient et où on s\'en va' },
  { title: 'créer', description: 'Fabriquer des marques qui se démarquent' },
  { title: 'propulser', description: 'Oser aller plus loin pour se distinguer de la masse' }
];
</script>