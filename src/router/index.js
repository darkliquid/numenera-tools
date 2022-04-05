// Main pages
const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Copyright = () => import('../views/Copyright.vue');

// Generators
const Characters = () => import('../views/Characters.vue');
const Oddities = () => import('../views/Oddities.vue');
const RustCyphers = () => import('../views/RustCyphers.vue');
const Philethis = () => import('../views/Philethis.vue');
const Rumours = () => import('../views/Rumours.vue');
const Names = () => import('../views/Names.vue');
const Creatures = () => import('../views/Creatures.vue');

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
