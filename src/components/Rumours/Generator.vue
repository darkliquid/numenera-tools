<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Rumour Generator</v-card-title>
    </v-card-header-text>
    <v-card-text>
      <p>{{ phrase }}</p><br>
      <p>{{ aside }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn colored @click="generate">Random</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import aside from '../../data/rumours/asides'
import effect from '../../data/rumours/effects'
import creature from '../../data/rumours/creatures'
import location from '../../data/rumours/locations'
import job from '../../data/rumours/jobs'
import phrase from '../../data/rumours/phrases'
import object from '../../data/rumours/objects'
import place from '../../data/rumours/places'
import utils from '../../utils'

var templates = {
  aside,
  effect,
  creature,
  location,
  job,
  phrase,
  object,
  place
}

export default {
  data () {
    return {
      phrase: '',
      aside: ''
    }
  },
  mounted () {
    this.generate()
  },
  methods: {
    generate () {
      this.phrase = utils.cleanSentence(utils.randomlyInterpolate(templates, 'phrase'))
      this.aside = utils.cleanSentence(utils.randomlyInterpolate(templates, 'aside'))
    }
  }
}
</script>
