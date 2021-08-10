import Vue from "vue"
import App from "./App.vue"
import router from "@/router"
import store from "./store"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'
import '@/assets/styles/index.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")


registerMicroApps(
  microApps,
  {
    beforeLoad: [
      app => {
        console.log('[lifeCycle] before load %c%s', 'color: green', app.name)
      }
    ],
    beforeMount: [
      app => {
        console.log('[lifeCycle] before mount %c%s', 'color: green', app.name)
      }
    ],
    afterUnmount: [
      app => {
        console.log('[lifeCycle] after unmount %c%s', 'color: green', app.name)
      }
    ]
  }
)

// TODO:可配置项
setDefaultMountApp('/plant')

start()


