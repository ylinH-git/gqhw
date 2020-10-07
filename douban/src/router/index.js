import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mine',
    name:'mine',
    component: () => import('../views/Mine/mine.vue')
  },
  {
    path: '/broadcast',
    name:'broadcast',
    redirect:'/broadcast/movie',
    component: () => import('../views/Broadcast/broadcast.vue'),
    children:[{
      path:'movie',
      name:'movie',
      component:()=>import('../views/Broadcast/movie.vue')
    },{
      path:'read',
      name:'read',
      component:()=>import('../views/Broadcast/read.vue')
    },{
      path:'tv',
      name:'tv',
      component:()=>import('../views/Broadcast/tv.vue')
    },{
      path:'city',
      name:'city',
      component:()=>import('../views/Broadcast/city.vue')
    },{
      path:'music',
      name:'music',
      component:()=>import('../views/Broadcast/music.vue')
    },]
  },
  {
    path: '/group',
    name:'group',
    component: () => import('../views/Group/group.vue')
  },
  {
    path: '/audio',
    name:'audio',
    component: () => import('../views/Audio/audio.vue')
  },
  {
    path: '/login',
    name:'login',
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/loginbyzh',
    name:'loginbyzh',
    component: () => import('../views/Login/loginbyzh.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
