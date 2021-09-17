import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path:'/complain',
    name:'Complain',
    component:()=>import('../views/Complain.vue')
  },
  {
    path:'/help',
    name:'Help',
    component:()=>import('../views/Help.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/user/Login.vue')
  },
  {
    path:'/reg',
    name:'Reg',
    component:()=>import('../views/user/Reg.vue')
  },
  {
    path:'/resetpass',
    name:'ResetPass',
    component:()=>import('../views/user/ResetPass.vue')
  }
]

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 45,
      }
    }
  },
  history: createWebHistory(),
  routes,

})

export default router
