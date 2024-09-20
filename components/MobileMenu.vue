<template>
  <div 
    v-if="isVisible" 
    class="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out"
    :class="{ 'translate-y-0': isVisible, '-translate-y-full': !isVisible }"
  >
    <button class="absolute top-5 right-5" @click="closeMenu">X</button>
    <ul class="text-center font-bold text-xl space-y-6">
      <li><a href="#" class="text-black">AGENCE</a></li>
      <li><a href="#" class="text-black">APPROCHE</a></li>
      <li><a href="#" class="text-black">EXPERTISE</a></li>
      <li><a href="#" class="text-black">PROJETS</a></li>
      <li><a href="#" class="text-black">TALENTS</a></li>
      <li><a href="#" class="text-black">CARRIÈRES</a></li>
      <li><a href="#" class="text-black">CONTACT</a></li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Propriété pour contrôler la visibilité du menu
const isVisible = ref(false);

// Fonction pour fermer le menu
const closeMenu = () => {
  isVisible.value = false;
};
</script>

<style scoped>
/* Ajoute des transitions pour un effet smooth */
.menu-overlay {
  transition: transform 0.5s ease-in-out;
}
</style>