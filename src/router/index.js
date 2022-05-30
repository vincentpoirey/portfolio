import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: HomePage,
    meta: {
      title: 'Vincent Poirey - Portfolio'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  document.title = to.meta.title
  next()
})

export default router
