<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Oddity Generator</v-card-title>
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
import phrase from '../../data/oddities/phrases'
import effect from '../../data/oddities/effects'
import material from '../../data/oddities/materials'
import trigger from '../../data/oddities/triggers'
import object from '../../data/oddities/objects'
import utils from '../../utils'

var templates = {
  phrase,
  effect,
  material,
  trigger,
  object
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
