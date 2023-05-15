<template>
<section 
        class="
        mt-12
        ml-0
    ">
    <h1 
        class="
        font-bold
        text-3xl
        mb-8
        text-center
    ">Mazda MX5 trouvé pour nos clients</h1>
    <div>
        <div 
            class="
            
        ">
            <img :src="models[0].url" :alt="models[0].alt" :key="models[0].id" /> 
        </div>
        <h1 
            class="
            mt-8
            text-center
            font-bold
            text-2xl    
        ">Mazda MX5 NA</h1>
        <p 
            class="
            text-center
            text-xl
            mt-4
            mb-8    
        ">1re génération - NA (1989-1998)</p>
    </div>
</section>
</template>

<script>
export default{
setup() {
    const models = [
        {id: 1, url: 'src/assets/NA.jpg', alt: 'NA'},
        {id: 2, url: 'src/assets/NB.jpg', alt: 'NB'},
        {id: 3, url: 'src/assets/NC.jpg', alt: 'NC'},
        {id: 4, url: 'src/assets/ND.jpg', alt: 'ND'}
    ]
    return { models }
    }
}
</script>

<style>

</style>