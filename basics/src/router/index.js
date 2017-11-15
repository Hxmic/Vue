import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import IndexPage from '../pages/index.vue'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import DetailCoupage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'
import DetailAnaPage from '@/pages/detail/analysis'


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
      redirect:'/detail/count',
      children:[
        {
          path:'count',
          component:DetailCoupage
        },{
          path:'forecast',
          component:DetailForPage
        },{
          path:'analysis',
          component:DetailAnaPage
        },{
          path:'publish',
          component:DetailPubPage
        }
      ]
    }
  ]
})
