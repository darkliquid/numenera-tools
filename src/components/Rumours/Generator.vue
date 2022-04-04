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
      aside: '',
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
      this.dataUrl = `${window.origin}${pathPrefix}rumours/${data}`
      navigator.clipboard.writeText(this.dataUrl)
      this.copied = true
    },
    generate () {
      this.randomState = utils.getRandomState()
      this.phrase = utils.cleanSentence(utils.randomlyInterpolate(templates, 'phrase'))
      this.aside = utils.cleanSentence(utils.randomlyInterpolate(templates, 'aside'))
    }
  }
}
</script>
