import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    currentLang: 'zh',
    currentTheme: 'white',
    currentTag: {},
    currentSite: {},
    pageTags: [],
    user: {},
    token: '',
  },
  getters: {
    currentLang(state) {
      return state.currentLang
    },
    currentTheme(state) {
      return state.currentTheme
    },
    currentTag(state) {
      return state.currentTag
    },
    currentSite(state) {
      return state.currentSite
    },
    pageTags(state) {
      return state.pageTags
    },
    user(state) {
      return state.user
    },
    token(state) {
      return state.token
    },
  },
  mutations: {
    currentLang(state, payload) {
      Object.assign(state, {
        currentLang: payload,
      })
    },
    currentTheme(state, payload) {
      Object.assign(state, {
        currentTheme: payload,
      })
    },
    currentTag(state, payload) {
      Object.assign(state, {
        currentTag: payload,
      })
    },
    currentSite(state, payload) {
      Object.assign(state, {
        currentSite: payload,
      })
    },
    ADD_PAGE_TAG(state, payload) {
      state.pageTags.push(payload)
    },
    pageTags(state, payload) {
      Object.assign(state, {
        pageTags: payload,
      })
    },
    user(state, payload) {
      Object.assign(state, {
        user: payload,
      })
    },
    token(state, payload) {
      Object.assign(state, {
        token: payload,
      })
    },
  },
  actions: {
    currentLang({ commit }, payload) {
      commit('currentLang', payload)
    },
    currentTheme({ commit }, payload) {
      commit('currentTheme', payload)
    },
    currentTag({ commit }, payload) {
      commit('currentTag', payload)
    },
    currentSite({ commit }, payload) {
      commit('currentSite', payload)
    },
    addTag({ commit }, payload) {
      commit('ADD_PAGE_TAG', payload)
    },
    pageTags({ commit }, payload) {
      commit('pageTags', payload)
    },
    user({ commit }, payload) {
      commit('user', payload)
    },
    token({ commit }, payload) {
      commit('token', payload)
    },
  },
  plugins: [
    createPersistedState({
      key: 'main',
    }),
  ],
})
