import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import HomePage from './views/home.vue';
import Dashboard from './views/Dashboard.vue';

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
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
