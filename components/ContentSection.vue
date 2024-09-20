<template>
  <div ref="contentSection" class="content-section relative z-20 pt-80 max-lg:pt-[30em] max-md:pt-40 paded bg-[#f6f3f0]  px-[25px]">
    <div ref="textElement" class="text font-light uppercase text-8xl relative opacity-0">
      <p class="font-[500] max-lg:text-4xl titled ">
        La plus grande agence marketing entre Montréal et Québec
      </p>
    </div>
    
    <div class="body-content  space-y-4">
      <div class="relative w-full">
              <img src="/img/talent_home.jpg" class="rounded-2xl h-full imgtalent w-full " />
      <img src="/svg/trois-riviere.svg" class="absolute w-52 h-14 right- -bottom-10 rotate-12 right-20" />

      </div>
      <div class="w-[75%] ">
        <span class="w-full font-[500] leading-based text-[45px]">
          Acolyte est une fière agence marketing employant une quarantaine de talents et implantée à Trois‑Rivières depuis plusieurs décennies. Chaque jour, on remue ciel et terre pour transformer des entreprises en marques comme si c'était les nôtres. On incarne la co‑création pour accompagner nos partenaires dans leurs démarches stratégiques, créatives et numériques.
        </span>
      </div>
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


@media screen and (max-width: 1072px){

.imgtalent{
  height: 600px;
  object-fit: cover;
}

.titled{
  font-size:50px
}

}

@media screen and (max-width: 770px){

  .titled{
  font-size:30px
}

.paded{
  padding-top:350px
}
}

@media screen and (max-width: 400px){

  .titled{
  font-size:25px;
  line-height: 1.2;
}

.paded{
  padding-top:250px
}
}
</style>