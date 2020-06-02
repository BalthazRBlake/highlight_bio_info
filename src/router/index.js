import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PersonDetails from "../views/PersonDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details",
    name: "PersonDetails",
    component: PersonDetails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
