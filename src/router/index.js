import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Shopcar from '@/components/Shopcar'
import Search from '@/components/Search'
import Newlist from '@/components/Newlist'
import NewInfo from '@/components/NewInfo'
import Photolist from '@/components/Photolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    { path:'/home',component:Home},
    { path:'/member',component:Member},
    { path:'/shopcar',component:Shopcar},
    { path:'/search',component:Search},
    { path:'/home/newlist',component:Newlist},
    { path:'/home/newinfo/:id', component:NewInfo},
    { path:'/home/photolist',component:Photolist}
  ],
  linkActiveClass:'mui-active'
})
