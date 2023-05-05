import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '@/views/Pokemon.vue'
import FormCad from '@/views/FormCad.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name:'pokemon',
        component: Pokemon
      },
      {
        path: '/add',
        name: 'add',
        component: FormCad
      }
  ]
})

export default router
