import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('./pages/home.vue'),
    meta: {
      title: '手作り田畑の焼きまんじゅう | 前橋市上泉町の焼きまんじゅう・うどん',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('./pages/404.vue'),
    meta: {
      title: 'ページが見つかりません | 手作り田畑の焼きまんじゅう',
      noindex: true,
    },
  },
]
