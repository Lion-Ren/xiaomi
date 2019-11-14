import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './stylesheets/main.scss'
import './modules/rem'
import axios from 'axios'
Vue.prototype.$http = axios;
import 'animate.css'
import 'swiper/css/swiper.min.css'

import {Tabbar,Header,Button} from 'mint-ui'
Vue.component("mt-tabbar",Tabbar)
Vue.component("mt-header",Header)
Vue.component("mt-button",Button)


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
