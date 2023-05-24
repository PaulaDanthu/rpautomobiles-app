<template>
<div id="vendus">
    <div  
        class="
        flex
        items-center
        flex-col 
        border
        border-black
        border-solid
    ">
    <nas />
    </div>
</div>         
</template>

<script>
import Nas from './Nas.vue'

export default {
    setup() {
        return{}
    },

    components: {
        'nas' : Nas
    }
}
</script>

<style scoped>

</style>