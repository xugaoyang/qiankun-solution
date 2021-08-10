import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);


const routes = [
  {
    path: "/",
    name: "a-home",
    component: Home,
    meta: {
      title: 'a-home'
    }
  },
  {
    path: "/about",
    name: "a-about",
    meta: {
      title: 'a-about'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/About.vue")
  }
]

export default routes
