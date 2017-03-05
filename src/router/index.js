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
import About from 'views/About'
import Copyright from 'views/Copyright'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: pathPrefix,
      name: 'Home',
      component: Home
    },
    {
      path: pathPrefix + 'characters',
      name: 'Characters',
      component: Characters
    },
    {
      path: pathPrefix + 'creatures',
      name: 'Creatures',
      component: Creatures
    },
    {
      path: pathPrefix + 'rumours',
      name: 'Rumours',
      component: Rumours
    },
    {
      path: pathPrefix + 'oddities',
      name: 'Oddities',
      component: Oddities
    },
    {
      path: pathPrefix + 'philethis',
      name: 'Philethis',
      component: Philethis
    },
    {
      path: pathPrefix + 'names',
      name: 'Names',
      component: Names
    },
    {
      path: pathPrefix + 'rust-cyphers',
      name: 'Rust Cyphers',
      component: RustCyphers
    },
    {
      path: pathPrefix + 'about',
      name: 'About',
      component: About
    },
    {
      path: pathPrefix + 'copyright',
      name: 'Copyright',
      component: Copyright
    },
    {
      path: '*',
      redirect: pathPrefix
    }
  ]
})

Vue.use(Analytics, {
  appName: 'numenera-tools',
  appVersion: '1',
  trackingId: process.env.GA_TRACKING_CODE,
  debug: process.env.NODE_ENV !== 'production',
  vueRouter: router
})

export default router
