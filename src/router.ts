import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Index',
    component:()=> import('./pages/home.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component:()=> import('./pages/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
