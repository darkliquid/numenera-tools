import chargen from './chargen'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      drawerOpen: false
    }
  },
  mutations: {
    toggleDrawer (state) {
      state.drawerOpen = !state.drawerOpen
    },
    setDrawerOpen (state, value) {
      state.drawerOpen = !!value
    }
  },
  modules: {
    chargen
  }
})

export default store
