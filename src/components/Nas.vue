<template class="flex flex-row">
    <h1 
        class="
        font-bold
        text-3xl
        mb-8
        mt-8
        text-center
    ">Mazda MX5 trouvé pour nos clients</h1>
    <section class="mt-8">
        <div class="card">
            <div>
                <img :src="models[0].url" :alt="models[0].alt" :key="models[0].id" /> 
            </div>
            <h1 
                class="
                mt-8
                text-center
                font-bold
                text-2xl    
            ">Mazda MX5 NA</h1>
            <p 
                class="
                text-center
                text-xl
                mt-4
                mb-8    
            ">1re génération - NA (1989-1998)</p>
            <carousel 
                :pagination="true"
                :navigation="true"
                :startAutoPlay="true"
                :timeout="4000"
                v-slot="{ currentSlide }" 
                class="
                relative
                w-3/6
            ">
                <slide v-for="(slide, index) in carouselSlidesNa" :key="index">
                    <div v-show="currentSlide === index+1">
                        <img :src="`src/assets/NA/${slide}.png`" alt="na">
                    </div>
                </slide>
            </carousel> 
        </div>
    </section>
    <section class="mt-8">
        <div class="card">
            <div>
                <img :src="models[1].url" :alt="models[1].alt" :key="models[1].id" /> 
            </div>
            <h1 
                class="
                mt-8
                text-center
                font-bold
                text-2xl    
            ">Mazda MX5 NB</h1>
            <p 
                class="
                text-center
                text-xl
                mt-4
                mb-8    
            ">2e génération - NB (1998-2005)</p>
            <carousel 
                :pagination="true"
                :navigation="true"
                :startAutoPlay="false"
                :timeout="4000"
                v-slot="{ currentSlide }" 
                class="
                relative
                w-3/6
            ">
                <slide v-for="(slide, index) in carouselSlidesNb" :key="index">
                    <div v-show="currentSlide === index+1">
                        <img :src="`src/assets/NB/${slide}.png`" alt="nb">
                    </div>
                </slide>
            </carousel> 
        </div>
    </section>
</template>

<script>
import Carousel from './Carousel.vue'
import Slide from './Slide.vue'

export default{
setup() {
    const models = [
        {id: 1, url: 'src/assets/NA.jpg', alt: 'NA'},
        {id: 2, url: 'src/assets/NB.jpg', alt: 'NB'},
        {id: 3, url: 'src/assets/NC.jpg', alt: 'NC'},
        {id: 4, url: 'src/assets/ND.jpg', alt: 'ND'}
    ]
    
    const carouselSlidesNa = [
        'na-1', 
        'na-2', 
        'na-3' 
    ]

    const carouselSlidesNb = [
        'nb-1', 
        'nb-2', 
        'nb-3', 
        'nb-4', 
        'nb-5', 
        'nb-6', 
        'nb-7', 
        'nb-8', 
        'nb-9', 
        'nb-10', 
        'nb-11', 
        'nb-12', 
        'nb-13', 
        'nb-14', 
        'nb-15', 
        'nb-16', 
        'nb-17']
    
    return { models, carouselSlidesNa, carouselSlidesNb }    
    },

    components: {
        'carousel' : Carousel,
        'slide' : Slide
    }
}
</script>

<style>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>