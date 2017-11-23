import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Not from '@/page/404'

import totalpages from '@/page/activeManage/totalpages'
import activeManage from '@/page/activeManage/index'
import detail from '@/page/activeManage/detail'

import page1 from '@/page/activeManage/page1'

import step1 from '@/page/activePublic/step1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Not',
      component: Not
    },
    {
      path:'/activeManage',
      component:totalpages,
      children:[
        {
          path:'',
          component:activeManage
        },{
          path:'detail',
          component:detail,
          children:[{
            path:'',
            component:page1,
            children:[{
              path:'',
              component:step1
            }
            ]
          }]
        }
      ]
    }
  ]
})
