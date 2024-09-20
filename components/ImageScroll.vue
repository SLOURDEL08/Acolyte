<template>
  <div class="image-scroll absolute  top-60  left-1/2 -translate-x-1/2 z-50 ">
    <img src="/public/svg/logo-big.svg" class="image   " />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNuxtApp } from '#app';

onMounted(() => {
  const { $gsap } = useNuxtApp();
  if ($gsap) {
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
  }
});
</script>

<style scoped>
.image-scroll {
  width: 900px;
}

@media screen and (max-width: 1072px){
  .image-scroll {
  width: 70%;


}

@media screen and (max-width: 400px){
  .image-scroll{
    top:200px
  }
}



}
</style>