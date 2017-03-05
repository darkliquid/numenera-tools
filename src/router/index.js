import Vue from 'vue'
import Router from 'vue-router'
import Analytics from 'vue-ua'
import Home from 'views/Home'
import Characters from 'views/Characters'
import Oddities from 'views/Oddities'
import RustCyphers from 'views/RustCyphers'
import Philethis from 'views/Philethis'
import Rumours from 'views/Rumours'
import Names from 'views/Names'
import Creatures from 'views/Creatures'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/characters',
      name: 'Characters',
      component: Characters
    },
    {
      path: '/creatures',
      name: 'Creatures',
      component: Creatures
    },
    {
      path: '/rumours',
      name: 'Rumours',
      component: Rumours
    },
    {
      path: '/oddities',
      name: 'Oddities',
      component: Oddities
    },
    {
      path: '/philethis',
      name: 'Philethis',
      component: Philethis
    },
    {
      path: '/names',
      name: 'Names',
      component: Names
    },
    {
      path: '/rust-cyphers',
      name: 'Rust Cyphers',
      component: RustCyphers
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

Vue.use(Analytics, {
  appName: '<app_name>',
  appVersion: '<app_version>',
  trackingId: '<your_tracking_id>',
  debug: process.env.NODE_ENV !== 'production',
  vueRouter: router
})

export default router
