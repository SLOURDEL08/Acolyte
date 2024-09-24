<template>
  <div class=" bg-[#F6F3F0] overflow-x-hidden relative p-6 max-md:p-2.5 z-0 w-full min-h-screen " ref="contentSection">
    <img src="/public/svg/logo-big.svg" class=" w-[60%] absolute max-[1000px]:hidden left-1/2 -translate-x-1/2 max-[1000px]:top-0 top-60" ref="image" />
      <p class="font-[600] titled text-8xl uppercase fixe mb-4 h-screen flex items-end -mt-40 max-md:mt-0 max-[1000px]:-mt-80 max-sm:-mt-[36rem] max-lg:text-5xl max-sm:text-[35px] tracking-tighter   !leading-10 bottom-0 opacity-0 max-[1000px]:opacity-100" ref="textElement">
        La plus grande agence marketing entre Montréal et Québec
      </p>
    <div class="js-pin-after relative bg-[#F6F3F0]" ref="bodyC">
      <div class="relative w-full">
        <img  src="/img/talent_home.jpg" class="rounded-3xl  z-40 h-[800px] max-md:h-[400px] object-cover imgtalent w-full" />
        <img src="/svg/trois-riviere.svg" class="absolute w-40 right-20 -bottom-10 z-50 rotate-12 max-[1200px]:bottom-10 max-[1200px]:right-10 max-[1200px]:w-40" />
      </div>
      <div class="w-[75%] para  pt-4  max-[1000px]:w-[90%] max-[500px]:w-full">
        <span class="w-full  leading-based para max-md:text-2xl text-[45px]">
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
let scrollTrigger = null;

const setupAnimations = () => {
  if ($gsap && window.innerWidth >= 1000) {  // Vérifie si la largeur de l'écran est supérieure à 1000px

    $gsap.matchMedia().add("(min-width: 1000px)", () => {
      // Animation pour l'image
      $gsap.fromTo(
        image.value,
        { y: 0 },
        {
          y: -300,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: contentSection.value,
            start: 'top top',
            end:'500px',
            marker: true,
            scrub: true,
            pin: true,
          }
        }
      );

      // Animation pour bodyC
      $gsap.fromTo(
        bodyC.value,
        { y: 0 },
        {
          y: -500,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: contentSection.value,
            start: '200px top',
            end: '+=2000px',
            scrub: true,
            markers: true,
          }
        }
      );

      // Animation pour le texte
      scrollTrigger = $gsap.fromTo(
        textElement.value,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: '.scroll-container',
            start: 'top top',
            end: '+=400',
            scrub: true,
            markers: true,
          }
        }
      );
    });
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