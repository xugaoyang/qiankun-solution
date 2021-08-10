import { initGlobalState } from 'qiankun'
import Vue from "vue"

const statesFromLocalStorage = localStorage.getItem('global')
console.log('states from local storage', statesFromLocalStorage)
const states = statesFromLocalStorage ? JSON.parse(statesFromLocalStorage) : {
  pageTags: [],
  currentLang: 'zh',
  currentTheme: 'white',
  currentTag: {},
  user: {},
  currentSite: {},
  token: '',
  permission: []
}

const initialState = Vue.observable(states)

const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  console.log('main change', newState, prev)
  localStorage.setItem('global', JSON.stringify(newState))
  for (const key in newState) {
    initialState[key] = newState[key]
  }
})

actions.getGlobalState = (key) => {
  return key ? initialState[key] : initialState
}

export default actions
