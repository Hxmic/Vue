import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import IndexPage from '../pages/index.vue'
import IndexPage from '@/pages/index'
import DetailPage from '@pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/index',
      name:'index',
      component:IndexPage
    },{
      path:'/detail',
      name:'DetailPage',
      component:DetailPage,
    }
  ]
})