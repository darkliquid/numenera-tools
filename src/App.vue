<template>
  <viewport :title="title" :sidenav="sidenav" :topnav="topnav">
    <router-view></router-view>
  </viewport>
</template>

<script>
import Viewport from './components/Viewport.vue'

export default {
  components: {
    Viewport
  },
  data () {
    return {
      title: 'Numenera Tools',
      sidenav: [
        {
          text: 'Characters',
          href: '/characters',
          icon: 'mdi-card-account-details'
        },
        {
          text: 'Creatures',
          href: '/creatures',
          icon: 'mdi-bug'
        },
        {
          text: 'Names',
          href: '/names',
          icon: 'mdi-face'
        },
        {
          text: 'Oddities',
          href: '/oddities',
          icon: 'mdi-help'
        },
        {
          text: 'Rumours',
          href: '/rumours',
          icon: 'mdi-chat-alert'
        },
        {
          text: 'Philethis Phrases',
          href: '/philethis',
          icon: 'mdi-head-snowflake'
        },
        {
          text: 'Rust Cyphers',
          href: '/rust-cyphers',
          icon: 'mdi-cloud-alert'
        }
      ],
      topnav: [
        {
          text: 'About',
          href: '/about'
        },
        {
          text: 'Copyright',
          href: '/copyright'
        }
      ]
    }
  },
  name: 'app'
}
</script>

<style>
html {
  background: url('./assets/images/MCG-Numenera-Obelisk-of-the-Water-God.jpg') center / cover;
  background-attachment: fixed;
}
</style>