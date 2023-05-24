<template>
<div id="vendus">
    <div>
        <h1 
        class="
        font-bold
        text-3xl
        mb-8
        mt-8
        text-center
    ">Mazda MX5 trouvé pour nos clients</h1>
        <section class="
        flex
        items-center
        flex-row 
        ">
            <nas class="
                basis-1/4
                m-4
            "/>
            <nbs class="
                basis-1/4
                m-4
            "/>
        </section>
    </div>
</div>         
</template>

<script>
import Nas from './Nas.vue'
import Nbs from './Nbs.vue'

export default {
    setup() {
        return{}
    },

    components: {
        'nas' : Nas,
        'nbs' : Nbs
    }
}
</script>

<style scoped>

</style>