<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Oddity Generator</h2>
    </header>
    <div class="mdl-card__supporting-text">
      <p class="description">{{ phrase }}</p>
    </div>
    <div class="mdl-card__actions">
      <mdl-button colored @click.native="generate">Random</mdl-button>
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
