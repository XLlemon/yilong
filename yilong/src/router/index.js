import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import Admin from '../admin'



import Homepage from '../client/nav/homepage'
import navone from '@/client/homepage/bottom-nav/bottom-nav-box/hotel-reservation'
import navtwo from '@/client/homepage/bottom-nav/bottom-nav-box/ticket-inquiries'
import navthree from '@/client/homepage/bottom-nav/bottom-nav-box/purchase'
import navfour from '@/client/homepage/bottom-nav/bottom-nav-box/hot-city'
import navfive from '@/client/homepage/bottom-nav/bottom-nav-box/partner'
import navsix from '@/client/homepage/bottom-nav/bottom-nav-box/common-hotel'
import login from '@/client/login-and-registration/login'
import register from '@/client/login-and-registration/register'

import Domestic from '../client/nav/domestic'
import International from '../client/nav/international'
import Planeticket from '../client/nav/planeticket'
import Trainpaio from '../client/nav/trainpaio'
import Busticket from '../client/nav/busticket'
import Tourism from '../client/nav/tourism'
import Philippines from '../client/homepage/tourism/philippines/philippines'




Vue.use(Router);


export default new Router({
  routes: [
   {path: '/',redirect:'/homepage'},
    {
      path: '/admin',
      name: 'admin',
      component:Admin,
      children:[
        {path:'/homepage',name:'homepage',alias:'首页',component:Homepage,children:[
        	{path:'/navone',alias:'酒店预订',component:navone,},
        	{path:'/navtwo',alias:'机票查询',component:navtwo,},
        	{path:'/navthree',alias:'酒店团购',component:navthree,},
        	{path:'/navfour',alias:'热门城市',component:navfour,},
        	{path:'/navfive',alias:'合作伙伴',component:navfive,},
        	{path:'/navsix',alias:'常见酒店',component:navsix,}
        ]},
        {path:'/domestic',name:'domestic',alias:'国内酒店',component:Domestic},
        {path:'/international',name:'international',alias:'国际酒店',component:International},
        {path:'/planeticket',name:'planeticket',alias:'机票',component:Planeticket},
        {path:'/trainpaio',name:'trainpaio',alias:'火车票',component:Trainpaio},
        {path:'/busticket',name:'busticket',alias:'汽车票',component:Busticket},
        {path:'/tourism',name:'tourism',alias:'旅游指南',component:Tourism},

      ]
    },
    {path:'/philippines',name:'philippines',component:Philippines},
    {path:'/login',name:'login',component:login,},
    {path:'/register',name:register,component:register,}
  ]
})
