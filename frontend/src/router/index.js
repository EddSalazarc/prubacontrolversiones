import { createRouter, createWebHistory } from 'vue-router';
import primera from '../views/PrimeraVentana.vue';
import segunda from '@/views/SegundaVentana.vue';
import inicio  from '@/views/Principal.vue';

const routes = [
  {
    path:'/',component:inicio,
  },

  {
    path:'/primera',component: primera,
  },
  {
    path:'/segunda',component: segunda,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router