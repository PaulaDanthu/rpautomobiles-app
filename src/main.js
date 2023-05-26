import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'



createApp(App)
.use(router, VueGoogleMaps, {
    load: {
        key: "API_KEY"
    }
    })
.mount('#app')
