<template class="flex flex-row">
    <section class="mt-8">
        <div class="card">
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
            <div 
                class="
                relative
            ">
                <div v-for="(slide, index) in carouselSlidesNb" :key="carouselSlidesNb.id">
                    <div v-show="currentSlide === index+1">
                        <img :src="`src/assets/NB/${slide.name}.png`" alt="nb" class="img-carousel">
                    </div>
                </div>
                        <!-- Navigation -->
                <div v-if="navigationEnabled" class="navigate">
                    <div class="toggle-page left">
                        <i @click="prevSlide" class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div class="toggle-page right">
                        <i @click="nextSlide" class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>

                <!-- Pagination-->
                <div v-if="paginationEnabled" class="pagination">
                    <span 
                    v-for="(slide, index) in getSlideCount" :key="index" 
                    :class="{active : index+1 === currentSlide}"
                    @click="goToSlide(index)">
                </span>
                </div>
            </div> 
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default{
setup() {
    
    const carouselSlidesNb = [
    {id: 1, name: 'nb-1'}, 
    {id: 2, name: 'nb-2'}, 
    {id: 3, name: 'nb-3'}, 
    {id: 4, name: 'nb-4'}, 
    {id: 5, name: 'nb-5'}, 
    {id: 6, name: 'nb-6'}, 
    {id: 7, name: 'nb-7'}, 
    {id: 8, name: 'nb-8'}, 
    {id: 9, name: 'nb-9'}, 
    {id: 10, name: 'nb-10'}, 
    {id: 11, name: 'nb-11'},
    {id: 12, name: 'nb-12'}, 
    {id: 13, name: 'nb-13'}, 
    {id: 14, name: 'nb-14'}, 
    {id: 15, name: 'nb-15'}, 
    {id: 16, name: 'nb-16'}, 
    {id: 17, name: 'nb-17'}]

    const currentSlide = ref(1)
        const getSlideCount = ref(null)
        const autoPlayEnabled = ref(false)
        const timeoutDuration = ref(5000)
        const paginationEnabled = ref(false)
        const navigationEnabled = ref(true)

        // next slide
        const nextSlide = () => {
            if(currentSlide.value === getSlideCount.value) {
                currentSlide.value = 1
                return
            }
            currentSlide.value += 1
        }

        // prev slide
        const prevSlide = () => {
            if(currentSlide.value === 1) {

                currentSlide.value = getSlideCount.value
                return
            }
            currentSlide.value -= 1
        }

        const goToSlide = (index) => {
            currentSlide.value = index+1
        }

        // autoplay
        const autoPlay = () => {
            setInterval(() => {
                nextSlide()
            }, timeoutDuration.value)
        }
        if (autoPlayEnabled.value) {
            autoPlay()
        }

        onMounted(() =>  {
            getSlideCount.value = carouselSlidesNb.length
        })
    
    return { 
        carouselSlidesNb,
        currentSlide, 
        getSlideCount, 
        nextSlide, 
        prevSlide, 
        goToSlide, 
        paginationEnabled,
        navigationEnabled }    
    },

    components: {

    }
}
</script>

<style>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    background-color: #284B63;
    padding-bottom: 8rem;
    color: #EEF0EB;
}

.img-carousel {
    width: 20em;
    height: 15em;
}

.navigate {
    padding: 0 8px;
    height: 50%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    bottom: 0;
}

.toggle-page {
    display: flex;
    flex: 1;
}

.right {
    justify-content: flex-end;
}

i {
    cursor: pointer;
    display: flex!important;;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #083344;
    color: white;
}

.pagination {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 24px;
    gap: 16px;
}

span {
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
}
.active {
    background-color: #083344;
}
</style>