require('./assets/reset.css')

import Vue from 'vue'
import App from './App'
import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.$http = axios

require('moment/locale/zh-cn')

Vue.use(require('vue-moment'), {
  moment
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App)
})
