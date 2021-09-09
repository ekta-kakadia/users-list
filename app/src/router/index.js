import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "app" },
      component: () => import("@/components/Home.vue")
    },
    {
      path: "/users",
      name: "users",
      meta: { layout: "app" },
      component: () => import("@/components/Users.vue")
    },
    {
      path: "/user/:id",
      name: "details",
      meta: { layout: "app" },
      component: () => import("@/components/UserDetails.vue")
    },
    {
      path: "/user/edit/:id",
      name: "edit",
      meta: { layout: "app" },
      component: () => import("@/components/EditUser.vue")
    },
  ]
});