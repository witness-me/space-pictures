import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import MyFavorites from "@/views/MyFavorites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favorites",
    name: "My Favorites",
    component: MyFavorites,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
