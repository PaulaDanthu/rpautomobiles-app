<template class="flex flex-row">
    <section class="mt-8">
        <div class="card">
            <h2>Mazda MX5 NA</h2>
            <p 
                class="
                text-center
                text-xl
                mt-4
                mb-8    
            ">1re génération - NA (1989-1998)</p>
            <div 
                class="
                relative
            ">
                <div v-for="(slide, index) in carouselSlidesNa" :key="carouselSlidesNa.id">
                    <div v-show="currentSlide === index+1">
                        <img :src="slide.name" alt="na" class="img-carousel">
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
        
        const carouselSlidesNa = [
            {id: 1, name: 'src/assets/NA/na-1.png'}, 
            {id: 2, name: 'src/assets/NA/na-2.png'}, 
            {id: 3, name: 'src/assets/NA/na-3.png'} 
        ]

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
            getSlideCount.value = carouselSlidesNa.length
        })
        
        return { 
            carouselSlidesNa,
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
}

.navigate {
    padding: 0 16px;
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
    width: 60px;
    height: 60px;
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