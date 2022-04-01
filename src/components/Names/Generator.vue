<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Name Generator</v-card-title>
    </v-card-header-text>
    <v-card-text>
      {{ name }}
    </v-card-text>
    <v-card-actions>
      <v-btn colored @click="generate">Random</v-btn>
    </v-card-actions>
  </v-card>
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
