<template>
  <div
    class="w-[75%] max-[1200px]:flex max-[1200px]:gap-6  max-[1200px]:items-center max-lg:pr-10 max-md:pr-0 max-[1200px]:py-6  max-[1200px]:w-full relative group py-20 pr-20 cursor-none"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    ref="hoverContainer"
  >
    <span class="text-[40px] max-lg:text-[20px] max-md:text-[18px] font-[500] leading-tight">{{ text }}</span>
    <img
      :src="imgHover"
      :style="{ left: imageX + 'px', top: imageY + 'px', opacity: imageVisible ? 1 : 0 }"
      class="w-[250px] h-[250px] max-[1200px]:hidden max-[1200px]:opacity-100 max-[1200px]:inset-0  rounded-2xl absolute pointer-events-none"
      ref="hoverImage"
    />
    <img
      :src="imgHover"
      class="w-[250px] h-[250px] max-[1200px]:min-w-[28vw] max-[1200px]:h-[auto]  max-[1200px]:sticky min-[1200px]:opacity-100  rounded-2xl absolute pointer-events-none"
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