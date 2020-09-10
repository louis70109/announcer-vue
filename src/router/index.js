import { createRouter, createWebHistory } from "vue-router";
import LiffTemplate from "../components/LiffTemplate.vue";
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/liff/template",
      component: LiffTemplate,
    },
  ],
});

export default router;
