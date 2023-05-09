import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MazdaMX5 from '../components/MazdaMX5.vue'
import About from '../components/About.vue'
import Offre from '../components/Offre.vue'
import Vendus from '../components/Vendus.vue'
import Contact from '../components/Contact.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/mazdamx5', name: 'MazdaMX5', component: MazdaMX5},
    {path: '/about', name: 'About', component: About},
    {path: '/offre', name: 'Offre', component: Offre},
    {path: '/vendus', name: 'Vendus', component: Vendus},
    {path: '/contact', name: 'Contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router