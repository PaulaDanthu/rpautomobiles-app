<template>
<div id="vendus">
    <div class="
        flex
        items-center
        flex-col 
        border
        border-black
        border-solid
    ">
        <nas />
        <carousel 
            :pagination="true"
            :navigation="false"
            v-slot="{ currentSlide }" 
            class="
            relative
            w-3/6
        ">
            <slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index+1" 
                    class="
                    
                ">
                    <img :src="`src/assets/NA/${slide}.png`" alt="na">
                </div>
            </slide>
        </carousel> 
    </div>
</div>         
</template>

<script>
import Carousel from './Carousel.vue'
import Slide from './Slide.vue'
import Nas from './Nas.vue'

export default {
    setup() {1
        const carouselSlides = ['na-1', 'na-2', 'na-3']

        return{ carouselSlides }
    },

    components: {
        'carousel' : Carousel,
        'slide' : Slide,
        'nas' : Nas
    }
}
</script>

<style scoped>

</style>