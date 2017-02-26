import op from 'object-path'

function sum (acc, val) {
  return acc + (val || 0)
}

function combined (state, objpath, reducer, def) {
  return [
    op.get(state, `descriptor.${objpath}`),
    op.get(state, `type.${objpath}`),
    op.get(state, `focus.${objpath}`)
  ].reduce(reducer, def)
}

function totaller (objpath) {
  return function (state) {
    return combined(
      state,
      objpath,
      sum,
      0
    )
  }
}

function collection (objpath) {
  return function (state) {
    return combined(
      state,
      objpath,
      (acc, val) => { return val ? acc.concat(val) : acc },
      []
    )
  }
}

const getters = {
  minMight: totaller('stats.might'),
  minSpeed: totaller('stats.speed'),
  minIntellect: totaller('stats.intellect'),
  minMightEdge: totaller('edges.might'),
  minSpeedEdge: totaller('edges.speed'),
  minIntellectEdge: totaller('edges.intellect'),
  totalStatPoints: totaller('stats.points'),
  totalEdgePoints: totaller('edges.points'),
  totalShins: totaller('shins'),
  maxCyphers: totaller('cypherlimit'),
  allEquipment: collection('equipment'),
  allAbilities: collection('abilities'),
  allPracticeds: collection('skills.practiced'),
  allSkills: collection('skills.trained'),
  allInabilities: collection('skills.inability'),
  allCyphers: collection('cyphers'),
  allOddities: collection('oddities'),
  allSources: function (state) {
    var sources = {
      descriptor: [{ sourcebook: state.descriptor.sourcebook, page: state.descriptor.page }],
      type: [{ sourcebook: state.type.sourcebook, page: state.type.page }],
      focus: [{ sourcebook: state.focus.sourcebook, page: state.focus.page }]
    }

    for (var key in sources) {
      var alt = op.get(state, `${key}.sources`)
      if (alt && alt.length > 0) {
        sources[key].concat(...alt)
      }
    }

    return sources
  }
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
    },
    shins: 0,
    cyphers: [],
    oddities: [],
    cypherlimit: 0
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
