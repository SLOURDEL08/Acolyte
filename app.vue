<template data-scroll-container >
<div>
  <Navbar />
    <NuxtPage />
  <Footer />
</div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import '~/assets/css/tailwind.css'
</script>