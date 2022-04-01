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
          href: 'characters',
          icon: 'person'
        },
        {
          text: 'Creatures',
          href: 'creatures',
          icon: 'bug_report'
        },
        /* {
          text: 'Cyphers',
          href: 'cyphers',
          icon: 'build'
        }, */
        {
          text: 'Names',
          href: 'names',
          icon: 'face'
        },
        {
          text: 'Oddities',
          href: 'oddities',
          icon: 'help'
        },
        {
          text: 'Rumours',
          href: 'rumours',
          icon: 'speaker_notes'
        },
        {
          text: 'Philethis Phrases',
          href: 'philethis',
          icon: 'chat_bubble'
        },
        {
          text: 'Rust Cyphers',
          href: 'rust-cyphers',
          icon: 'warning'
        }
      ],
      topnav: [
        {
          text: 'About',
          href: 'about'
        },
        {
          text: 'Copyright',
          href: 'copyright'
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