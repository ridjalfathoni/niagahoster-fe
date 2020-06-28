import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import './assets/css/style.css'
import './assets/css/font-familly.css'

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import 'bootstrap/dist/css/bootstrap.css'
let Bootstrap = require('bootstrap')

import Meta from "vue-meta";
Vue.use(Meta);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
