import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import HomePage from './views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
