import { defineNuxtPlugin } from '#app';
import LocomotiveScroll from 'locomotive-scroll';

export default defineNuxtPlugin(nuxtApp => {
  const scrollContainer = document.querySelector('[data-scroll-container]');
  console.log('Scroll Container:', scrollContainer);

  if (scrollContainer) {
    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true
    });

    // Optionnel : écouter les événements de LocomotiveScroll pour vérifier l'initialisation
    scroll.on('scroll', (args) => {
      console.log('Scroll Event:', args);
    });
  } else {
    console.error('LocomotiveScroll container not found');
  }
});