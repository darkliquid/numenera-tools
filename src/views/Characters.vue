<template>
  <character-select :sourcebooks="sourcebooks" :types="types" :foci="foci" :descriptors="descriptors" v-if="step === 1"/>
  <character-sheet v-if="step === 2"/>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
import chargen from '../store/chargen'
store.registerModule('chargen', chargen, { runInNewContext: false })

import CharacterSelect from '../components/Characters/Select.vue'
import CharacterSheet from '../components/Characters/Sheet.vue'

import descriptors from '../data/chargen/descriptors'
import foci from '../data/chargen/foci'
import types from '../data/chargen/types'
import sourcebooks from '../data/chargen/sourcebooks'

export default {
  components: {
    CharacterSelect,
    CharacterSheet
  },
  data () {
    return {
      descriptors,
      types,
      foci,
      sourcebooks,
    }
  },
  computed: {
    ...mapState({
      step: state => state.chargen.step,
    })
  },
  beforeRouteEnter(to, from) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    if (to.params.data) {
      store.commit('chargen/setData', to.params.data)
    } else {
      store.commit('chargen/updateStep', 1)
    }
  },
}
</script>

<style>
#characters {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}
</style>
