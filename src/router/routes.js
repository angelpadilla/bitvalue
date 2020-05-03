import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
    children: [
      {
        path: 'crypto/:currency',
        name: 'Singlecrypto',
        props: true,
        component: () => import('../components/Singlecrypto.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/rates',
    name: 'Rates',
    component: () => import('../components/Rates.vue')
  },
  {path: '*', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
