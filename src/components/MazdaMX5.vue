<template>
    <h1>
        Mazda MX5
    </h1>
    <div v-for="model in models" :key="model.id" class="model-article">
        <img :src="`src/assets/${model.name}.jpg`" :alt="model.alt">
        <article>
            <h2>{{ model.text }}</h2>
            <p>{{ model.desc }}</p>
        </article>
    </div>
    <my-footer />
</template>

<script>
import Footer from './Footer.vue';
import { ref } from 'vue'

export default {
    setup() {
        const models = ref([
            {id:1, 
            name: 'NA', 
            alt: 'na', 
            text: '1re génération - NA (1989-1998)', 
            desc: "La première génération de MX-5 (reconnaissable dans le numéro de série sur la carte grise grâce aux 4ème et 5ème caractères NA, comme JMZNA) apparaît tout à la fin des années 1980 dans un contexte difficile pour les spiders et autres roadsters européens ou encore les petits roadsters anglais sacrifiés sur l'autel de la sécurité et des normes antipollution toujours plus draconiennes. L'Alfa Romeo Spider, déjà considérée comme une voiture de collection, reste la seule représentante de cette catégorie. Sa première apparition officielle a lieu lors du Chicago Motor Show en février 1989. Présentée au salon de Genève en mars 1989, elle déclenche immédiatement une cure de jouvence dans la production automobile. Elle est abordable, fiable et facile à entretenir, s’impose comme un cabriolet sportif et amusant, en rendant un hommage particulier aux Lotus Elan, Triumph Spitfire et Alfa Romeo Duetto dont se sont fortement inspirés les ingénieurs nippons. En 1990, la MX-5 reçoit un kit de conversion BBR Turbo pour le Royaume-Uni avec 150 ch et une vitesse maximale d'environ 210 km/h. Elle a connu un restylage (surtout à l'intérieur) en 1994. À cette occasion, l'unique moteur 1,6 L 115 ch a été remplacé par le 1,6 L 90 ch et le 1,8 L 130 ch."},
            {id:2, 
            name: 'NB', 
            alt: 'nb', 
            text: '2e génération - NB (1998-2005)',
            desc: "La première génération qui se satisfaisait du strict nécessaire, est remplacée au milieu des années 1990 par une version au style renouvelé par des optiques fixes. Malgré la mode de l’escalade d'équipements ne cessant d’alourdir et de compliquer les véhicules de la production mondiale, les ingénieurs de Mazda ont réussi à limiter la hausse de son poids à une centaine de kilogrammes, et ce, malgré la rigidité accrue de la caisse. Les motorisations sont une 4-cylindres 1,6 L 110 ch ou 1,8 L 140 ch. En 1999 sort la version 10th Anniversary, également surnommée 10 AE. Basée sur la version 1,8 L 140 ch et produite à 7 500 exemplaires numérotés (34 pour la France), elle se distingue par sa couleur extérieure inédite Innocent Blue Mica, ses jantes 15 pouces polies, un intérieur cuir noir / Alcantara bleu accompagné d'une capote de couleur bleue. Elle était pourvue d'un badge sous le répétiteur latéral (côté volant, à gauche pour les LHD Left Hand Drive, à droite pour les RHD Right Hand Drive) qui indiquait le numéro dans la série. Elle est surtout la première version de la MX-5 à être équipée d'une boîte mécanique à 6 rapports.Elle a connu un restylage appelé NBFL en 2001. L’évolution a porté aussi sur le moteur 1,8 l qui a été équipé d’un déphaseur d’arbre a came (VVT) pour obtenir 146 ch à 7 000 tr/min. Le 1,6 L n’a pas évolué. En 2002 est sortie uniquement en Australie la rare série spéciale MX5 SP à moteur 1,8 Turbo 211 ch à 6 800 tr/min. En 2004 est sortie au Japon et aux États-Unis la version Mazdaspeed turbo 180 ch à 6 000 tr/min. En 2004, sur certains marchés, Mazda proposa une version coupé, la MX-5 Roadster Coupé Type-S produite seulement à 350 exemplaires"},
            {id:3, 
            name: 'NC', 
            alt: 'nc',
            text: '3e génération - NC (2005-2015)',
            desc: "La troisième génération est présentée avec des nouvelles motorisations plus puissantes, une rigidité encore en hausse et malgré des équipements supplémentaires, en particulier dans le domaine de la sécurité, un poids qui n'augmente que d'une dizaine de kilos. Bien que présente sur d'autres marchés, Mazda Europe refuse de proposer au marché européen des options pratiques comme le limiteur de vitesse et la boîte automatique (6 rapports). La motorisation est soit le 1,8 L 126 ch, soit le 2,0 L 160 ch. Mais la grande nouveauté de cette 3e génération est, qu'en plus de la version à capote souple (soft top), apparaît conjointement une version à toit dur (hard top) escamotable électriquement dans le coffre qui, une fois mis en place, transforme le cabriolet en un élégant coupé. La première série spéciale pour le modèle NC fut la SSP 3e Génération équipée d'un moteur de 2,0 L, de jantes spécifiques, d'une sellerie en cuir rouge, d'une peinture « velocity red» et de toutes les options présentes sur la 2,0 L. L'édition 2009 de la MX-5, présentée au Mondial de l'automobile de Paris de 2008 et commercialisée à partir de juin 2009, présente quelques modifications esthétiques et techniques. Sur le plan du style, les principaux changements concernent l'avant redessiné qui intègre désormais des éléments de modèles plus récents de Mazda comme la calandre plus large et de nouveaux phares et feux antibrouillard. Certains détails du style intérieur ont aussi été revus (console centrale réaménagée, instrumentation modifiée, poignées de porte revues...). La motorisation 2 litres voit son régime maximum porté de 7 000 à 7 500 tr/min sans modification de la puissance. En 2012, BBR était de retour en collaboration avec Cosworth pour proposer un kit compresseur pour donner des ailes à la MX-5. Résultats : 217 ch sur le 1.8i et de 235 à 241 ch sur le 2.0i L'édition 2013 de la MX-5, commercialisée à partir de novembre 2012, présente des modifications esthétiques découlant principalement de mises en conformité techniques et réglementaires. Sur le plan du style, le principal changement concerne une fois de plus l'avant avec un nouveau pare-chocs et un nouveau capot aptes à répondre aux normes en vigueur sur les chocs piétons. Le pare-chocs dissimule en effet un capteur qui, en cas de choc, déclenche des explosifs permettant de surélever le capot pour limiter les blessures de piétons. Conséquence indirecte : disparition du catalogue accessoires de la marque de jantes supérieures à 17 pouces risquant de déclencher les explosifs de manière intempestive. Sur motorisation 2,0 L, retour du Soft-Top et apparition de l'option Sièges Recaro sur le marché français sur la finition Performance.En 2013, BBR pousse le bouchon encore plus loin avec une version <<Stage 2>> de son kit compresseur Cosworth : 231 ch sur le 1.8i et de 252 à 258 ch sur le 2.0i. Pour célébrer les 20 ans de production de la MX-5, Mazda a présenté au salon de Francfort de 2009 le concept car « MX-5 Superlight version ». Le prototype a été réalisé à partir d'une MX-5 NC FL 1,8 L 126 ch de série par le centre de recherche et développement européen de Mazda situé à d'Oberursel en Allemagne3. Pour cette voiture dépourvue de pare-brise, le poids ramené de 1 080 à 995 kg permet d'améliorer les performances du moteur 1,8 litre : le 0 à 100 km/h est effectué en 8,9 secondes au lieu de 9,9 secondes pour le modèle de série."},
            {id:4, 
            name: 'ND', 
            alt: 'nd',
            text: '4e génération - ND (2015-)',
            desc: "La Mazda MX-5 ND, la quatrième génération du roadster Mazda dévoilée au salon international de l'automobile de Genève 2015, est lancée en septembre4. Elle est élue « World Car of the Year 2016 » (voiture mondiale de l'année 2016) à l'occasion du salon de New York en mars 2016.Le constructeur japonais a souvent affirmé, comme Henry Ford ôtait son chapeau en voyant une Alfa Romeo, qu'il serait honoré de pouvoir, un jour, travailler avec le constructeur milanais. Grâce à un protocole signé le 23 mai 2012, ses vœux furent exaucés. Un accord de coopération entre le groupe Fiat SpA et Mazda fut officiellement signé le 18 janvier 2013 qui verra les deux constructeurs allier leurs talents pour créer une nouvelle génération de MX-5 avec le concours d'Alfa Romeo. Cette étude devant déboucher sur deux automobiles reposant sur la même plateforme mais avec des carrosseries et motorisations spécifiques.En mars 2015, Fiat annonce que le modèle conçu en commun ne portera pas le nom Alfa Romeo mais Fiat qui prévoit de construire une version plus puissante sous la marque Abarth, ce sera la Fiat 124 Spider7,8. La nouvelle MX-5 sera présentée avant le modèle italien."}
        ])

        return {
            models
        }
    },

    components: {
        'my-footer': Footer
    }
}

</script>

<style>
img {
    width: 25rem;
    height: 20rem;
    margin: 2rem;
}
.model-article {
    display: flex;
    align-items: start;
    padding: 2rem;
    margin: 1rem;
}

.model-article:nth-child(even) {
    flex-direction: row-reverse;
    background-color: #083344;
    color: #EEF0EB;
}

.model-article:nth-child(odd) {
    background-color: #EEF0EB;
    color: #083344;
}
</style>