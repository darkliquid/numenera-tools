<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Name Generator</h2>
    </header>
    <div class="mdl-card__supporting-text">
      <p class="description">{{ name }}</p>
    </div>
    <div class="mdl-card__actions">
      <mdl-button colored @click.native="generate">Random</mdl-button>
    </div>
  </div>
</template>

<script>
import model from '../../data/names/names.json'
import makeGenerator from 'ngram-word-generator'
import utils from '../../utils'

export default {
  data () {
    return {
      name: ''
    }
  },
  created () {
    this.generator = makeGenerator(model)
  },
  mounted () {
    this.name = utils.capitalise(this.generator(utils.randNum(5) + 3))
  },
  methods: {
    generate () {
      this.name = utils.capitalise(this.generator(utils.randNum(5) + 3))
    }
  }
}
</script>
