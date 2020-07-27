import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog',
      mame: 'home',
      component: HelloWorld
    }
  ]
})
