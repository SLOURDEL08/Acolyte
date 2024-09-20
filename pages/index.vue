<template>
  <div class="scroll-container">
    <ImageScroll />
    <ContentSection />
  </div>
</template>

<script setup>
import ImageScroll from '~/components/ImageScroll.vue';
import ContentSection from '~/components/ContentSection.vue';
</script>

<style scoped>
.scroll-container {
  position: relative;
  overflow: hidden;
  height: max-content;
  min-height: 100vh;
}
</style>