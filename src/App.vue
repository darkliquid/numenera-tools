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
          to: '/characters',
          icon: 'mdi-card-account-details'
        },
        {
          text: 'Creatures',
          to: '/creatures',
          icon: 'mdi-bug'
        },
        {
          text: 'Names',
          to: '/names',
          icon: 'mdi-face'
        },
        {
          text: 'Oddities',
          to: '/oddities',
          icon: 'mdi-help'
        },
        {
          text: 'Rumours',
          to: '/rumours',
          icon: 'mdi-chat-alert'
        },
        {
          text: 'Philethis Phrases',
          to: '/philethis',
          icon: 'mdi-head-snowflake'
        },
        {
          text: 'Rust Cyphers',
          to: '/rust-cyphers',
          icon: 'mdi-cloud-alert'
        }
      ],
      topnav: [
        {
          text: 'About',
          to: '/about'
        },
        {
          text: 'Copyright',
          to: '/copyright'
        },
        {
          text: 'Feedback',
          href: "https://github.com/darkliquid/numenera-tools/issues"
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