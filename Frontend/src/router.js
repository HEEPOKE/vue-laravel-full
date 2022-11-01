import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from "./views/Home.vue";
import AboutVue from "./views/About.vue";
import StoreVue from "./views/Store.vue";
import LoginVue from "./views/auth/Login.vue";
import RegisterVue from "./views/auth/Register.vue";
import DashboardVue from "./views/Dashboard.vue";
import CreateVue from "./views/Create.vue";
// import NotFound from "./errors/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeVue
  },
  {
    path: '/about',
    name: 'AboutVue',
    component: AboutVue
  },
  {
    path: '/store',
    name: 'StoreVue',
    component: StoreVue
  },
  {
    path: '/dashboard',
    name: 'DashboardVue',
    component: DashboardVue
  },
  {
    path: '/login',
    name: 'LoginVue',
    component: LoginVue
  },
  {
    path: '/register',
    name: 'RegisterVue',
    component: RegisterVue
  },
  {
    path: '/create',
    name: 'CreateVue',
    component: CreateVue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
      
export default router;