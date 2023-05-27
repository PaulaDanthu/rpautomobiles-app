<template>
    <GoogleMap api-key="AIzaSyC3V_2iMFBIbhaGaSi1Y06bCeqAfo-MmFs" class="map" :center="center" :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 45.0935173034668, lng: 5.797624111175537 };

        return { center };
    },
});
</script>
<style>
.map {
    width: 100%; 
    height: 500px;
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: 4rem;
}
</style>