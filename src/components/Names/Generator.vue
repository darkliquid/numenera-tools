<template>
  <div class="v-card">
    <header class="v-card__title">
      <h2 class="v-card__title-text">Numenera Name Generator</h2>
    </header>
    <div class="v-card__supporting-text">
      <p class="description">{{ name }}</p>
    </div>
    <div class="v-card__actions">
      <v-btn colored @click.native="generate">Random</v-btn>
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
