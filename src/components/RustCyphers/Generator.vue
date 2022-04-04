<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Rust Cypher Generator</v-card-title>
    </v-card-header-text>
    <v-card-text>
      <h3>A level {{ level }} rust cypher that targets {{ typedesc }}</h3>
      <dl>
        <dt>Description</dt>
        <dd>{{ description }}</dd>
        <dt>Ability</dt>
        <dd>{{ ability }}</dd>
        <dt>Operation</dt>
        <dd>{{ operation }}</dd>
      </dl>
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
import abilities from '../../data/rust-cyphers/abilities'
import appearances from '../../data/rust-cyphers/appearances'
import operations from '../../data/rust-cyphers/operations'
import utils from '../../utils'

export default {
  computed: {
    typedesc () {
      return {
        self: 'yourself',
        area: 'an area',
        other: 'anything'
      }[this.type]
    }
  },
  data () {
    return {
      type: '',
      level: 3,
      description: '',
      ability: '',
      operation: '',
      copied: false,
      dataUrl: '',
      randomState: null
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
      this.dataUrl = `${window.origin}${pathPrefix}rust-cyphers/${data}`
      navigator.clipboard.writeText(this.dataUrl)
      this.copied = true
    },
    generate () {
      var materials = new Set()
      var shapes = new Set()
      var looks = new Set()
      var num = 0

      // store the current random state in case we want to share this
      this.randomState = utils.getRandomState();

      while (true) {
        materials.add(utils.randItem(appearances.material))
        num = utils.randNum(20)
        if (num !== 19) {
          break
        }
      }

      while (true) {
        shapes.add(utils.randItem(appearances.shape))
        num = utils.randNum(20)
        if (num !== 19) {
          break
        }
      }

      while (true) {
        looks.add(utils.randItem(appearances.lookfeel))
        num = utils.randNum(20)
        if (num !== 19) {
          break
        }
      }

      this.type = utils.randItem(['self', 'area', 'other'])
      this.level = utils.randNum(6) + 2
      this.description = utils.cleanSentence([
        'a',
        utils.arrayToSentence([...looks]).toLowerCase(),
        'object, made of',
        utils.arrayToSentence([...materials]).toLowerCase(),
        'shaped like',
        utils.arrayToSentence([...shapes]).toLowerCase()
      ].join(' '))
      this.ability = utils.randItem(abilities[this.type])
      this.operation = utils.randItem(operations[this.type])
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 0;
  margin-bottom: 1em;
}

dt {
  font-weight: bold;
}

dd {
  margin: 1em 0;
}
</style>
