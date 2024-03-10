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
          path: '/about',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/resume',
          component: () => import('@/views/ResumeView.vue')
        },
        {
          path: '/product',
          component: () => import('@/views/ProductView.vue')
        },
        {
          path: '/contact',
          component: () => import('@/views/ContactView.vue')
        }
      ]
    }
  ]
})

export default router
