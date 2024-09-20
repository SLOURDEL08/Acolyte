<template>
  <div ref="contentSection" class="content-section relative pt-80 bg-[#f6f3f0]  px-[25px]">
    <div ref="textElement" class="text font-light uppercase text-8xl relative opacity-0">
      <p class="font-[500]">
        La plus grande agence marketing entre Montréal et Québec
      </p>
    </div>
    
    <div class="body-content space-y-4">
      <img src="/img/talent_home.jpg" class="rounded-2xl h-full relative" />
      <div class="w-[70%]">
        <span class="w-full font-[500] leading-based text-[45px]">
          Acolyte est une fière agence marketing employant une quarantaine de talents et implantée à Trois‑Rivières depuis plusieurs décennies. Chaque jour, on remue ciel et terre pour transformer des entreprises en marques comme si c'était les nôtres. On incarne la co‑création pour accompagner nos partenaires dans leurs démarches stratégiques, créatives et numériques.
        </span>
      </div>
      <img src="/svg/trois-riviere.svg" class="absolute w-50 h-14 top-[1210px] rotate-12 right-20" />
    </div>
    <ExpertiseSection />
    <ProjectsSection />
    <ApproachSection />
    <HorizonSection />
    
  </div>
</template>

<script setup>
import { useGsapAnimations } from '~/composables/useGsapAnimation';
import ExpertiseSection from './ExpertiseSection.vue';

const { contentSection, textElement } = useGsapAnimations();
</script>

<style scoped>
.content-section {
  width: 100%;
}

.text {
  opacity: 0;
}

.custom-cursor{
    cursor: url("/homepage/public/img/interieur.webp"), auto !important;
}
.custom-cursor:hover{
    cursor: url("/homepage/public/img/interieur.webp"), auto !important;
}
</style>