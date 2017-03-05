<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Rumour Generator</h2>
    </header>
    <div class="mdl-card__supporting-text">
      <p class="description">{{ phrase }}</p>
      <p class="description">{{ aside }}</p>
    </div>
    <div class="mdl-card__actions">
      <mdl-button colored @click.native="generate">Random</mdl-button>
    </div>
  </div>
</template>

<script>
import aside from 'data/rumours/asides'
import effect from 'data/rumours/effects'
import creature from 'data/rumours/creatures'
import location from 'data/rumours/locations'
import job from 'data/rumours/jobs'
import phrase from 'data/rumours/phrases'
import object from 'data/rumours/objects'
import place from 'data/rumours/places'
import utils from 'utils'

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
      phrase: ''
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

<style scoped>
.mdl-card {
  flex: none;
  min-width: 50%;
  overflow: initial;
  margin-bottom: 4em;
}

.description {
  font-size: 150%;
  min-height: 50px;
}
</style>
