import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import axios from 'axios'
import globalFn from '@/utils/globalFn'
import router from './router'
import store from './store'
import App from './App'
import '@/assets/styles/index.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false


const getApps = async () => {
  const res = await axios.get('/config.json')
  if (res.status === 200 && res.data) {
    return res.data
  }
  return {}
}


getApps().then((res) => {
  console.log(res)
  const microApps = res && res.apps
  const apps = microApps.map((item) => {
    return {
      ...item,
      container: '#subapps',
      props: {
        routerBase: item.activeRule,
        globalStore: store,
        globalFn,
      },
    }
  })
  console.log(apps)
  registerMicroApps(apps, {
    beforeLoad: [
      (app) => {
        console.log('[lifeCycle] before load %c%s', 'color: green', app.name)
      },
    ],
    beforeMount: [
      (app) => {
        console.log('[lifeCycle] before mount %c%s', 'color: green', app.name)
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[lifeCycle] after unmount %c%s', 'color: green', app.name)
      },
    ],
  })
  new Vue({
    router,
    store,
    render: (h) => {
      return h(App)
    },
  }).$mount('#app')
  // TODO:可配置项
  setDefaultMountApp('/vue-a')

  start()
})
