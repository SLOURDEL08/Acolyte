<template>
  <nav 
    class="flex fixed justify-between z-[100] gap-40 items-center w-full p-10 py-6 transition-transform duration-300 ease-in-out"
    :class="{ '-translate-y-full': isHidden, 'translate-y-0': !isHidden }"
    ref="navbar"
  >
    <!-- Lier dynamiquement la largeur du logo à la propriété `logoWidth` -->
     <div class="min-w-[200px]"> <img 
      src="/svg/logo.svg" 
      :style="{ width: `${logoWidth}px`, height: '55px' }" 
      class="object-cover object-left transition-all duration-300 ease-in-out "
    /></div> 
   
    <ul class="flex justify-between w-full font-[500]">
      <li><a href="#" class="text-gray-700 underlined pb-1">AGENCE</a></li>
      <li><a href="#" class="text-gray-700 underlined pb-1">APROCHE</a></li>
      <li class="flex gap-3 group items-center "><a href="#" class="text-gray-700 underlined ">EXPERTISE</a><a class="group-hover:rotate-180 transition-all duration-500">+</a></li>
      <li><a href="#" class="text-gray-700 underlined pb-1">PROJETS</a></li>
      <li><a href="#" class="text-gray-700 underlined pb-1">TALENTS</a></li>
      <li><a href="#" class="text-gray-700 underlined pb-1">CARRIERES</a></li>
      <li><a href="#" class="text-gray-700 underlined pb-1">CONTACT</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const navbar = ref(null);
const isHidden = ref(false);
const lastScrollTop = ref(0);
const scrollThreshold = 400;
const maxLogoWidth = 200; // Largeur max du logo en px
const minLogoWidth = 30;  // Largeur min du logo en px
const scrollRange = 200;  // Intervalle de scroll pour changer la taille

// Crée une propriété `logoWidth` calculée en fonction du scroll
const logoWidth = ref(minLogoWidth);

const handleScroll = () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  
  // Gérer la barre de navigation (comme avant)
  if (st > scrollThreshold) {
    if (st > lastScrollTop.value) {
      isHidden.value = true;
    } else {
      isHidden.value = false;
    }
  } else {
    isHidden.value = false;
  }
  
  lastScrollTop.value = st <= 0 ? 0 : st;

  // Calculer la nouvelle taille du logo en fonction du scroll
  if (st < scrollRange) {
    // Proportionnel au scroll (entre minLogoWidth et maxLogoWidth)
    logoWidth.value = minLogoWidth + (st / scrollRange) * (maxLogoWidth - minLogoWidth);
  } else {
    // Si le scroll dépasse 200px, fixer la largeur max du logo
    logoWidth.value = maxLogoWidth;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
nav {
  transition: transform 0.3s ease-in-out;
}
img {
  transition: width 0.3s ease-in-out;
}
</style>