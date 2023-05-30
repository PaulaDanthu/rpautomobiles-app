<template>
    <GoogleMap api-key="AIzaSyC3V_2iMFBIbhaGaSi1Y06bCeqAfo-MmFs" class="map" :center="center" :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
    setup() {
        const center = { lat: 45.0935173034668, lng: 5.797624111175537 };
        
        return { center };
    },

    components: { GoogleMap, Marker }

})
</script>
<style>
.map {
    width: 100%; 
    height: 500px;
    padding: 1rem 5rem 1rem 5rem;
    margin-top: 4rem;
    background-color: #153243;
}
</style>