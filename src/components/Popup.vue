<template>
    <div id="popup" v-if="isPopupOpen"
        class="
        w-96
        absolute
        z-20
        m-52
        bg-white
        text-center
        p-8
    ">
        <button @click="closePopup()"
            class="
            bg-blue-500
            hover:bg-blue-300
            py-4
            px-8
        ">Close</button>
        <h1 
            class="
            mb-12
            mt-12
        ">Cookies</h1>
        <p 
            class="
            mb-12
            mt-12
        ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi error non quam dicta voluptate harum sunt quas repellendus recusandae repellat ullam, ab quo quasi eveniet minus! At nisi sunt hic?</p>
    </div>
</template>

<script>


</script>

<style>
</style>