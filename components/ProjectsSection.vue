<template>
  <div class="mt-40">
    <span class="text-7xl font-[500] tracking-tight	">PROJETS</span>
    <div class="flex gap-4 mt-4 ">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="index"
        :image="project.image"
        :title="project.title"
        :description="project.description"
        class="hover:cursor-pointer"
      />
    </div>
    <div class="flex hover:cursor-pointer flex-col group gap-2 mt-20">
      <div class="relative overflow-hidden rounded-2xl">
        <img 
          src="/img/giacomo.webp" 
          class="rounded-2xl object-cover w-full h-[80vh] transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div class="flex gap-4 mt-4 mb-2 group-hover:gap-6 transition-all duration-500 items-center">
      <span class="text-2xl font-light uppercase">GIACOMO</span>
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