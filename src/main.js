import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Tabbar,Header,Button,Search,Lazyload,Cell} from 'mint-ui'
// import {Tabbar,Header,Button, } from 'mint-ui'
import './stylesheets/main.scss'
import VueRouter from 'vue-router';
import './modules/rem'
import axios from 'axios'
Vue.prototype.$http = axios;
import 'animate.css'
import 'swiper/css/swiper.min.css'
import "./font_banner/iconfont.css"

//进度加载条
import ViewUI from 'view-design';
Vue.use(ViewUI);
Vue.use(VueRouter);
import { LoadingBar } from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.component('LoadingBar', LoadingBar);

Vue.component("mt-tabbar",Tabbar)
Vue.component("mt-header",Header)
Vue.component("mt-button",Button)
Vue.component("mt-search",Search)
Vue.component("mt-cell", Cell);
Vue.use(Lazyload);




Vue.config.productionTip = false

import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
