<template>
  <div id="characters">
    <transition :name="transitionName">
      <character-select :types="types" :foci="foci" :descriptors="descriptors" v-if="step === 1"/>
    </transition>  
    <transition :name="transitionName">
      <character-sheet v-if="step === 2"/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CharacterSelect from '../components/Characters/Select.vue'
import CharacterSheet from '../components/Characters/Sheet.vue'

import descriptors from '../data/chargen/descriptors'
import foci from '../data/chargen/foci'
import types from '../data/chargen/types'

export default {
  components: {
    CharacterSelect,
    CharacterSheet
  },
  data () {
    return {
      descriptors,
      types,
      foci
    }
  },
  computed: {
    ...mapState({
      step: state => state.chargen.step
    }),
    transitionName () {
      return this.step === 1 ? 'slide-right' : 'slide-left'
    }
  },
  mounted () {
    this.$store.commit('chargen/updateStep', 1)
  }
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
