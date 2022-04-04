import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import Oddities from '../views/Oddities.vue'
import RustCyphers from '../views/RustCyphers.vue'
import Philethis from '../views/Philethis.vue'
import Rumours from '../views/Rumours.vue'
import Names from '../views/Names.vue'
import Creatures from '../views/Creatures.vue'
import About from '../views/About.vue'
import Copyright from '../views/Copyright.vue'

import { createRouter, createWebHistory } from 'vue-router'

const pathPrefix = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/characters/:data?',
      name: 'Characters',
      component: Characters,
    },
    {
      path: '/creatures/:data?',
      name: 'Creatures',
      component: Creatures
    },
    {
      path: '/rumours/:data?',
      name: 'Rumours',
      component: Rumours
    },
    {
      path: '/oddities/:data?',
      name: 'Oddities',
      component: Oddities
    },
    {
      path: '/philethis/:data?',
      name: 'Philethis',
      component: Philethis
    },
    {
      path: '/names/:data?',
      name: 'Names',
      component: Names
    },
    {
      path: '/rust-cyphers/:data?',
      name: 'Rust Cyphers',
      component: RustCyphers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/copyright',
      name: 'Copyright',
      component: Copyright
    },
    {
      path: '/:catchAll(.*)',
      redirect: pathPrefix
    }
  ]
})

export default router
