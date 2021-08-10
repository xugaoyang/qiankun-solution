import createPersistedState from 'vuex-persistedstate'
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState({
    key: 'vuex-plant'
  })],
})
