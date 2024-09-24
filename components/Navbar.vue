<template>
  <nav 
    class="flex fixed naved justify-between max-md:p-3 z-[100] gap-40 items-center w-full p-10 py-6 transition-transform duration-300 ease-in-out"
    :class="{ '-translate-y-full': isHidden, 'translate-y-0': !isHidden }"
    ref="navbar"
  >
    <!-- Lier dynamiquement la largeur du logo à la propriété `logoWidth` -->
    <div class="min-w-[200px]"> 
      <img 
        src="/svg/logo.svg" 
        :style="{ width: `${logoWidth}px`, height: '55px' }" 
        class="object-cover object-left transition-all duration-300 ease-in-out"
      />
    </div> 
   
    <!-- Desktop menu -->
    <ul class="hidden lg:flex justify-between w-full font-[500]">
      <li><a href="#" class="text-black/70 underlined pb-1">AGENCE</a></li>
      <li><a href="#" class="text-black/70 underlined pb-1">APPROCHE</a></li>
      <li class="flex gap-3 group items-center">
        <a href="#" class="text-black/70 underlined">EXPERTISE</a>
        <a class="group-hover:rotate-180 transition-all duration-500">+</a>
      </li>
      <li><a href="#" class="text-black/70 underlined pb-1">PROJETS</a></li>
      <li><a href="#" class="text-black/70 underlined pb-1">TALENTS</a></li>
      <li><a href="#" class="text-black/70 underlined pb-1">CARRIÈRES</a></li>
      <li><a href="#" class="text-black/70 underlined pb-1">CONTACT</a></li>
    </ul>

    <!-- Hamburger button for mobile -->
    <button class="lg:hidden text-sm p-2 leading-none px-4 border rounded-full border-black hover:bg-black hover:text-white  pb-1.5 uppercase text-black" @click="toggleMobileMenu">
      Menu
    </button>

    <!-- Mobile Menu (overlay) -->
    <div 
      class="fixed p-4 inset-0 h-screen bg-[#0d20d9] lg:hidden z-[999] flex flex-col items-start justify-start transition-all duration-500 ease-in-out"
      :class="{
        'translate-y-0 opacity-100': isMobileMenuVisible,
        '-translate-y-full opacity-0': !isMobileMenuVisible
      }"
    >
      <div class="flex items-center justify-between w-full">
        <img src="/svg/logo.svg" class="invert h-[70px]" />

        <button 
          class="text-sm p-2 leading-none px-4 border rounded-full pb-1.5 uppercase text-white"
          @click="closeMobileMenu"
        >
          Fermer
        </button>
      </div>
    
      <ul class="text-left w-full font-bold text-[38px] leading-10 text-white mt-14 space-y-6">
        <li><a href="#" class="underlined-white">AGENCE</a></li>
        <li><a href="#" class="underlined-white">APPROCHE</a></li>
        <li class="flex gap-3 group items-center">
          <a class="underlined-white" href="#">EXPERTISE</a>
          <a class="group-hover:rotate-180 transition-all duration-500">+</a>
        </li>
        <li><a href="#" class="underlined-white">PROJETS</a></li>
        <li><a href="#" class="underlined-white">TALENTS</a></li>
        <li><a href="#" class="underlined-white">CARRIÈRES</a></li>
        <li><a href="#" class="underlined-white">CONTACT</a></li>
      </ul>

      <div class="w-full mt-20">
        <ul class="flex font-[500] justify-center gap-5 items-center text-white uppercase text-base tracking-widest">
          <li><span>Facebook</span></li>
          <li><span>LinkedIn</span></li>
          <li><span>Instagram</span></li>
          <li><span>Behance</span></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navbar = ref(null);
const isHidden = ref(false);
const lastScrollTop = ref(0);
const scrollThreshold = 400;
const maxLogoWidth = 200; // Largeur max du logo en px
const minLogoWidth = 30;  // Largeur min du logo en px
const scrollRange = 200;  // Intervalle de scroll pour changer la taille

// Contrôle de la visibilité du menu mobile
const isMobileMenuVisible = ref(false);

// Crée une propriété `logoWidth` calculée en fonction du scroll
const logoWidth = ref(minLogoWidth);

// Fonction pour gérer le défilement et ajuster la taille du logo
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
    logoWidth.value = minLogoWidth + (st / scrollRange) * (maxLogoWidth - minLogoWidth);
  } else {
    logoWidth.value = maxLogoWidth;
  }
};

// Gérer l'ouverture et la fermeture du menu mobile
const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
};

const closeMobileMenu = () => {
  isMobileMenuVisible.value = false;
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
.underlined-white {
  position: relative;
}
.underlined-white::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 1.5px;
  background-color: #fff;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

@media screen and (max-width: 900px){

.naved{
  gap:10px
}

}

@media (hover: hover) and (pointer: fine) {
  .underlined-white:hover::before {
    left: 0;
    right: auto;
    width: 100%;
  }

  .grouped:hover a.underlined-white::before {
    left: 0;
    right: auto;
    width: 100%;
  }
}
</style>