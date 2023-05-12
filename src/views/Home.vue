<template>
    <section 
        class="
        flex
        flex-col-reverse
        items-center
    ">
        <div>
            <img src="../assets/mx5mazdamain.jpeg" alt="Mazda MX5 home page" class="
            w-screen
        ">
        </div>
        <div 
            class="
            bg-white
            flex
            flex-col
            items-center
            absolute
            -m-16
            pt-24
            pl-24
            pr-24
            pb-8
        ">
            <h1 
                class="
                mx-auto
                text-4xl
            ">MX5 Center | RP Automobiles</h1>
            <h2
                class="
                text-2xl
            ">Votre Mazda MX5 sur mesure</h2>
            
            <router-link to="/offre" class="
                border-solid
                border-black
                border
                mt-6
                pt-4
                pb-4
                pl-8
                pr-8
            ">Decouvrez notre offre</router-link>
        </div>
    </section>
    <section 
        class="
        flex
        mt-16
        justify-center
    ">
        <div 
            class="
            w-72  
            border
            border-solid
            border-gray-800
            border-r-0
            flex
            flex-col
        ">
            <h1
                class="
                text-5xl
                text-center
                pt-16
                pb-12
            ">NA</h1>
            <p 
                class="
                text-center
                pb-12
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis eius amet voluptatibus, suscipit nobis sapiente rerum repellendus quos pariatur?</p>
            <router-link to="/mazdamx5" 
                class="
                bg-cyan-950
                text-white
                text-center
                pt-4
                pb-4
                pl-8
                pr-8
                mr-12
                ml-12
                mb-16
            ">Plus d'info</router-link>
        </div>

        <div 
            class="
            w-72  
            border
            border-solid
            border-gray-800
            border-r-0
            flex
            flex-col
        ">
            <h1
                class="
                text-5xl
                text-center
                pt-16
                pb-12
            ">NB</h1>
            <p 
                class="
                text-center
                pb-12
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis eius amet voluptatibus, suscipit nobis sapiente rerum repellendus quos pariatur?</p>
            <router-link to="/mazdamx5" 
                class="
                bg-cyan-950
                text-white
                text-center
                pt-4
                pb-4
                pl-8
                pr-8
                mr-12
                ml-12
                mb-16
            ">Plus d'info</router-link>
        </div>

        <div 
            class="
            w-72  
            border
            border-solid
            border-gray-800
            border-r-0
            flex
            flex-col
        ">
            <h1
                class="
                text-5xl
                text-center
                pt-16
                pb-12
            ">NC</h1>
            <p 
                class="
                text-center
                pb-12
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis eius amet voluptatibus, suscipit nobis sapiente rerum repellendus quos pariatur?</p>
            <router-link to="/mazdamx5" 
                class="
                bg-cyan-950
                text-white
                text-center
                pt-4
                pb-4
                pl-8
                pr-8
                mr-12
                ml-12
                mb-16
            ">Plus d'info</router-link>
        </div>
        <div 
            class="
            w-72  
            border
            border-solid
            border-gray-800
            flex
            flex-col
        ">
            <h1
                class="
                text-5xl
                text-center
                pt-16
                pb-12
            ">ND</h1>
            <p 
                class="
                text-center
                pb-12
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis eius amet voluptatibus, suscipit nobis sapiente rerum repellendus quos pariatur?</p>
            <router-link to="/mazdamx5" 
                class="
                bg-cyan-950
                text-white
                text-center
                pt-4
                pb-4
                pl-8
                pr-8
                mr-12
                ml-12
                mb-16
            ">Plus d'info</router-link>
        </div>
    </section>

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
