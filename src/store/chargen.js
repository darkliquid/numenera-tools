export default {
  namespaced: true,
  state: {
    descriptor: '',
    type: '',
    focus: '',
    points: 0
  },
  mutations: {
    updateDescriptor (state, descriptor) {
      state.descriptor = descriptor
    },
    updateFocus (state, focus) {
      state.focus = focus
    },
    updateType (state, type) {
      state.type = type
    }
  }
}
