import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "b-home",
    component: Home,
    meta: {
      title: 'b-home'
    }
  },
  {
    path: "/about",
    name: "b-about",
    meta: {
      title: 'b-about'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/About.vue")
  }
]

export default routes
