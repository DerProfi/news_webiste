import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Results from "../components/results.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
