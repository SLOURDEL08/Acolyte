<template>
<div>   <ExpertiseSection />
    <ProjectsSection />
    <ApproachSection />
    <HorizonSection /></div>

</template>

<script setup>

</script>

<style scoped>
.content-section {
  width: 100%;
}

.text {
  opacity: 0;
}

.custom-cursor{
    cursor: url("/homepage/public/img/interieur.webp"), auto !important;
}
.custom-cursor:hover{
    cursor: url("/homepage/public/img/interieur.webp"), auto !important;
}


@media screen and (max-width: 1072px){

.imgtalent{
  height: 600px;
  object-fit: cover;
}

.titled{
  font-size:60px;
}



}

@media screen and (max-width: 770px){

  .titled{
  font-size:40px;
}



}

@media screen and (max-width: 400px){

  .titled{
  font-size:20px;
  line-height: 1.2;
}


}
</style>