<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />

        <!-- Navigation -->
        <div class="navigate">
            <div class="toggle-page left">
                <i @click="prevSlide" class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="toggle-page right">
                <i @click="nextSlide" class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>

</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    setup() {
        const currentSlide = ref(1)
        const getSlideCount = ref(null)

        // next slide
        const nextSlide = () => {
            if(currentSlide.value === getSlideCount.value) {
                console.log(currentSlide.value)
                currentSlide.value = 1
                return
            }
            currentSlide.value += 1
        }

        // prev slide
        const prevSlide = () => {
            if(currentSlide.value === 1) {
                console.log(currentSlide.value)
                currentSlide.value = getSlideCount.value
                return
            }
            currentSlide.value -= 1
        }

        onMounted(() =>  {
            getSlideCount.value = document.querySelectorAll(".slide").length
        })


        return {currentSlide, getSlideCount, nextSlide, prevSlide}
    }
}
</script>
<style>
.navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>