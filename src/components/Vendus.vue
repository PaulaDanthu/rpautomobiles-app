<template>
<div id="vendus">
    <section>
        <h1>{{ header }}</h1>
    </section>
    <section 
        class="
        flex
        flex-row
        justify-center
        mt-12
    ">
        <div v-for="model in models" 
            class="
            w-72
            h-52
            border
            border-solid
            border-black
        ">
            <img :src="model.url" :alt="model.alt" :key="model.id"
                class="
                w-full
                h-full
            " />

        </div>
    </section>
</div>    
</template>

<script>

export default {
    data () {
        return{
            models: [
                {id: 1, url: 'src/assets/NA.jpg', alt: 'NA'},
                {id: 2, url: 'src/assets/NB.jpg', alt: 'NB'},
                {id: 3, url: 'src/assets/NC.jpg', alt: 'NC'},
                {id: 4, url: 'src/assets/ND.jpg', alt: 'ND'}
            ],
            images: [

            ],
            header: 'Nous avons trouvé pour nos clients'
        }
        
    }

}

</script>

<style>

</style>