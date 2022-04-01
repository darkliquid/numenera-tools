<template>
  <viewport :title="title" :sidenav="sidenav" :topnav="topnav">
    <router-view></router-view>
  </viewport>
</template>

<script>
import Viewport from './components/Viewport.vue'

const pathPrefix = import.meta.env.BASE_URL;

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
          href: pathPrefix + 'characters',
          icon: 'person'
        },
        {
          text: 'Creatures',
          href: pathPrefix + 'creatures',
          icon: 'bug_report'
        },
        /* {
          text: 'Cyphers',
          href: pathPrefix + 'cyphers',
          icon: 'build'
        }, */
        {
          text: 'Names',
          href: pathPrefix + 'names',
          icon: 'face'
        },
        {
          text: 'Oddities',
          href: pathPrefix + 'oddities',
          icon: 'help'
        },
        {
          text: 'Rumours',
          href: pathPrefix + 'rumours',
          icon: 'speaker_notes'
        },
        {
          text: 'Philethis Phrases',
          href: pathPrefix + 'philethis',
          icon: 'chat_bubble'
        },
        {
          text: 'Rust Cyphers',
          href: pathPrefix + 'rust-cyphers',
          icon: 'warning'
        }
      ],
      topnav: [
        {
          text: 'About',
          href: pathPrefix + 'about'
        },
        {
          text: 'Copyright',
          href: pathPrefix + 'copyright'
        }
      ]
    }
  },
  name: 'app'
}
</script>

<style>
html, body, #app {
  height: 100%;
}
</style>