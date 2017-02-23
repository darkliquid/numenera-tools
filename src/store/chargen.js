export default {
  namespaced: true,
  state: {
    descriptor: '',
    type: '',
    focus: '',
    step: 1,
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
    },
    updateStep (state, step) {
      state.step = step
    }
  }
}
