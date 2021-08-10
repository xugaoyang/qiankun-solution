import Vue from "vue"
import Router from "vue-router"
import demoRouter from './modules/demo'
import Layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: Layout,
    //   children: [...demoRouter],
    // }
  ]
});
