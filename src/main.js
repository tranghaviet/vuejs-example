// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/style/index.scss' // Add global style
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

axios.defaults.baseURL = 'http://10.0.0.103:65108'

Vue.config.productionTip = false

// Suppress all Vue logs and warnings.
if (process.env.NODE_ENV === 'production') {
  Vue.config.silent = true
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
