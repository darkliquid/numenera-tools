<template>
  <v-layout class="viewport" :transparent-header="true">
    <v-layout-header-row slot="header" :title="title">
      <v-layout-spacer />
      <v-app-bar v-if="topnav.length > 0">
        <v-app-bar-router-link
          v-for="link in topnav"
          :to="link.href"
          :icon="link.icon"
        >
          {{ link.text }}
        </v-app-bar-router-link>
      </v-app-bar>
    </v-layout-header-row>
    <v-layout-drawer ref="drawer" :title="title" v-if="sidenav.length > 0">
      <v-app-bar>
        <v-app-bar-router-link
          v-for="link in sidenav"
          :to="link.href"
          :icon="link.icon"
        >
          {{ link.text }}
        </v-app-bar-router-link>
      </v-app-bar>
    </v-layout-drawer>
    <v-layout-content>
      <slot></slot>
    </v-layout-content>
    <slot name="footer"></slot>
  </v-layout>
</template>

<script>
import MdlNavRouterLink from './MdlNavRouterLink.vue'
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
  mounted () {
    this._toggleDrawer = this.$el.MaterialLayout.toggleDrawer.bind(this.$el.MaterialLayout)
    this.$el.MaterialLayout.toggleDrawer = () => {
      this.$store.commit('toggleDrawer')
    }
  },
  computed: mapState(['drawerOpen']),
  watch: {
    '$route': function () {
      if (this.drawerOpen) {
        this.$store.commit('toggleDrawer')
      }
    },
    drawerOpen (newVal) {
      if (this._toggleDrawer) {
        this._toggleDrawer()
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../node_modules/material-design-lite/src/variables";

.viewport {
  background: url('../assets/images/MCG-Numenera-Obelisk-of-the-Water-God.jpg') center / cover;
}

.v-app-barigation__link i {
  margin-right: 0.5em;
}

.v-layout__drawer .v-app-barigation .v-app-barigation__link.router-link-active {
  color: $text-link-color;
}
</style>
