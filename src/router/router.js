import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home'],
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/CatalogView.vue')
    },
    {
      path: '/catalog/:id',
      name: 'catalog car',
      component: () => import('@/views/CatalogCar.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next()
});

export default router
