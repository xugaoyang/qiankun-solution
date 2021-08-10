const Global = {
  namespaced: true,
  state: {
    currentTheme: 'white',
    currentLang: 'zh',
    pageLoading: false,
    pageTags: [],
    currentTag: null,
    latestPath: null,
    version: null,
  },
  getters: {
    currentTheme(state) {
      return state.currentTheme
    },
    currentLang(state) {
      return state.currentLang
    },
    pageLoading(state) {
      return state.pageLoading
    },
    pageTags(state) {
      return state.pageTags
    },
    currentTag(state) {
      return state.currentTag
    },
    latestPath(state) {
      return state.latestPath
    },
    version(state) {
      return state.version
    },
  },
  mutations: {
    currentTheme(state, payload) {
      Object.assign(state, {
        currentTheme: payload,
      })
    },
    currentLang(state, payload) {
      Object.assign(state, {
        currentLang: payload,
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
    currentTag(state, payload) {
      Object.assign(state, {
        currentTag: payload,
      })
    },
    latestPath(state, payload) {
      Object.assign(state, {
        latestPath: payload,
      })
    },
    pageLoading(state, payload) {
      Object.assign(state, {
        pageLoading: payload,
      })
    },
    version(state, payload) {
      Object.assign(state, {
        version: payload,
      })
    },
  },
  actions: {
    currentTheme({ commit }, payload) {
      commit('currentTheme', payload)
    },
    currentLang({ commit }, payload) {
      commit('currentLang', payload)
    },
    addTag({ commit }, payload) {
      commit('ADD_PAGE_TAG', payload)
    },
    pageTags({ commit }, payload) {
      commit('pageTags', payload)
    },
    currentTag({ commit }, payload) {
      commit('currentTag', payload)
    },
    latestPath({ commit }, payload) {
      commit('latestPath', payload)
    },
    pageLoading({ commit }, payload) {
      commit('pageLoading', payload)
    },
    version({ commit }, payload) {
      commit('version', payload)
    },
  },
}

export default Global
