<template>
<footer class="w-full  z-50 !bg-[#0F0B08] !p-5 ">
    <img src="/img/logofoot.webp" class="w-[500px]  text-left " />
    <img src="/svg/pasleboulevard.svg" class="w-44 pt-24 max-md:w-34  top-0 rotate-6 ml-20 -mb-8" />
    <div class="w-full border-b max-md:border-none  border-white text-left mt-10">
        <div class="w-full max-md:block flex items-center justify-between mb-10">
<div class="space-y-8 max-md:mb-10 max-md:border-b max-md:pb-10">

                        <span class="text-white max-md:text-lg text-2xl uppercase">544, rue des Forges,Trois-Rivières (Québec) G9A 2H5 </span>

               <div class="flex justify-start gap-4 font-[500] ">
            <button class="px-5 p-2.5 text-sm text-white leading-none border hover:bg-white hover:text-black hover:font-[500] transition-all duration-500 pb-2 border-white rounded-full uppercase">info@acolyte.ws</button>
                        <button class="px-5 p-2.5  text-sm leading-none text-white border border-white hover:bg-white hover:text-black hover:font-[500] transition-all duration-500 rounded-full pb-2 ">819 378-4242</button>

         </div>
</div>

         <div class="text-white max-w-[350px] max-md:w-[250px] max-lg:pt-0 max-md:items-start w-full max-md:flex max-md:flex-col max-md:float-right  space-y-4 pt-10  text-left">
            <p class="uppercase text-sm " >Notre sous-produit ne transforme pas l’eau en vin, mais pas loin.</p>
            <div class="flex gap-2  items-center ">
                <a class="text-xl underlined-white cursor-pointer" >Kork.ca</a>
                <img src="/img/arrow.svg" class="text-white w-4 h-4 -rotate-45" />
            </div>
         </div>

        </div>
      
    </div>
    <div class="flex justify-between max-lg:w-full max-lg:items-center max-lg:flex-col-reverse items-end max-lg:gap-10 mt-40 mb-10 text-white uppercase">
        <div><span class="font-light text-white max-md:order-2 tracking-widest ">© 2024 Acolyte, Tous droits réservés.</span><span class="text-white/60">-</span>  <span class="text-white/60 hover:underline underline-offset-2 ">Politique de confidentialité</span></div>
        <div class="w-[350px] ">
            <ul class="text-left max-lg:mt-10 space-y-2 text-sm max-lg:flex max-md:flex-wrap max-md:justify-center max-md:gap-y-6 max-lg:space-y-0  tracking-widest">
                <li class="flex group items-center cursor-pointer gap-3"><span>Facebook</span><img src="/img/arrow.svg" class="w-3.5 -rotate-45 pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"/></li>
                <li class="flex group items-center cursor-pointer gap-3"><span>Linkedin</span><img src="/img/arrow.svg" class="w-3.5 -rotate-45 pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"/></li>
                <li class="flex group items-center cursor-pointer gap-3"><span>Instagram</span><img src="/img/arrow.svg" class="w-3.5 -rotate-45 pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"/></li>
                <li class="flex group items-center cursor-pointer gap-3"><span>Behance</span><img src="/img/arrow.svg" class="w-3.5 -rotate-45 pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"/></li>
            </ul>
        </div>
    </div>
</footer>
</template>

<style scoped>

.underlined-white{
  position: relative;
}
.underlined-white::before{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 1.5px;
  background-color: #fff;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (hover: hover) and (pointer: fine) {
  .underlined-white:hover::before{
    left: 0;
    right: auto;
    width: 100%;
  }

  .grouped:hover a.underlined-white::before {
  left: 0;
  right: auto;
  width: 100%;
}
}

</style>