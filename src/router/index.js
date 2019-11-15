import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home';
import group from './group';
import cart from './cart';
import sec from "./sec"
import mine from './mine';
import details from './details';
import search from './search';
import computer from './computer'

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {path:"/",redirect:"/home"},
    home,group,cart,mine,search,computer,details,sec
  ]
})

import ViewUI from 'view-design';
Vue.use(ViewUI);

router.beforeEach((to, from, next) => {
  // alert(1)

    ViewUI.LoadingBar.start();
    next();
});

router.afterEach(route => {
    ViewUI.LoadingBar.finish();
});

export default router
