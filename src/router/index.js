import { createRouter, createWebHistory } from 'vue-router';
import LiffTemplate from '../components/LiffTemplate.vue';
import Barrage from '../components/Barrage.vue';
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/liff/template',
      component: LiffTemplate,
    },
    {
      path: '/barrage',
      component: Barrage,
    },
  ],
});

export default router;
