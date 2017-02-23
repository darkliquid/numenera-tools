<template>
  <div id="characters">
    <character-select :types="types" :foci="foci" :descriptors="descriptors" />
  </div>
</template>

<script>
import CharacterSelect from 'components/Characters/Select'

import descriptors from 'data/chargen/descriptors'
import foci from 'data/chargen/foci'
import types from 'data/chargen/types'

export default {
  components: {
    CharacterSelect
  },
  data () {
    return {
      descriptors,
      types,
      foci
    }
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
