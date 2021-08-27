export default [
  {
    path: '/about',
    name: 'about',
    component: () => {
      return import('@/views/About')
    },
    meta: {
      title: 'about',
    },
    children: [],
  },
  {
    path: '/home',
    name: 'home',
    component: () => {
      return import('@/views/Home')
    },
    meta: {
      title: 'home',
    },
    children: [],
  },
]
