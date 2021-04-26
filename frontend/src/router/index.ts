import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'
import App from '@/layouts/MainPage/index.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LayOne',
    component: App,
    redirect:'/home',
    children:[
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0}
  }
})
router.beforeEach((to,from,next)=>{

  next()
})


export default router
