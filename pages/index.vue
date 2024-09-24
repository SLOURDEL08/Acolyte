<template>
  <div class=" bg-[#F6F3F0] overflow-x-hidden relative p-6 z-0 w-full min-h-screen " ref="contentSection">
    <img src="/public/svg/logo-big.svg" class=" w-[60%] absolute left-1/2 -translate-x-1/2 top-60" ref="image" />
      <p class="font-[500] titled text-8xl fixe h-screen flex items-end -mt-40 max-lg:text-6xl bottom-0 opacity-0" ref="textElement">
        La plus grande agence marketing entre Montréal et Québec
      </p>
    <div class="js-pin-after relative bg-[#F6F3F0]" ref="bodyC">
      <div class="relative w-full">
        <img  src="/img/talent_home.jpg" class="rounded-2xl  z-40 h-full imgtalent w-full" />
        <img src="/svg/trois-riviere.svg" class="absolute w-52 h-14 right-20 -bottom-10 z-50 rotate-12" />
      </div>
      <div class="w-[75%] para ">
        <span class="w-full font-[500] leading-based para text-[45px]">
          Acolyte est une fière agence marketing employant une quarantaine de talents et implantée à Trois‑Rivières depuis plusieurs décennies. Chaque jour, on remue ciel et terre pour transformer des entreprises en marques comme si c'était les nôtres. On incarne la co‑création pour accompagner nos partenaires dans leurs démarches stratégiques, créatives et numériques.
        </span>
      </div>
     <ContentSection/>
    </div>
    
  </div>
</template>


<script setup>
import ContentSection from './components/ContentSection.vue';

import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useNuxtApp } from '#app';

const { $gsap } = useNuxtApp();
const contentSection = ref(null);
const image = ref(null);
const textElement = ref(null);
const bodyC = ref(null);
const secElement = ref(null);
let pinAnimation = null;  // Nouvelle animation indépendante
let scrollTrigger = null;

const setupAnimations = () => {
  if ($gsap) {
    // Animation pour l'image
    $gsap.fromTo(
      image.value,
      { y: 0 },
      {
        y: -1000,
        ease: 'yes',
        scrollTrigger: {
          trigger: contentSection.value,
          start: 'top top',
          end:'300px',
          marker: true,
          scrub:true,
          pin:true,
        }
      }
    );

    $gsap.fromTo(
  bodyC.value,
  { y: 0 },
  {
    y: -500, // Adaptez la valeur de défilement à la hauteur de bodyC
    ease: 'none',
    scrollTrigger: {
      trigger: contentSection.value, // Utilisez contentSection comme déclencheur
      start: 'top top', // Quand commencer l'animation
      end: '+=200px', // Fin de l'animation quand bodyC atteint le bas
      scrub: true,
      markers: true, // Pour déboguer les marqueurs
    }
  }
    );

   // Animation pour le paragraphe avec gestion de l'opacité dans les deux sens
scrollTrigger = $gsap.fromTo(
  textElement.value,
  { opacity: 0 },  // Initial opacity
  {
    opacity: 1,    // Final opacity
    ease: 'none',  // Pas d'effet d'accélération pour un contrôle fluide
    scrollTrigger: {
      trigger: '.scroll-container',  // Élément déclencheur
      start: 'top top',              // Début de l'animation
      end: '+=400',                  // Durée de l'animation
      scrub: true,                   // Synchronisation avec le scroll, marche dans les deux sens
      markers: true                  // Utilisation des marqueurs pour le débogage
    }
  }
);
   
  }
};

onMounted(() => {
  setupAnimations();
});

onBeforeUnmount(() => {
  // Nettoyer les animations si nécessaire
  if (scrollTrigger) {
    scrollTrigger.kill(); // Tuer l'animation si elle existe
  }
});

</script>
