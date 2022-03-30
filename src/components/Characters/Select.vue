<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Character Generator</h2>
    </header>
    <div class="mdl-card__supporting-text">
      Choose your Descriptor, Type and Focus
    </div>
    <form>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <span class="sentence-fragment">I am a</span>
          <mdl-select-field id="descriptor" :value="descriptor" :options="groupedDescriptors" grouped label="Choose a Descriptor" @input="updateDescriptor"/>
        </div>
      </div>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <mdl-select-field id="type" :value="type" :options="groupedTypes" grouped label="Choose a Type" @input="updateType"/>
        </div>
      </div>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <span class="sentence-fragment">who</span>
          <mdl-select-field id="focus" :value="focus" :options="groupedFoci" grouped label="Choose a Focus" @input="updateFocus"/>
        </div>
      </div>
    </form>
    <div class="mdl-card__actions">
      <mdl-button @click.native="randomSelection">Random</mdl-button>
      <mdl-button class="fr" colored @click.native="nextCharacterStep" :disabled="!allSelected">Next</mdl-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import MdlSelectField from '../MdlSelectField.vue'

function groupedOptions (arr) {
  return function () {
    var grouping = {}
    this[arr].forEach(function (item) {
      if (!grouping[item.sourcebook]) {
        grouping[item.sourcebook] = [{ label: item.name, value: item }]
      } else {
        grouping[item.sourcebook].push({ label: item.name, value: item })
      }
    })

    var options = []
    Object.keys(grouping).sort().forEach(function (item) {
      options.push({
        label: item,
        options: grouping[item].sort(function (a, b) {
          if (a.label < b.label) {
            return -1
          }

          if (a.label > b.label) {
            return 1
          }

          return 0
        })
      })
    })

    return options
  }
}

export default {
  components: {
    MdlSelectField
  },
  props: {
    descriptors: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    foci: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    types: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  methods: {
    randomSelection () {
      this.updateDescriptor(this.descriptors[Math.floor(Math.random() * this.descriptors.length)])
      this.updateType(this.types[Math.floor(Math.random() * this.types.length)])
      this.updateFocus(this.foci[Math.floor(Math.random() * this.foci.length)])
    },
    updateFocus (focus) {
      this.$store.commit('chargen/updateFocus', focus)
    },
    updateDescriptor (descriptor) {
      this.$store.commit('chargen/updateDescriptor', descriptor)
    },
    updateType (type) {
      this.$store.commit('chargen/updateType', type)
    },
    nextCharacterStep () {
      this.$store.commit('chargen/updateStep', 2)
    }
  },
  computed: {
    ...mapState({
      type: state => state.chargen.type,
      focus: state => state.chargen.focus,
      descriptor: state => state.chargen.descriptor
    }),
    allSelected () {
      return this.type && this.focus && this.descriptor
    },
    groupedTypes: groupedOptions('types'),
    groupedFoci: groupedOptions('foci'),
    groupedDescriptors: groupedOptions('descriptors')
  }
}
</script>

<style scoped>
.mdl-card__media img {
  max-width: 100%;
}

.label {
  padding: 20px 0;
  text-align: center;
}

.is-small-screen .label {
  display: block;
}

.sentence-fragment {
  text-align: center;
  display: block;
  font-weight: bold;
}
</style>
