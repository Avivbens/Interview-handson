import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import reserveSeats from '../views/reserve-seats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/reserve',
    name: 'reserve-seats',
    component: reserveSeats
  }
]

const router = new VueRouter({
  routes
})

export default router
