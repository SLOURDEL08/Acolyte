<template>
  <div class="mt-40 max-md:mt-28">
    <span class="text-7xl tracking-tight font-[600] max-md:text-3xl">EXPERTISES</span>
    <div class="flex !max-md:overflow-x-auto max-md:w-[1000px] gap-5 mt-4">
      <ExpertiseCard 
        v-for="(expertise, index) in expertises" 
        :key="index"
        :image="expertise.image"
        :title="expertise.title"
        :description="expertise.description"
      />
    </div>
  </div>
</template>

<script setup>
import ExpertiseCard from './ExpertiseCard.vue';

const expertises = [
  {
    image: '/img/web1.webp',
    title: 'MARQUE',
    description: 'Notre agence de communications imagine des marques ancrées dans les réels besoins de nos partenaires.'
  },
  {
    image: '/img/web2.webp',
    title: 'CONTENU',
    description: 'Développer un marketing de contenu d’impact qui crée de la valeur.'
  },
  {
    image: '/img/web3.webp',
    title: 'WEB ET NUMÉRIQUE',
    description: 'Interagir avec le consommateur pour rendre nos marques indispensables.'
  },
  {
    image: '/img/web4.webp',
    title: 'MÉDIA',
    description: 'Placer votre marque à des endroits stratégiques et réfléchis.'
  }
];
</script>