import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Form from '@/views/Form.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Form', name: 'Form', component: Form }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
