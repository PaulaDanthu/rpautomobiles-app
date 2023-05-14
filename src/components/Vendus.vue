<template>
<div id="vendus">
    <carousel class="carousel" v-slot="{ currentSlide }">
        <slide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index+1" class="slide-info">
                <img :src="`src/assets/NA/${slide}.png`" alt="na">
            </div>
        </slide>
    </carousel> 
</div>         
</template>

<script>
import Carousel from './Carousel.vue'
import Slide from './Slide.vue'

export default {
    setup() {
        const carouselSlides = ['na-1', 'na-2', 'na-3']

        return{carouselSlides}
    },

    components: {
        'carousel' : Carousel,
        'slide' : Slide
    }
}
</script>

<style scoped>
.carousel{
    position: relative;
    max-height: 100vh;
    height: 100vh; 
}
.slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
}

.img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>