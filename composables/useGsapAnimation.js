import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';

export function useGsapAnimations() {
  const { $gsap } = useNuxtApp();
  const contentSection = ref(null);
  const textElement = ref(null);
  let scrollTrigger = null;

  const setupAnimations = () => {
    if ($gsap) {
      // Animation pour l'image
      $gsap.fromTo(
        '.image',
        { y: 0 },
        {
          y: -1000,
          ease: 'none',
          scrollTrigger: {
            trigger: '.scroll-container',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // Animation pour le paragraphe et gestion de la position de content-section
      scrollTrigger = $gsap.fromTo(
        textElement.value,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.scroll-container',
            start: 'top top',
            end: '+=400 top',
            scrub: true,
            onUpdate: (self) => {
              if (self.progress >= 1) {
                contentSection.value.style.position = 'relative';
                contentSection.value.style.top = '400px';
              } else {
                contentSection.value.style.position = 'fixed';
                contentSection.value.style.top = '0';
              }
            }
          }
        }
      );
    } else {
      console.error('GSAP is not available.');
    }
  };

  onMounted(setupAnimations);

  onUnmounted(() => {
    if (scrollTrigger) {
      scrollTrigger.kill();
    }
  });

  return {
    contentSection,
    textElement,
  };
}