
<template>
  <div id="app" class="font-sans">
    <nav 
      class="
        bg-cyan-950
        text-sky-50
        pt-2
        pb-2
        flex
        justify-center
        ">
        <router-link to="/" class="pr-8">ACCUEIL</router-link>
        <router-link to="/mazdamx5" class="pr-8">MAZDA MX5</router-link>
        <router-link to="/about" class="pr-8">NOUS</router-link>
        <router-link to="/offre" class="pr-8">OFFRE</router-link>
        <router-link to="/vendus" class="pr-8">VENDUS</router-link>
        <router-link to="/contact">CONTACT</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
  
</script>

<style>

</style>
