import { createWebHistory, createRouter } from "vue-router";
import Persona from '../views/Persona.vue'
import Chatboot from '../views/Chatboot.vue'
import Geolocalizacion from '../views/Geolocalizacion.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Denuncia from '../views/Denuncia.vue'
import Denunciaanonima from '../views/Denunciaanonima.vue'
import Usuario from '../views/Usuario.vue'
import Informacion from '../views/Informacion.vue'
import Alerta from '../views/Alerta.vue'
import Eventos from '../views/Eventos.vue'
import Lista from '../views/Lista.vue'

const routes = [
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/Eventos',
        name:'Eventos',
        component:Eventos
    },
    {
        path:'/Chatboot',
        name:'Chatboot',
        component:Chatboot
    },
    {
        path:'/Alerta',
        name:'Alerta',
        component:Alerta
    },
    {
        path:'/Informacion',
        name:'Informacion',
        component:Informacion
    },
    {
        path:'/geolocalizacion',
        name:'Geolocalizacion',
        component:Geolocalizacion
    },
    {
        path:'/denunciaanonima',
        name:'Denunciaanonima',
        component:Denunciaanonima
    },
    {
        path:'/denuncia',
        name:'Denuncia',
        component:Denuncia
    },
    {
        path:'/persona',
        name:'Persona',
        component:Persona
    },
    {
        path:'/menu',
        name:'Menu',
        component:Menu
    },
    {
        path:'/usuario',
        name:'Usuario',
        component:Usuario
    },
    {
        path:'/lista',
        name:'Lista',
        component:Lista
    }
  

]

const router=createRouter({
    history:createWebHistory(),
    routes

})

export default router;