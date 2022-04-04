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
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="share"
      >
        Share
      </v-btn>
      <v-snackbar
        v-model="copied"
      >
        Share URL copied to clipboard!
        
        <template v-slot:actions>
          <v-btn
            color="primary"
            variant="text"
            @click="copied = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
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
      name: '',
      randomState: null,
      dataUrl: '',
      copied: false
    }
  },
  created () {
    this.generator = makeGenerator(model)
  },
  mounted () {
    this.generate()
  },
  methods: {
    async share () {
      const base64_arraybuffer = async (data) => {
        // Use a FileReader to generate a base64 data URI
        const base64url = await utils.promiseBase64URL(data)
        return utils.makeBase64URLSafeBase64(base64url)
      }
      const data = await base64_arraybuffer(this.randomState)
      const pathPrefix = import.meta.env.BASE_URL;
      this.dataUrl = `${window.origin}${pathPrefix}names/${data}`
      navigator.clipboard.writeText(this.dataUrl)
      this.copied = true
    },
    generate () {
      this.randomState = utils.getRandomState()
      this.name = utils.capitalise(this.generator(utils.randNum(5) + 3, utils.random))
    }
  }
}
</script>
