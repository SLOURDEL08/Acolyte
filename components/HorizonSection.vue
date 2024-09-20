<template>
    <div class="mt-40 bg-[#f6f3f0] !z-50 rounded-3xl -mx-[25px] p-6">
         <div class="space-y-4 relative">
        <span class="text-7xl font-[500] uppercase">l'horizon</span>
        <p class="uppercase font-[500] text-xl">Longue vue sur nos projets à venir</p>
        <img class="w-40 absolute top-36 left-20 -rotate-12" src="/svg/encour.svg" />
      </div>
        <div class="mt-20 flex flex-col items-end w-full h-[160vh]">
    
    <!-- Premier item -->
    <HorizonItem 
      text="Une campagne quatre saisons pour ceux et celles qui aiment jouer dehors à l’année."
      imgHover="/img/hover1.webp"
    />

    <!-- Deuxième item -->
    <HorizonItem 
      text="Accompagner une marque chouchou avec un logo qui a du chien à se positionner sur les médias sociaux."
      imgHover="/img/hover2.webp"
    />

    <!-- Troisième item -->
    <HorizonItem 
      text="Plein gaz sur un mandat de rayonnement intégré pour un groupe de concessionnaires reconnu au Québec."
      imgHover="/img/hover3.webp"
    />
  </div>
    </div>

</template>

<script setup>
import HorizonItem from './HorizonItem.vue';
</script>

<style scoped>
/* Tu peux ajouter ici un peu de style global si nécessaire */
</style>