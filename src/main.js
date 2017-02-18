// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Import material design lite
import 'material-design-lite/src/material-design-lite.scss'
import 'material-design-lite/material'
import 'material-design-icons-loader'

// Import Vue MDL components
import VueMdl from 'vue-mdl'
Vue.use(VueMdl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
