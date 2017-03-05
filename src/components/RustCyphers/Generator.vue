<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Rust Cypher Generator</h2>
    </header>
    <div class="mdl-card__supporting-text">
      <h4>A level {{ level }} rust cypher that targets {{ typedesc }}</h4>
      <dl>
        <dt>Description</dt>
        <dd>{{ description }}</dd>
        <dt>Ability</dt>
        <dd>{{ ability }}</dd>
        <dt>Operation</dt>
        <dd>{{ operation }}</dd>
      </dl>
    </div>
    <div class="mdl-card__actions">
      <mdl-button colored @click.native="generate">Random</mdl-button>
    </div>
  </div>
</template>

<script>
import abilities from 'data/rust-cyphers/abilities'
import appearances from 'data/rust-cyphers/appearances'
import operations from 'data/rust-cyphers/operations'
import utils from 'utils'

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
      operation: ''
    }
  },
  mounted () {
    this.generate()
  },
  methods: {
    generate () {
      var materials = new Set()
      var shapes = new Set()
      var looks = new Set()
      var num = 0

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
h4 {
  margin-top: 0;
}

dd {
  margin: 1em 0;
}
</style>
