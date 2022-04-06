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
        <template v-slot:append v-if="topnav.length > 0">
          <v-menu anchor="start">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list border>
              <v-list-item
                v-for="(item, i) in topnav"
                :key="i"
                :to="item.to"
                :href="item.href"
              >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>          
        </template>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawerOpen" v-if="sidenav.length > 0">
        <v-list nav>
          <v-list-item
            v-for="(item, i) in sidenav"
            :key="i"
            :value="item"
            :to="item.to"
            :href="item.href"
            active-color="primary"
          >
            <v-list-item-avatar start class="nav-icon">
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

<style lang="scss">
#viewport {
  background: none;
}

#viewport .nav-icon {
  margin-right: 8px;
}

#viewport .dark-mode-switch {
  flex: none;
}

#viewport .dark-mode-switch .mdi-weather-night {
  color: rgb(var(--v-theme-primary));
}

#viewport .dark-mode-switch .mdi-white-balance-sunny {
  color: rgb(var(--v-theme-warning));
}
</style>
