<template>
  <viewport :title="title" :sidenav="sidenav" :topnav="topnav">
    <router-view></router-view>
    <footer class="mdl-mini-footer alt-footer" slot="footer">
      <div class="mdl-mini-footer__right-section">
        <ul class="mdl-mini-footer__link-list">
          <li v-for="link in topnav">
            <router-link :to="link.href">{{link.text}}</router-link>
          </li>
        </ul>
      </div>
    </footer>
  </viewport>
</template>

<script>
import Viewport from 'components/Viewport'

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

<style lang="scss">
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}

.is-small-screen .mdl-mini-footer.alt-footer {
  display: flex;
}

.mdl-mini-footer.alt-footer {
  display: none;
  margin-top: auto;
}

.fr {
  float: right;
}

.mdl-card {
  flex: none;
  min-width: 50%;
  overflow: initial;
  margin-bottom: 4em;
}

.description {
  font-size: 150%;
  min-height: 50px;
}
</style>
