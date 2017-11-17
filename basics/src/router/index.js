import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Login from '@/components/Login'
import CitySearch from '@/components/CitySearch'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: List
    },{
      path:'/login',
      name:'login',
      component:Login
    },{
      path:'/citySearch',
      name:'CitySearch',
      component:CitySearch
    }
  ]
})
