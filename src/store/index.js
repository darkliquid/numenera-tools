import Vue from 'vue'
import Vuex from 'vuex'
import chargen from './chargen'

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
  },
  modules: {
    chargen
  }
})

export default store
