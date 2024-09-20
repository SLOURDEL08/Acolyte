<template>
  <div
    class="w-[75%] relative group py-20 border-b pr-20 border-black cursor-none"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    ref="hoverContainer"
  >
    <span class="text-4xl font-[500]">{{ text }}</span>
    <img
      :src="imgHover"
      :style="{ left: imageX + 'px', top: imageY + 'px', opacity: imageVisible ? 1 : 0 }"
      class="w-[250px] h-[250px] rounded-2xl absolute pointer-events-none"
      ref="hoverImage"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Props: texte et image à passer
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  imgHover: {
    type: String,
    required: true
  }
});

const imageX = ref(0);
const imageY = ref(0);
const imageVisible = ref(false);
const hoverContainer = ref(null);
const hoverImage = ref(null);

// Fonction pour gérer le mouvement de la souris
const handleMouseMove = (event) => {
  if (!hoverContainer.value || !hoverImage.value) return;
  
  const containerBounds = hoverContainer.value.getBoundingClientRect();

  // Calcul de la position horizontale et verticale
  imageX.value = event.clientX - containerBounds.left - (hoverImage.value.offsetWidth / 2);
  imageY.value = event.clientY - containerBounds.top - (hoverImage.value.offsetHeight / 2);

  // Rendre l'image visible lors du survol
  imageVisible.value = true;
};

// Fonction pour cacher l'image lorsque la souris quitte la div
const handleMouseLeave = () => {
  // On cache l'image quand la souris quitte la zone
  imageVisible.value = false;
};

// Assurez-vous que l'image est cachée lorsque le composant est monté
onMounted(() => {
  imageVisible.value = false;
});

// Nettoyage: s'assurer que l'image est cachée si le composant est détruit pendant le survol
onUnmounted(() => {
  imageVisible.value = false;
});
</script>

<style scoped>
.group img {
  transition: opacity 0.3s ease, transform 0.1s ease;
}
</style>