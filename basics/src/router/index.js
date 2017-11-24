import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Not from '@/page/404'

import totalpages from '@/page/activeManage/totalpages'
import activeManage from '@/page/activeManage/index'
import detail from '@/page/activeManage/detail'

import page1 from '@/page/activeManage/page1'
import page2 from '@/page/activeManage/page2'
import page3 from '@/page/activeManage/page3'

import step1 from '@/page/activePublic/step1'
import step2 from '@/page/activePublic/step2'
import step3 from '@/page/activePublic/step3'
import step4 from '@/page/activePublic/step4'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Not',
      component: Not
    },
    {
      path: '/activeManage',
      name: 'totalpages',
      component: totalpages,
      children: [
        {
          path: '',
          name: '',
          component: activeManage
        }, {
          path: 'detail',
          name: 'detail',
          component: detail,
          children: [
            {
              path: '',
              name: '',
              component: page1,
              children: [{
                path: '',
                name: '',
                component: step1
              }, {
                path: 'step2',
                name:'step2',
                component: step2
              },{
                path:'step3',
                name:'step3',
                component:step3
              },{
                path:'step4',
                name:'step4',
                component:step4
              }
              ]
            },
            {
              path:'page2',
              name:'page2',
              component:page2
            },
            {
              path:'page3',
              name:'page3',
              component:page3
            }

            ]
        }
      ]
    }
  ]
})
