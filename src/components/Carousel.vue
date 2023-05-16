<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />

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

</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    props: [
        'startAutoPlay',
        'timeout',
        'navigation',
        'pagination'
    ],
    setup(props) {
        const currentSlide = ref(1)
        const getSlideCount = ref(null)
        const autoPlayEnabled = ref(
            props.startAutoPlay === undefined ? true : props.startAutoPlay)
        const timeoutDuration = ref(
            props.timeout === undefined ? 5000 : props.timeout)
        const paginationEnabled = ref(
            props.pagination === undefined ? true : props.pagination)
        const navigationEnabled = ref(
            props.navigation === undefined ? true : props.navigation
        )

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
            getSlideCount.value = document.querySelectorAll(".slide").length
        })


        return {
            currentSlide, 
            getSlideCount, 
            nextSlide, 
            prevSlide, 
            goToSlide, 
            paginationEnabled,
            navigationEnabled }
    }
}
</script>
<style>
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