<template>
<div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
  <Navbar />
  <main class="flex-grow">
    <NuxtPage />
  </main>
  <Footer />
</div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import '~/assets/css/tailwind.css'
</script>