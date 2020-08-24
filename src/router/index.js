import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Form from '@/views/Form.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  { path: '/', name: 'Home', component: Home },
  { path: '/Form', name: 'Form', component: Form }
  ],
})

export default router
