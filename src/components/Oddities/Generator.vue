<template>
  <div class="v-card">
    <header class="v-card__title">
      <h2 class="v-card__title-text">Numenera Oddity Generator</h2>
    </header>
    <div class="v-card__supporting-text">
      <p class="description">{{ phrase }}</p>
    </div>
    <div class="v-card__actions">
      <v-btn colored @click.native="generate">Random</v-btn>
    </div>
  </div>
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
