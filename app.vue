<template>
  <div>
    <Navbar /> <!-- Apparaît sur toutes les pages -->
    <NuxtPage /> <!-- L'élément clé, c'est ici que les pages sont rendues -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import '~/assets/css/tailwind.css'
</script>

<style scoped>
footer {
  text-align: center;
  padding: 20px;
  background-color: #f1f1f1;
}
</style>