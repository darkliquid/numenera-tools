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
      phrase: '',
      randomState: null,
      dataUrl: '',
      copied: false
    }
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
      this.dataUrl = `${window.origin}${pathPrefix}oddities/${data}`
      navigator.clipboard.writeText(this.dataUrl)
      this.copied = true
    },
    generate () {
      this.randomState = utils.getRandomState()
      this.phrase = utils.cleanSentence(utils.randomlyInterpolate(templates, 'phrase'))
    }
  }
}
</script>
