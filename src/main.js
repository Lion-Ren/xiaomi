import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Tabbar} from 'mint-ui'
import './stylesheets/main.scss'
import './modules/rem'
import axios from 'axios'
Vue.prototype.$http = axios;
import 'animate.css'
import 'swiper/css/swiper.min.css'

Vue.config.productionTip = false
Vue.component("mt-tabbar",Tabbar)



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
