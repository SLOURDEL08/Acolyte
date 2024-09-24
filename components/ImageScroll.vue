<template>
  <div class="image-scroll absolute  top-60  left-1/2 -translate-x-1/2 z-50 ">
    <img src="/public/svg/logo-big.svg" class="image   " />
  </div>
</template>

<script setup>

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