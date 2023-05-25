
<template>
  <div id="app" class="font-normal tracking-wider">
    <nav 
    class="
    pt-6
    pb-6
    pr-6
    flex
    justify-between
    sticky
    ">
        <router-link to="/" 
        class="
          pl-16
          text-xl
          ">MX5 CENTER | RP AUTOMOBILES</router-link>    
        <div>
          <router-link to="/mazdamx5" class="pr-8">Mazda MX5</router-link>
          <router-link to="/about" class="pr-8">Nous</router-link>
          <router-link to="/offre" class="pr-8">Offre</router-link>
          <router-link to="/vendus" class="pr-8">Vendus</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>

nav {
  background-color: #153243;
  color: #EEF0EB;
}

h1 {
  font-weight: bold;
  font-size: xx-large;
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
}

h2 {
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
}
</style>
