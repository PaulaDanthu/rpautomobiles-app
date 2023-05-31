<template>
    <div id="popup"
        class="
        w-96
        fixed
        z-20
        m-52
        bg-cyan-950
        text-center
        p-8
        text-white
        border
        border-solid
    ">
    <h1>Ce site web utilise des cookies.</h1>
    <p 
        class="
        mb-12
    ">Les cookies nous permettent de personnaliser le contenu et les annonces, d'offrir des fonctionnalités relatives aux médias sociaux et d'analyser notre trafic. Nous partageons également des informations sur l'utilisation de notre site avec nos partenaires de médias sociaux, de publicité et d'analyse, qui peuvent combiner celles-ci avec d'autres informations que vous leur avez fournies ou qu'ils ont collectées lors de votre utilisation de leurs services.</p>
    <button @click="$emit('close-not-show')"
        class="
        bg-blue-500
        hover:bg-blue-300
        py-2
        px-4
        mr-2
    ">Accepter</button>
    <button @click="$emit('close-not-show')"
        class="
        bg-blue-500
        hover:bg-blue-300
        py-2
        px-4
        ml-2
    ">Refuser</button>
    </div>
</template>


<style>
#popup {
    color: #EEF0EB;
    border-color: #EEF0EB;
}
</style>