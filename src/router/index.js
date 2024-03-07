import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/FrontView.vue'),
      children: [
        {
          path: 'about',
          component: () => import('@/views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
