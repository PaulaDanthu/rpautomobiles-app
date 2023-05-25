<template class="flex flex-row">
    <section class="mt-8">
        <div class="card">
            <h1 
                class="
                mt-8
                text-center
                font-bold
                text-2xl    
            ">Mazda MX5 NC</h1>
            <p 
                class="
                text-center
                text-xl
                mt-4
                mb-8    
            ">3e génération - NC (2006-2015)</p>
            <div 
                class="
                relative
            ">
                <div v-for="(slide, index) in carouselSlidesNc" :key="carouselSlidesNc.id">
                    <div v-show="currentSlide === index+1">
                        <img :src="`src/assets/NC/${slide.name}.png`" alt="nc" class="img-carousel">
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
    
    const carouselSlidesNc = [
    {id: 1, name: 'nc-1'}, 
    {id: 2, name: 'nc-2'}, 
    {id: 3, name: 'nc-3'}, 
    {id: 4, name: 'nc-4'}, 
    {id: 5, name: 'nc-5'}, 
    {id: 6, name: 'nc-6'}, 
    {id: 7, name: 'nc-7'}, 
    {id: 8, name: 'nc-8'}, 
    {id: 9, name: 'nc-9'}, 
    {id: 10, name: 'nc-10'}, 
    {id: 11, name: 'nc-11'},
    {id: 12, name: 'nc-12'}, 
    {id: 13, name: 'nc-13'}]

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
            getSlideCount.value = carouselSlidesNc.length
        })
    
    return { 
        carouselSlidesNc,
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