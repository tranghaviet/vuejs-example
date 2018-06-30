import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/home/Home'
import SignIn from '@/modules/auth/SignIn'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/auth/signin',
      component: SignIn,
    },
  ]
})
