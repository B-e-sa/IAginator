import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'IAginator'
    }
  },
  {
    path: '/generate',
    name: 'generate',
    meta: {
      title: 'Generate'
    },
    component: () => import(/* webpackChunkName: "generate" */ '../views/GenerateView.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | IAginator`;
  next();
});

export default router;
