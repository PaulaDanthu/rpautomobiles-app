<template>
    <h1>
        Nos services
    </h1>
    <div class="offre">
        <div v-for="service in services" :key="service.id" class="offre-card">
            <h2>{{ service.title }}</h2>
            <p>{{ service.text }}</p>
        </div>
    </div>
    <my-footer />
</template>

<script>
import Footer from './Footer.vue';

export default {
    setup() {
        const services = [
            {
                id: 1,
                title: "Comment ça marche ?",
                text: "Vous recherchez un véhicule : Envoyez-nous un mail directement à notre adresse email ou remplissez le formulaire (word ou pdf) en nous indiquant vos souhaits. Dans les 48H nous vous indiquerons s'il est possible de trouver la voiture de vos rêves. Nous sélectionnons uniquement des véhicules contrôlés, révisés avec carnet d'entretien. Bien évidemment, si vous avez vu sur un site d'annonces automobiles (mobile.de, autoscout24.fr,...) un véhicule qui vous convient, nous pouvons entrer en contact avec le vendeur, prendre tous les renseignements afférents et vous donner nos conseils quant à l'achat de celui-ci. Attention : nous ne sommes pas mandataire automobile et n'avancons pas les fonds, nous ne sommes que prestataire de service."
            },
            {
                id: 2,
                title: "Et les papiers ?",
                text: "Notre tarif est tout compris, à savoir : le convoyage jusqu'en Alsace, la carte grise temporaire allemande et l'assurance de transit, plaques de transit, le contrôle technique français, le certificat de conformité européen. Il restera uniquement à votre charge, avant d'aller à la préfecture pour faire votre carte grise (voir la section FAQ), et le quitus fiscal gratuit. Notre tarif est un tarif fixe : il est de 1500 euros TTC à rajouter au prix négocié (si possible) comprenant la livraison en Alsace. Nous ne prenons pas en compte le prix de la voiture recherchée, vous évitant un tarif proportionnel et ainsi les éventuelles mauvaises surprises. La livraison dans le reste de la France demandera un supplément.",
            },
            {
                id: 3,
                title: "Le paiement",
                text: "Au niveau du règlement, vous avez 2 possibilités : soit le règlement sur notre compte professionnel et lorsque nous sommes sur place, après inspection du véhicule, nous réglons le vendeur, soit le règlement directement au vendeur, vous ne réglez sur notre compte que le montant de notre commission.Dans le dernier cas, il faut être conscient que l'auto est ainsi payée d'avance, et qu'en cas de souci sur place, il est difficile de revenir en arrière. C'est la raison pour laquelle pour le moment 100 % de nos clients ont choisi la première solution. Nous n'avons aucun intérêt financière en sus mais nous préfèrons attirer votre attention sur ce point."
            }
        ]
        
        return {
            services
        }
    },

    components: {
        'my-footer': Footer
    }
}

</script>

<style>
.offre {
    margin-right: 5rem;
    margin-left: 5rem;
    display: flex;
}

.offre-card {
    margin: 1rem;
    padding: 1rem;
    background-color: #083344;
    color: #EEF0EB;
}

</style>