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
  totalArmor: totaller('armor'),
  maxCyphers: totaller('cypherlimit'),
  allEquipment: collection('equipment'),
  allPracticeds: collection('skills.practiced'),
  allSkills: collection('skills.trained'),
  allInabilities: collection('skills.inability'),
  allCyphers: collection('cyphers'),
  allOddities: collection('oddities'),
  allArtifacts: collection('artifacts'),
  allExtras: collection('extras'),
  allSources: function (state) {
    var sources = {
      descriptor: [{ sourcebook: state.descriptor.sourcebook, page: state.descriptor.page }],
      type: [{ sourcebook: state.type.sourcebook, page: state.type.page }],
      focus: [{ sourcebook: state.focus.sourcebook, page: state.focus.page }]
    }

    for (var key in sources) {
      var alt = op.get(state, `${key}.sources`)
      if (alt && alt.length > 0) {
        sources[key] = sources[key].concat(alt)
      }
    }

    state.abilities.forEach(function (ability) {
      var src = { sourcebook: ability.sourcebook, page: ability.page }
      if (!sources['type'].find(x => x.sourcebook === src.sourcebook && x.page === src.page)) {
        sources['type'].push(src)
      }
    })

    return sources
  },
  allAbilities: function (state) {
    // Get our list of fixed abilities here
    var fixed = (op.get(state, 'focus.abilities') || []).concat(op.get(state, 'descriptor.abilities') || [])
    fixed = [...new Set(fixed)]

    // Get our list of 'pick two' abilities
    var choices = []
    state.type.abilities.forEach(function (ability) {
      if (!fixed.includes(ability)) {
        choices.push({
          sourcebook: state.type.sourcebook,
          page: state.type.page,
          ability: ability
        })
      }
    })

    // Now a special case to handle extensions (from player options, etc)
    if (state.type.hasOwnProperty('extensions')) {
      state.type.extensions.forEach(function (ext) {
        if (ext.hasOwnProperty('abilities')) {
          ext.abilities.forEach(function (ability) {
            choices.push({
              sourcebook: ext.sourcebook,
              page: ext.page,
              ability: ability
            })
          })
        }
      })
    }

    return {
      fixed,
      choices
    }
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
    abilities: [],
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
    },
    addAbility (state, choice) {
      state.abilities.push(choice)
    },
    removeAbility (state, choice) {
      state.abilities.splice(state.abilities.findIndex((val) => val === choice), 1)
    }
  }
}
