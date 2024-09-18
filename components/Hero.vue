<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Bienvenue</h1>
      <p>Découvrez nos services exceptionnels.</p>
      <button>En savoir plus</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url('/path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content {
  color: white;
  text-align: center;
}
button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>