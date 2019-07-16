import Vue from 'vue'
import Router from 'vue-router'
import Good from '../components/goods'
import Pingjia from '@/components/pingfen'
import Shop from '@/components/shops'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/goods'},
    {path: '/goods', component: Good},
    {path: '/pingfen', component: Pingjia},
    {path: '/shops', component: Shop}
  ]
})
