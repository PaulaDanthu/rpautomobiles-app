<template>
<section 
        class="
        flex
        flex-col
        items-center
        mt-12
    ">
        <div>
                <!-- todo: a carousel --> 
            <img v-for="na in nas" :src="na.url" :alt="na.alt" :key="na.id"
                :class="[ na.active ? 'visible' : 'invisible' ]"
                class="
                max-w-xl
                absolute
                -bottom-12
                
            "/> 
            <button @click.prevent="nextImageNa(na)" class="z-50 absolute">Next</button>
        </div>
</section>
</template>

<script>
export default{
setup() {
    const models = [
        {id: 1, url: 'src/assets/NA.jpg', alt: 'NA'},
        {id: 2, url: 'src/assets/NB.jpg', alt: 'NB'},
        {id: 3, url: 'src/assets/NC.jpg', alt: 'NC'},
        {id: 4, url: 'src/assets/ND.jpg', alt: 'ND'}
    ]

    const nas = [
        {id: 1, url: 'src/assets/NA/Mazda_MX5_8.png', alt: 'NA', active: false},
        {id: 2, url: 'src/assets/NA/Mazda_MX5_28.png', alt: 'NB', active: false},
        {id: 3, url: 'src/assets/NA/Mazda_MX5_40.png', alt: 'NC', active: true},
    ]

    function nextImageNa(na) {
        na.active = !na.active
    }

    return { models, nas, nextImageNa }
    }
}
</script>

<style>
.visible {
    display: block;
}

.invisible {
    display: none;
}

</style>