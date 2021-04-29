import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'layout',
    component: ()=>import('@/layout/index.vue'),
    redirect:'/home',
    children:[
      { 
        path:'/home',
        name:'Home',
        component:()=>import('@/views/Home.vue')
      },
      { 
        path:'/models',
        name:'Models',
        component:()=>import('@/views/Models.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
