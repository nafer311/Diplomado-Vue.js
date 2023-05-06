import { createRouter, createWebHistory } from 'vue-router'
import InicioPrincipal from '../paginas/InicioPrincipal.vue'
import BlogPrincipal from '../paginas/BlogPrincipal.vue'
import ForosPrincipal from '../paginas/ForosPrincipal.vue'
import ResponseForo from '../paginas/ResponseForo.vue'
import ComunicatePrincipal from '../paginas/ComunicatePrincipal.vue'
import LoginPrincipal from '../paginas/LoginPrincipal.vue'
import LoginAdmin from '../paginas/LoginAdmin.vue'
import RegistrarUsuario from '../paginas/RegistrarUsuario.vue'
import DashboardPrincipal from '../admin/DashboardPrincipal.vue'
import ListadoUsuarios from '../admin/ListadoUsuarios.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioPrincipal
    }, {
      path: '/InicioPrincipal',
      name: 'InicioPrincipal',
      component: InicioPrincipal
    }, {
      path: '/BlogPrincipal',
      name: 'BlogPrincipal',
      component: BlogPrincipal
    }, {
      path: '/ComunicatePrincipal',
      name: 'ComunicatePrincipal',
      component: ComunicatePrincipal
    },
    {
      path: '/LoginPrincipal',
      name: 'LoginPrincipal',
      component: LoginPrincipal
    },
    {
      path: '/LoginAdmin',
      name: 'LoginAdmin',
      component: LoginAdmin
    },
    {
      path: '/RegistrarUsuario',
      name: 'RegistrarUsuario',
      component: RegistrarUsuario
    },
    {
      path: '/DashboardPrincipal',
      name: 'DashboardPrincipal',
      component: DashboardPrincipal
    },
    {
      path: '/ListadoUsuarios',
      name: 'ListadoUsuarios',
      component: ListadoUsuarios
    },
    {
      path: '/ForosPrincipal',
      name: 'ForosPrincipal',
      component: ForosPrincipal
    },
    {
      path: '/ForosPrincipal/ResponseForo/:id',
      name: 'ResponseForo',
      component: ResponseForo
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
