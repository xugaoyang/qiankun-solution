import store from './store'

const microApps = [
  {
    name: 'plant',
    entry: process.env.VUE_APP_PLANT_URL,
    activeRule: '/plant',
  },
  {
    name: 'data',
    entry: process.env.VUE_APP_DATA_URL,
    activeRule: '/data',
  },
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapps',
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState
    }
  }
})

export default apps
