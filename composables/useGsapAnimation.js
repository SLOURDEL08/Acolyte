import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';

export function useGsapAnimations() {
  const { $gsap } = useNuxtApp();
  const contentSection = ref(null);
  const textElement = ref(null);
    const secElement = ref(null);
  let pinAnimation = null;  // Nouvelle animation indépendante

  let scrollTrigger = null;

  const setupAnimations = () => {
    if ($gsap) {
      // Animation pour l'image
      $gsap.fromTo(
        '.image',
        { y: 0 },
        {
          y: -5000,
          ease: 'none',
          scrollTrigger: {
            trigger: '.scroll-container',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            markers: true,
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
            markers:true,
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



// Nouvelle animation indépendante pour fixer ".text" en top-0 avec pin
      pinAnimation = $gsap.to(".text", {
        scrollTrigger: {
          trigger: ".text",  // L'élément qui déclenche l'animation
          start: "top top",  // Quand le top de .text atteint le top de la fenêtre
          end: "bottom top", // Quand le bas de .text atteint le haut de la fenêtre
          pin: true,         // Active le "pin" pour fixer l'élément
          pinSpacing: false, // Désactive le padding supplémentaire
          toggleActions: "play none none none",  // Que faire aux différents points (entrer, quitter, etc.)
          markers: true     // Mettre à true si tu veux voir les marqueurs pour le debug
        },
        top: 0,  // Fixer au top
        position: "fixed", // Met en position fixed
        ease: "none" // Pas d'animation (instantané)
      });
    } else {
      console.error('GSAP is not available.');
    }
  };

  onMounted(setupAnimations);

  onUnmounted(() => {
    if (scrollTrigger) {
      scrollTrigger.kill();
      fadeOutAnimation.kill()

    }
      if (pinAnimation) {
      pinAnimation.kill();  // Nettoyage de l'animation indépendante
    }
  });

  return {
    contentSection,
    textElement,
  };
}
