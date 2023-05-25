<template>
    <div>
        <h1>
            Qui sommes nous?
        </h1>
        <div class="round-photos">
            <img src="../assets/robin.jpg" alt="robin">
            <img src="../assets/paula.jpg" alt="paula">
        </div>
        <p v-for="desc in descriptions"> {{ desc.text }}</p>
    </div>
        <my-footer />
</template>

<script>
import Footer from './Footer.vue'
import { ref } from 'vue'

export default {
    setup() {
        const descriptions = ref([
            {id: 1,
            text: "Diplômés en Commerce International et en Sciences Politiques, nous allions notre très bonne connaissance des cultures européennes et notre passion pour l'automobile. Nous parlons plusieurs langues étrangères (anglais, allemand, espagnol, polonais, tchèque, slovaque) et connaissons bien les différentes procédures d'achat dans les différents pays limitrophes. Situés sur Strasbourg, nous nous déplaçons en France et dans toute l'Europe pour expertiser, acheter ou livrer un véhicule.Nous ne sommes pas un mandataire automobile et vous mettons directement en relation avec le vendeur, qu'il soit professionnel ou particulier. Cette vente directe évite de nombreux frais liés aux intermédiaires comme le pratiquent les mandataires."},
            {id: 2,
            text: "Le marché allemand de l'automobile est très concurrentiel et propose des tarifs largement inférieurs au marché français. Par ailleurs, les Allemands prennent soin de leurs voitures et en changent régulièrement : question de mentalité et de standing. Le marché allemand est le plus grand marché automobile d'Europe et vous permettra de trouver un modèle allemand, français, japonais ou autres. Des modèles d'autres pays vous permettront également d'économiser, comme sur les allemandes, jusqu'à 30 %.Nous vous donnerons notre avis et conseils (meilleur rapport qualité/prix, revente,...). Une fois votre choix arrêté : nous négocions si c'est possible le véhicule et finalisons la vente."},
            {id: 3,
            text: "Vous cherchez une MX5 et vous ne voulez pas attendre 5 moi ? Achetez une occasion recente en Allemagne ! Votre voiture d'occasion au meilleur tarif depuis l'Allemagne : Audi, BMW, Mercedes, VW, toutes marques françaises, italiennes et japonaises.Nous sommes spécialisés en cabriolets type Mazda Mx5 et pick-up (Toyota, Mitsubishi, Isuzu,...) Depuis toujours, la passion de l'automobile nous anime, laissez-nous vous en faire profiter."
            }
        ])
        return { descriptions }
    },

    components: {
        'my-footer': Footer
    }
}

</script>

<style scoped>

p {
    margin-left: 5rem;
    margin-right: 5rem;
    padding: 2rem;
}

.round-photos {
    display: flex;
    justify-content: center;
}

img {
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
}
</style>