<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Philethis Phrase Generator</h2>
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
import action from 'data/philethis/actions'
import adjective from 'data/philethis/adjectives'
import creature from 'data/philethis/creatures'
import location from 'data/philethis/locations'
import mass from 'data/philethis/mass'
import path from 'data/philethis/paths'
import phrase from 'data/philethis/phrases'
import thing from 'data/philethis/things'
import time from 'data/philethis/times'
import utils from 'utils'

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
