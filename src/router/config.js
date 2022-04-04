
import Home from '../views/Home.vue'

const options = {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,

    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/complain',
      name: 'Complain',
      component: () => import('../views/Complain.vue')
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('../views/Help.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/user/Login.vue')
    },
    {
      path: '/reg',
      name: 'Reg',
      component: () => import('../views/user/Reg.vue')
    },
    {
      path: '/resetpass',
      name: 'ResetPass',
      component: () => import('../views/user/ResetPass.vue')
    }
  ]
}

export default options
