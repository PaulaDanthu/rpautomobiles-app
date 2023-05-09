<template>
    <div 
        class="
        ">
        <video autoplay muted loop src="../assets/Road-Tripping.mp4" type="video/mp4" 
        class="
            z-0
            
        "></video>
        <h1 
        class="
            z-20
            -mt-64
            text-center
            text-sky-50
            text-2xl
        ">MX5 Center | RP Automobiles</h1>
        <h2
        class="
            z-20
            text-center
            text-sky-50
        ">Votre Mazda MX5 sur mesure</h2>
    </div>
    <div 
    class="
        w-40
        bg-black    
    ">
        
    </div>

    <div
    class="
        w-40    
    ">

    </div>

    <div
    class="
        w-40    
    ">

    </div>


    <my-footer />

</template>

<script>
import Footer from '../components/Footer.vue'

export default {
    name: 'App',
    components: {
        'my-footer' : Footer
    }
}
</script>

<style>

</style>
