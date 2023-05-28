<template>
    <div>
        <div class="contact">
            <div v-for="contact in contacts" :key="contact.id">
                <i :class="contact.iconClass"></i>
                <p>{{ contact.text }}</p>
            </div>
        </div>
        <p class="signature">
            Design & creation: Paula Danthu ®2023
        </p>
    </div>
</template>

<script>

export default {
    setup() {
        const contacts = [
            {
                id: 1,
                text: '79, chemin de Montjean 38410 Vaulnaveys-Le-Bas',
                iconClass: 'fa-solid fa-map-location-dot',
            },
            {
                id: 2,
                text: 'Nous sommes joignables facilement : 06 95 67 83 20',
                iconClass: 'fa-solid fa-phone-flip'
            },
            {
                id: 3,
                text: 'Pour prendre le rendez-vous contactez-nous du Lundi au Vendredi 9h-18h',
                iconClass: 'fa-sharp fa-solid fa-calendar'
            }
        ]

        return {
            contacts
        }
    }
}

</script>

<style scoped>
* {
    margin-top: 2rem;
    text-align: center;
    background-color: #083344;
    color: #EEF0EB;
}

.contact {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}
.signature {
    padding-bottom: 2rem;
    margin-top: 5rem;
}
.contact p {
    width: 11rem;
    padding-bottom: 2rem;
}

.contact div {
    height: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
</style>