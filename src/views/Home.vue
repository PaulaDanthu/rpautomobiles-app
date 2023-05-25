<template>
    <section 
        class="
        flex
        flex-col-reverse
        items-center
    ">
        <popup />
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
            <p>La première génération de MX-5 (reconnaissable dans le numéro de série sur la carte grise grâce aux 4ème et 5ème caractères "NA", comme JMZNA) apparaît tout à la fin des années 1980 dans un contexte difficile pour les spiders et autres roadsters européens ou encore les petits roadsters anglais sacrifiés sur l'autel de la sécurité et des normes antipollution toujours plus draconiennes. L'Alfa Romeo Spider, déjà considérée comme une voiture de collection, reste la seule représentante de cette catégorie.</p>
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
            <p>La première génération qui se satisfaisait du strict nécessaire, est remplacée au milieu des années 1990 par une version au style renouvelé par des optiques fixes. Malgré la mode de l’escalade d'équipements ne cessant d’alourdir et de compliquer les véhicules de la production mondiale, les ingénieurs de Mazda ont réussi à limiter la hausse de son poids à une centaine de kilogrammes, et ce, malgré la rigidité accrue de la caisse.</p>
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
            <p>La troisième génération est présentée avec des nouvelles motorisations plus puissantes, une rigidité encore en hausse et malgré des équipements supplémentaires, en particulier dans le domaine de la sécurité, un poids qui n'augmente que d'une dizaine de kilos. Bien que présente sur d'autres marchés, Mazda Europe refuse de proposer au marché européen des options pratiques comme le limiteur de vitesse et la boîte automatique (6 rapports). La motorisation est soit le 1,8 L 126 ch, soit le 2,0 L 160 ch.</p>
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
            <p>La Mazda MX-5 ND, la quatrième génération du roadster Mazda dévoilée au salon international de l'automobile de Genève 2015, est lancée en septembre4. Elle est élue « World Car of the Year 2016 » (voiture mondiale de l'année 2016) à l'occasion du salon de New York en mars 2016.</p>
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
import Popup from '../components/Popup.vue'

export default {
    components: {
        'my-footer' : Footer,
        'popup': Popup
    }
    }

</script>

<style scoped>
p {
    text-align: center;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 26rem;
}

</style>
