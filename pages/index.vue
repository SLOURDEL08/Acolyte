<template>
 
 <div class="scroll-container  pt-80 ">
  <div class="js-pin-container  relative h-80 flex items-end p-10">
    <div class="image-scroll absolute -top-1/2" >    <img src="/public/svg/logo-big.svg" class="image   " />
</div>
    <div class="text"> <p class="font-[500] titled pt-80  text-8xl fixe">
        La plus grande agence marketing entre Montréal et Québec
      </p></div>
  </div>
  <div class="js-pin-after p-10">
     <div class="relative w-full">

        <img ref="imageElement" src="/img/talent_home.jpg" class="rounded-2xl relative z-50 h-full imgtalent w-full" />
        <img src="/svg/trois-riviere.svg" class="absolute w-52 h-14 right- -bottom-10 rotate-12 right-20" />
      </div>
      <div class="w-[75%] ">
        <span class="w-full font-[500] leading-based text-[45px]">
          Acolyte est une fière agence marketing employant une quarantaine de talents et implantée à Trois‑Rivières depuis plusieurs décennies. Chaque jour, on remue ciel et terre pour transformer des entreprises en marques comme si c'était les nôtres. On incarne la co‑création pour accompagner nos partenaires dans leurs démarches stratégiques, créatives et numériques.
        </span>
      </div>
  </div>
</div>
 </template>
 

<script setup>
import { useGsapAnimations } from '~/composables/useGsapAnimations';

const { contentSection, textElement, imageElement } = useGsapAnimations();
</script>

<style scoped>
.scroll-container {
  position: relative;
  height: max-content;
  min-height: 100vh;
  border-radius: 00px 00px 50px 50px;
  overflow-y: auto;
}

.content-section {
  width: 100%;
}

.text {
  opacity: 1;
}
.image{
  width:80%;
  margin: 0 auto;
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
  font-size:60px;
}

}

@media screen and (max-width: 770px){

  .titled{
  font-size:40px;
}

}

@media screen and (max-width: 400px){

  .titled{
  font-size:30px;
  line-height: 1.2;
}

}
</style>