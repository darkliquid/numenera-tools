import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    drawerOpen: false
  },
  mutations: {
    toggleDrawer (state) {
      state.drawerOpen = !state.drawerOpen
    }
  }
})

export default store
