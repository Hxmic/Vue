import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import Register from '@/components/register'
import Main from '@/components/main'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/register',
      name:'Register',
      component:Register
    },{
      path:'/main',
      name:'Main',
      component:Main
    },{
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})
