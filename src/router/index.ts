import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '@/views/Pokemon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name:'pokemon',
        component: Pokemon
      }
  ]
})

export default router
