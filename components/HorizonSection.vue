<template>
    <div class="mt-40 bg-[#f6f3f0] !z-50 rounded-3xl -mx-[25px]  p-6">
         <div class="space-y-4 relative ">
<span class="text-7xl font-[600] tracking-tight uppercase">l
  <span class="inline-block rotate-12 font-[600] absolute left-8 top-0">'</span>
  horizon
</span>        <p class="uppercase font-[500] text-[22px]">Longue vue sur nos projets à venir</p>
        <img class="w-40 absolute top-36 left-24 -rotate-6" src="/svg/encour.svg" />
      </div>
        <div class="mt-20 flex flex-col items-end w-full ">
    
    <!-- Premier item -->
    <HorizonItem 
      text="Une campagne quatre saisons pour ceux et celles qui aiment jouer dehors à l’année."
      imgHover="/img/hover1.webp"
      class="border-b border-black"
    />

    <!-- Deuxième item -->
    <HorizonItem 
      text="Accompagner une marque chouchou avec un logo qui a du chien à se positionner sur les médias sociaux."
      imgHover="/img/hover2.webp"
      class="border-b border-black"
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