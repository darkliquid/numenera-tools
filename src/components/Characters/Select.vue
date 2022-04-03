<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Character Generator</v-card-title>
      <v-card-subtitle>Choose your Descriptor, Type and Focus</v-card-subtitle>
    </v-card-header-text>
    <v-card-text>
        <v-form>
          <v-row>
            <v-col>
              <span class="sentence-fragment">I am a</span>
              <MdlSelectField
                id="descriptor"
                :value="descriptor"
                :options="groupedDescriptors"
                label="Descriptor"
                required
                grouped
                @input="updateDescriptor" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <MdlSelectField
                id="type"
                :value="type"
                :options="groupedTypes"
                label="Type"
                required
                grouped
                @input="updateType" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="sentence-fragment">who</span>
            <MdlSelectField
                id="focus"
                :value="focus"
                :options="groupedFoci"
                label="Focus"
                required
                grouped
                @input="updateFocus" />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="randomSelection">Random</v-btn>
      <v-btn colored @click="nextCharacterStep" :disabled="!allSelected">Next</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <v-form>
            <v-container fluid>
              <v-row>
                <v-col cols=12>
                  Randomise
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="randomiseDescriptor"
                    color="primary"
                    label="Descriptor"
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="randomiseType"
                    color="primary"
                    label="Type"
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="randomiseFocus"
                    color="primary"
                    label="Focus"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import MdlSelectField from '../MdlSelectField.vue';

function groupedOptions (arr) {
  return function () {
    var grouping = {}
    this[arr].forEach(function (item, index) {
      if (!grouping[item.sourcebook]) {
        grouping[item.sourcebook] = [{ label: item.name, value: index }]
      } else {
        grouping[item.sourcebook].push({ label: item.name, value: index })
      }
    })

    var options = []
    Object.keys(grouping).sort().forEach(function (item) {
      grouping[item].sort(function (a, b) {
        if (a.label < b.label) {
          return -1
        }

        if (a.label > b.label) {
          return 1
        }

        return 0
      });
      
      options.push({
        label: item,
        options: grouping[item]
      });
    });

    return options
  }
}

export default {
  components: {
    MdlSelectField
  },
  data() {
    return {
      descriptor: null,
      type: null,
      focus: null,
      show: false,
      randomiseType: true,
      randomiseDescriptor: true,
      randomiseFocus: true,
    }
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
      if (this.randomiseDescriptor) {
        this.updateDescriptor(Math.floor(Math.random() * this.descriptors.length))
      }
      if (this.randomiseType) {
        this.updateType(Math.floor(Math.random() * this.types.length))
      }
      if (this.randomiseFocus) {
        this.updateFocus(Math.floor(Math.random() * this.foci.length))
      }
    },
    updateFocus (focus) {
      this.focus = focus
      this.$store.commit('chargen/updateFocus', this.foci[focus])
    },
    updateDescriptor (descriptor) {
      this.descriptor = descriptor
      this.$store.commit('chargen/updateDescriptor', this.descriptors[descriptor])
    },
    updateType (type) {
      this.type = type
      this.$store.commit('chargen/updateType', this.types[type])
    },
    nextCharacterStep () {
      this.$store.commit('chargen/updateStep', 2)
    }
  },
  computed: {
    allSelected () {
      return this.type !== null && this.focus !== null && this.descriptor !== null
    },
    groupedTypes: groupedOptions('types'),
    groupedFoci: groupedOptions('foci'),
    groupedDescriptors: groupedOptions('descriptors')
  },
  mounted () {
    var tIdx = this.types.indexOf(this.$store.state.chargen.type);
    if (tIdx > -1) {
      this.type = tIdx
    }
    
    var fIdx = this.foci.indexOf(this.$store.state.chargen.focus);
    if (fIdx > -1) {
      this.focus = fIdx
    }
    
    var dIdx = this.descriptors.indexOf(this.$store.state.chargen.descriptor);
    if (dIdx > -1) {
      this.descriptor = dIdx
    }
  }
}
</script>

<style scoped>
.sentence-fragment {
  text-align: center;
  display: block;
  font-weight: bold;
}
</style>
