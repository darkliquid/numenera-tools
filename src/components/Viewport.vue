<template>
  <mdl-layout class="viewport" :transparent-header="true">
    <mdl-layout-header-row slot="header" :title="title">
      <mdl-layout-spacer />
      <mdl-nav v-if="topnav.length > 0">
        <mdl-nav-router-link
          v-for="link in topnav"
          :to="link.href"
          :icon="link.icon"
        >
          {{ link.text }}
        </mdl-nav-router-link>
      </mdl-nav>
    </mdl-layout-header-row>
    <mdl-layout-drawer :title="title" v-if="sidenav.length > 0">
      <mdl-nav>
        <mdl-nav-router-link
          v-for="link in sidenav"
          :to="link.href"
          :icon="link.icon"
        >
          {{ link.text }}
        </mdl-nav-router-link>
      </mdl-nav>
    </mdl-layout-drawer>
    <mdl-layout-content>
      <slot></slot>
    </mdl-layout-content>
    <slot name="footer"></slot>
  </mdl-layout>
</template>

<script>
import MdlNavRouterLink from './MdlNavRouterLink'
import { mapState } from 'vuex'

export default {
  components: {
    MdlNavRouterLink
  },
  props: {
    title: {
      type: String
    },
    topnav: {
      type: Array,
      default () {
        return []
      }
    },
    sidenav: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: mapState(['drawerOpen']),
  watch: {
    drawerOpen () {
      this.$el.MaterialLayout.toggleDrawer()
    }
  }
}
</script>

<style lang="scss">
@import "../../node_modules/material-design-lite/src/variables";

.viewport {
  background: url('../assets/images/MCG-Numenera-Obelisk-of-the-Water-God.jpg') center / cover;
}

.mdl-navigation__link i {
  margin-right: 0.5em;
}

.mdl-layout__drawer .mdl-navigation .mdl-navigation__link.router-link-active {
  color: $text-link-color;
}
</style>
