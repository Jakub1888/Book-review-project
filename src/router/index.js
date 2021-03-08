import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Review from '../views/Review.vue'
import Authors from '../views/Authors.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/review',
    name: 'Review',
    component: Review
  },
  {
    path: '/authors',
    name: 'Authors',
    component: Authors
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
})

export default router
