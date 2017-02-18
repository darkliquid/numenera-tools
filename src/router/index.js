import Vue from 'vue'
import Router from 'vue-router'
import Analytics from 'vue-ua'
import Hello from 'components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

Vue.use(Analytics, {
  appName: '<app_name>',
  appVersion: '<app_version>',
  trackingId: '<your_tracking_id>',
  debug: false,
  vueRouter: router
})

export default router
