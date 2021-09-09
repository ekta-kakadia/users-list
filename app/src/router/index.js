import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/users",
      name: "users",
      meta: { layout: "app" },
      component: () => import("@/components/Users.vue")
    },
  ]
});