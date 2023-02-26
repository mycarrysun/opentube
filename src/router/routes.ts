import { RouteRecordRaw } from 'vue-router';

export const ROUTES = {
  HOME_FEED: 'home',
  VIEW_VIDEO: 'view_video',
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: 'home' },
      { path: 'home', component: () => import('pages/Home.vue'), name: ROUTES.HOME_FEED },
      { path: 'view/:id', component: () => import('pages/ViewVideo.vue'), name: ROUTES.VIEW_VIDEO },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
