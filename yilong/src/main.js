// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BaiduMap from 'vue-baidu-map'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(BaiduMap,{
	ak:'buGevFM0PF3VVQcuybvrIC1Y8dMOZua1'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render:h=>h(App)
})
