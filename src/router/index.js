import Vue from 'vue'
import Router from 'vue-router'
import demoRouter from './modules/demo'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => {
      return import('@/views/Login')
    },
  },
]

const router = new Router({
  scrollBehavior: () => {
    return { y: 0 }
  },
  base: process.env.BASE_URL,
  mode: 'history',
  routes: routes.concat(demoRouter),
})
console.log('-----------------', process.env, router)
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from, next)
  next()
})

router.afterEach((to) => {
  console.log('afterEach', to)
})

export default router
