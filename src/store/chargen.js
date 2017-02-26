import op from 'object-path'

function minPool (type, pool) {
  return function (state) {
    return [
      op.get(state, `descriptor.${type}.${pool}`),
      op.get(state, `type.${type}.${pool}`),
      op.get(state, `focus.${type}.${pool}`)
    ].reduce((acc, val) => {
      return acc + (val || 0)
    }, 0)
  }
}

const getters = {
  minMight: minPool('stats', 'might'),
  minSpeed: minPool('stats', 'speed'),
  minIntellect: minPool('stats', 'intellect'),
  minMightEdge: minPool('edge', 'might'),
  minSpeedEdge: minPool('edge', 'speed'),
  minIntellectEdge: minPool('edge', 'intellect'),
  totalStatPoints: minPool('stats', 'points'),
  totalEdgePoints: minPool('edge', 'points')
}

export default {
  namespaced: true,
  state: {
    descriptor: null,
    type: null,
    focus: null,
    step: 1,
    stats: {
      might: 0,
      speed: 0,
      intellect: 0,
      points: 0
    },
    edges: {
      might: 0,
      speed: 0,
      intellect: 0,
      points: 0
    }
  },
  getters,
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
      if (step === 2) {
        state.stats.might = getters.minMight(state)
        state.stats.speed = getters.minSpeed(state)
        state.stats.intellect = getters.minIntellect(state)
        state.edges.might = getters.minMightEdge(state)
        state.edges.speed = getters.minSpeedEdge(state)
        state.edges.intellect = getters.minIntellectEdge(state)
        state.stats.points = getters.totalStatPoints(state)
        state.edges.points = getters.totalEdgePoints(state)
      }
    },
    updateStats (state, stats) {
      Object.keys(stats).forEach(function (pool) {
        state.stats[pool] += stats[pool]
        state.stats.points -= stats[pool]
      })
    },
    updateEdges (state, edges) {
      Object.keys(edges).forEach(function (pool) {
        state.edges[pool] += edges[pool]
        state.edges.points -= edges[pool]
      })
    }
  }
}
