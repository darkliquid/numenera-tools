import op from 'object-path'
import isEqual from 'lodash/isEqual'
import utils from '../utils'
import 'core-js/es/typed-array/uint8-array'

import descriptors from '../data/chargen/descriptors'
import types from '../data/chargen/types'
import foci from '../data/chargen/foci'

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

function abilityList(state, objpath, srcpath) {
  var results = [];
  var abilities = (op.get(state, objpath) || []);
  var src = state;
  if (srcpath) {
    src = op.get(state, srcpath);
  }
  abilities.forEach(function (ability) {
    results.push({
      sourcebook: src.sourcebook,
      page: src.page,
      ability: ability
    })
  });
  return results;
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
    var fixed = [
      ...abilityList(state, 'type.abilities.fixed', 'type'),
      ...abilityList(state, 'focus.abilities.fixed', 'focus'),
      ...abilityList(state, 'descriptor.abilities.fixed', 'descriptor')
    ];

    // Get our list of 'pick two' abilities
    var optional = [
      ...abilityList(state, 'type.abilities.optional', 'type'),
      ...abilityList(state, 'focus.abilities.optional', 'focus'),
      ...abilityList(state, 'descriptor.abilities.optional', 'descriptor'),
    ];

    // Now a special case to handle extensions (from player options, etc)
    // added by types, descriptors or focus.
    (op.get(state, 'type.extensions') || []).forEach(function (ext) {
      fixed = [
        ...fixed,
        ...abilityList(ext, 'abilities.fixed')
      ]
      optional = [
        ...optional,
        ...abilityList(ext, 'abilities.optional')
      ]
    });

    (op.get(state, 'focus.extensions') || []).forEach(function (ext) {
      fixed = [
        ...fixed,
        ...abilityList(ext, 'abilities.fixed')
      ]
      optional = [
        ...optional,
        ...abilityList(ext, 'abilities.optional')
      ]
    });

    (op.get(state, 'descriptor.extensions') || []).forEach(function (ext) {
      fixed = [
        ...fixed,
        ...abilityList(ext, 'abilities.fixed')
      ]
      optional = [
        ...optional,
        ...abilityList(ext, 'abilities.optional')
      ]
    });

    return {
      fixed,
      optional
    }
  },
  shareData: function (state) {
    // none of our numbers are going to be greater than 255
    // we simply don't have that many abilities/options/etc
    // across all of our sources combined
    var bytes = new Uint8Array([
      descriptors.findIndex((val) => isEqual(val, state.descriptor)),
      types.findIndex((val) => isEqual(val, state.type)),
      foci.findIndex((val) => isEqual(val, state.focus)),
      state.stats.might - getters.minMight(state),
      state.stats.speed - getters.minSpeed(state),
      state.stats.intellect - getters.minIntellect(state),
      state.edges.might - getters.minMightEdge(state),
      state.edges.speed - getters.minSpeedEdge(state),
      state.edges.intellect - getters.minIntellectEdge(state),
      ...state.abilities.map((ability) => {
        return getters.allAbilities(state).optional.findIndex((val) => isEqual(val, ability))
      })
    ]);

    return bytes
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
    abilities: [],
    cypherlimit: 0,
    excludedSourcebooks: []
  },
  getters,
  mutations: {
    updateExcludedSourcebooks (state, excludedSourcebooks) {
      state.excludedSourcebooks = excludedSourcebooks
    },
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
      } else {
        state.abilities = []
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
    toggleAbility (state, choice) {
      var idx = state.abilities.findIndex((val) => isEqual(val, choice))
      if (idx < 0) {
        state.abilities.push(choice)
      } else {
        state.abilities.splice(idx, 1)
      }
    },
    setData (state, encodedData) {
      var data = utils.decodeURLSafeBase64ToUint8Array(encodedData);

      state.descriptor = descriptors[data[0]]
      state.type = types[data[1]]
      state.focus = foci[data[2]]
      state.stats.might = getters.minMight(state) + data[3]
      state.stats.speed = getters.minSpeed(state) + data[4]
      state.stats.intellect = getters.minIntellect(state) + data[5]
      state.stats.points = getters.totalStatPoints(state) - data[3] - data[4] - data[5]
      state.edges.might = getters.minMightEdge(state) + data[6]
      state.edges.speed = getters.minSpeedEdge(state) + data[7]
      state.edges.intellect = getters.minIntellectEdge(state) + data[8]
      state.edges.points = getters.totalEdgePoints(state) - data[6] - data[7] - data[8]
      state.abilities = data.slice(9).map((idx) => {
        return getters.allAbilities(state).optional[idx]
      })
      state.step = 2
    }
  }
}
