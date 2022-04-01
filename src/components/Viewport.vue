<template>
  <v-app id="viewport" fill-height>
    <v-app-bar app v-if="topnav.length > 0">
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Numenera Playground</v-app-bar-title>
      <v-btn
        v-for="(item, i) in topnav"
        :key="i"
        :to="item.href"
        v-text="item.text"
        >
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawerOpen" v-if="sidenav.length > 0">
      <v-list nav>
        <v-list-item
          v-for="(item, i) in sidenav"
          :key="i"
          :value="item"
          :to="item.href"
          active-color="primary"
        >
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main fill-height>
      <v-container fluid fill-height>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
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
  computed: {
    drawerOpen: {
      get() {
        return this.$store.state.drawerOpen
      },
      set(value) {
        this.$store.commit('setDrawerOpen', value)
      },
    }
  },
  methods: mapMutations(['toggleDrawer']),
  watch: {
    '$route': function () {
      if (this.drawerOpen) {
        this.$store.commit('toggleDrawer')
      }
    }
  }
}
</script>

<style lang="scss">
#viewport {
  background: url('../assets/images/MCG-Numenera-Obelisk-of-the-Water-God.jpg') center / cover;
  background-attachment: fixed;
  height: 100%;
}
</style>
