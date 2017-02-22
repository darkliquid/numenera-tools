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
          href: '/characters',
          icon: 'person'
        },
        {
          text: 'Creatures',
          href: '/creatures',
          icon: 'bug_report'
        },
        {
          text: 'Cyphers',
          href: '/cyphers',
          icon: 'build'
        },
        {
          text: 'Names',
          href: '/names',
          icon: 'face'
        },
        {
          text: 'Oddities',
          href: '/oddities',
          icon: 'help'
        },
        {
          text: 'Rumours',
          href: '/rumours',
          icon: 'speaker_notes'
        },
        {
          text: 'Philethis Phrases',
          href: '/philethis',
          icon: 'chat_bubble'
        },
        {
          text: 'Rust Cyphers',
          href: '/rust-cyphers',
          icon: 'warning'
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

/* ==========  Select Field Variables ========== */
@import "../node_modules/material-design-lite/src/color-definitions";
$select-background-color: transparent;
$select-border-color: unquote("rgba(#{$color-black}, 0.12)") !default;
$select-font-size: 16px;
$select-color: unquote("rgba(#{$color-black}, 0.26)") !default;
$select-padding: 4px;

/* ==========  Select Field ========== */

/* Style Select Field */
select {
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: $select-padding 0;
  font-size: $select-font-size;
  color: $select-color;
  border: none;
  border-bottom: 1px solid $select-border-color;
}

/* Remove focus */
select:focus {
  outline: none;
}

/* Hide label */
.mdl-selectfield label {display: none;}
/* Use custom arrow */
.mdl-selectfield select {appearance: none}
.mdl-selectfield {
  font-family: 'Roboto','Helvetica','Arial',sans-serif;
  position: relative;
    &:after {
        position: absolute;
        top: 0.75em;
        right: 0.5em;
        /* Styling the down arrow */
        width: 0;
        height: 0;
        padding: 0;
        content: '';
        border-left: .25em solid transparent;
        border-right: .25em solid transparent;
        border-top: .375em solid $select-border-color;
        pointer-events: none;
    }
}
</style>
