<template>
  <div class="mt-40 max-md:mt-28">
    <span class="text-7xl tracking-tight font-[600] max-md:text-3xl">PROJETS</span>
    <div class="flex  max-lg:flex-wrap gap-4 mt-4 max-md:gap-14 ">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="index"
        :image="project.image"
        :title="project.title"
        :description="project.description"
        class="hover:cursor-pointer"
      />
    </div>
    <div class="flex hover:cursor-pointer flex-col group gap-2 mt-20 max-md:mt-14">
      <div class="relative overflow-hidden rounded-2xl">
        <img 
          src="/img/giacomo.webp" 
          class="rounded-2xl object-cover w-full h-[80vh] max-lg:h-[40vh] max-md:h-[300px] transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div class="flex gap-4 mt-4 mb-2 group-hover:gap-6 max-md:justify-between transition-all duration-500 items-center">
      <span class="text-2xl font-[500] uppercase">GIACOMO</span>
        <img src="/svg/arrow-right.svg" class="w-6"/>
      </div>
      <p class=" font-light text-xl">Élever une marque à la hauteur de la qualité de ses produits pour en faire une réelle source d’émerveillement.</p>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';

const projects = [
  {
    image: '/img/atlantis.webp',
    title: 'ATLANTIS',
    description: 'Tonifier une identité de marque en la rendant plus solide, plus distinctive et plus significative.'
  },
  {
    image: '/img/pluritec.webp',
    title: 'PLURITEC',
    description: 'Concevoir les fondations d’une identité forte, flexible et étoffée'
  }
];
</script>