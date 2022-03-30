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
      path: '/:catchAll(.*)',
      redirect: pathPrefix
    }
  ]
})

export default router
