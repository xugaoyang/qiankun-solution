import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from '@/store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

let router = null
let instance = null

const render = (props = {}) => {
  const { container, routerBase, globalStore, globalFn } = props
  Vue.prototype.$globalFn = globalFn
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : '/',
    mode: process.env.VUE_APP_ROUTER_MODE,
    routes,
  })
  router.afterEach((to) => {
    const displayName = to.meta ? to.meta.title : '404'
    const tag = {
      fullPath: to.fullPath,
      hash: to.hash,
      meta: to.meta,
      name: to.name,
      params: to.params,
      path: to.path,
      query: to.query,
      displayName,
      system: routerBase,
    }
    const pageTags = globalStore.getters.pageTags
    const exist = pageTags.find((item) => item.displayName === displayName)
    if (!exist) {
      globalStore.dispatch('addTag', tag)
    }
    globalStore.dispatch('currentTag', tag)
  })
  instance = new Vue({
    router,
    store,
    data() {
      return {
        globalStore,
      }
    },
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export const bootstrap = async () => {
  console.log('[vue] vue a app bootstrap')
}

export const mount = async (props) => {
  console.log('[vue] props from main framework', props)
  render(props)
}

export const unmount = async () => {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
