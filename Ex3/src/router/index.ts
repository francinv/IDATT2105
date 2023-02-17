import CalculatorView from "@/views/CalculatorView.vue";
import ContactView from "@/views/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CalculatorView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
