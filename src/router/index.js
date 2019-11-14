import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home';
import group from './group';
import cart from './cart';
import mine from './mine';
import details from './details';
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {path:"/",redirect:"/home"},
    home,group,cart,mine,details
  ]
})

export default router
