<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Philethis Phrase Generator</v-card-title>
    </v-card-header-text>
    <v-card-text>
      {{ phrase }}
    </v-card-text>
    <v-card-actions>
      <v-btn colored @click="generate">Random</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import action from '../../data/philethis/actions'
import adjective from '../../data/philethis/adjectives'
import creature from '../../data/philethis/creatures'
import location from '../../data/philethis/locations'
import mass from '../../data/philethis/mass'
import path from '../../data/philethis/paths'
import phrase from '../../data/philethis/phrases'
import thing from '../../data/philethis/things'
import time from '../../data/philethis/times'
import utils from '../../utils'

var templates = {
  action,
  adjective,
  creature,
  location,
  mass,
  path,
  phrase,
  thing,
  time
}

export default {
  data () {
    return {
      phrase: ''
    }
  },
  mounted () {
    this.generate()
  },
  methods: {
    generate () {
      this.phrase = utils.cleanSentence(utils.randomlyInterpolate(templates, 'phrase'))
    }
  }
}
</script>
