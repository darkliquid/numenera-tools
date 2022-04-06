<template>
  <v-theme-provider :theme="darkMode ? 'dark' : 'light'">
    <v-app id="viewport">
      <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Numenera Playground</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-switch
          v-model="darkMode"
          color="primary"
          hide-details
          density="compact"
          class="dark-mode-switch"
          :prepend-icon="darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
        ></v-switch>
        <template v-if="topnav.length > 0">
          <v-btn
            v-for="(item, i) in topnav"
            :key="i"
            :to="item.href"
            v-text="item.text"
            >
          </v-btn>
        </template>
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
            <v-list-item-avatar start>
              <v-icon :icon="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12" md="10" lg="8">
              <slot></slot>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  inject: ["mq"],
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
  data () {
    return {
      darkMode: this.mq.isDark
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

<style scoped lang="scss">
#viewport {
  background: none;
}

.v-list-item-avatar {
  margin-right: 8px;
}

.dark-mode-switch {
  flex: none;
}
</style>
