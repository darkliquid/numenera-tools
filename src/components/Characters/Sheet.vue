<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>{{ title }}</v-card-title>
    </v-card-header-text>
    <v-card-text>
      <v-form>
          <v-card variant="plain">
            <v-card-title>
              Pools <template v-if="stats.points > 0"> ({{ stats.points }} remaining points)</template>
            </v-card-title>
            <v-card-text>
              <v-row no-gutters>
                <v-col>
                  <h4 class="text-center">Might</h4>
                  <stat class="d-flex justify-center" :min="minMight" :points="stats.points" :value="stats.might" pool="might" @add="incStat" @remove="decStat"/>
                </v-col>
                <v-col>
                  <h4 class="text-center">Speed</h4>
                  <stat class="d-flex justify-center" :min="minSpeed" :points="stats.points" :value="stats.speed" pool="speed" @add="incStat" @remove="decStat"/>
                </v-col>
                <v-col>
                  <h4 class="text-center">Intellect</h4>
                  <stat class="d-flex justify-center" :min="minIntellect" :points="stats.points" :value="stats.intellect" pool="intellect" @add="incStat" @remove="decStat"/>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card variant="plain">
            <v-card-title>
              Edge <template v-if="edges.points > 0"> ({{ edges.points }} remaining points)</template>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <h4 class="text-center">Might</h4>
                  <stat class="d-flex justify-center" :min="minMightEdge" :points="edges.points" :value="edges.might" pool="might" @add="incEdge" @remove="decEdge"/>
                </v-col>
                <v-col>
                  <h4 class="text-center">Speed</h4>
                  <stat class="d-flex justify-center" :min="minSpeedEdge" :points="edges.points" :value="edges.speed" pool="speed" @add="incEdge" @remove="decEdge"/>
                </v-col>
                <v-col>
                  <h4 class="text-center">Intellect</h4>
                  <stat class="d-flex justify-center" :min="minIntellectEdge" :points="edges.points" :value="edges.intellect" pool="intellect" @add="incEdge" @remove="decEdge"/>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card variant="plain">
            <v-card-title>Skills</v-card-title>
            <v-card-text>
              <v-row>
                <v-col v-if="allPracticeds.length > 0">
                  <h4>Practiced</h4>
                  <v-list>
                    <v-list-item v-for="item in allPracticeds" :key="item">{{ item }}</v-list-item>
                  </v-list>
                </v-col>
                <v-col v-if="allSkills.length > 0">
                  <h4>Trained</h4>
                  <v-list>
                    <v-list-item v-for="item in allSkills" :key="item">{{ item }}</v-list-item>
                  </v-list>
                </v-col>
                <v-col v-if="allInabilities.length > 0">
                  <h4>Inability</h4>
                  <v-list>
                    <v-list-item v-for="item in allInabilities" :key="item">{{ item }}</v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card variant="plain">
            <v-card-title>Abilities</v-card-title>
            <v-card-text>
              <v-row>
                <v-col v-if="availableFixedAbilities.length > 0">
                  <h4>Fixed abilities</h4>
                  <v-chip
                    v-for="item in availableFixedAbilities"
                    :key="item"
                    class="ma-2"
                    color="primary">
                    {{ item.ability }}
                  </v-chip>
                </v-col>
                <v-col v-if="availableOptionalAbilities.length > 0">
                  <h4>
                    Chosen abilities
                    <span class="fr" v-if="abilities.length < 2">(choose {{ 2-abilities.length }})</span>
                  </h4>
                  <v-chip
                    v-for="choice in availableOptionalAbilities"
                    @click="toggleAbility(choice)"
                    :key="choice"
                    class="ma-2"
                    :color="isChosen(choice) ? 'primary' : 'grey lighten-2'">
                    {{ choice.ability }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card variant="plain">
            <v-card-title>Equipment</v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-list v-if="allEquipment.length > 0">
                    <v-list-item v-for="item in allEquipment" :key="item">{{ item }}</v-list-item>
                  </v-list>
                </v-col>
                <v-col>
                  <v-list>
                    <v-list-item v-if="totalArmor > 0">Armor: {{ totalArmor }}</v-list-item>
                    <v-list-item>Shins: {{ totalShins }}</v-list-item>
                    <v-list-subheader>
                      Cyphers (Limit: {{ maxCyphers }})
                    </v-list-subheader>
                    <template v-if="allCyphers.length > 0">
                      <v-list-item v-for="item in allCyphers" :key="item">{{ item }}</v-list-item>
                    </template>
                    <template v-if="allArtifacts.length > 0">
                      <v-list-subheader>Artifacts</v-list-subheader>
                      <v-list-item v-for="item in allArtifacts" :key="item">{{ item }}</v-list-item>
                    </template>
                    
                    <template v-if="allOddities.length > 0">
                      <v-list-subheader>Oddities</v-list-subheader>
                      <v-list-item v-for="item in allOddities" :key="item">{{ item }}</v-list-item>
                    </template>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card variant="plain" v-if="allExtras.length > 0">
            <v-card-title>Extra Notes</v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-list v-if="allExtras.length > 0">
                    <v-list-item v-for="item in allExtras" :key="item">{{ item }}</v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card variant="plain">
            <v-card-title>Sourcebooks</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-subheader>{{ descriptor.name }}</v-list-subheader>
                <v-list-item v-for="src in allSources.descriptor" :key="src">
                  {{ src.sourcebook }}, page {{ src.page }}
                </v-list-item>
                <v-list-subheader>{{ type.name }}</v-list-subheader>
                <v-list-item v-for="src in allSources.type" :key="src">
                  {{ src.sourcebook }}, page {{ src.page }}
                </v-list-item>
                <v-list-subheader>{{ focus.name }}</v-list-subheader>
                <v-list-item v-for="src in allSources.focus" :key="src">
                    {{ src.sourcebook }}, page {{ src.page }}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn colored @click="prevCharacterStep">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="shareCharacter"
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
import { mapState, mapGetters } from 'vuex'
import _some from 'lodash/some'
import utils from '../../utils'

import Stat from './Stat.vue'

export default {
  components: {
    Stat
  },
  data() {
    return {
      copied: false,
      dataUrl: ''
    }
  },
  computed: {
    ...mapState('chargen', [
      'stats',
      'edges',
      'descriptor',
      'type',
      'focus',
      'abilities',
      'excludedSourcebooks'
    ]),
    ...mapGetters('chargen', [
      'minMight',
      'minMightEdge',
      'minSpeed',
      'minSpeedEdge',
      'minIntellect',
      'minIntellectEdge',
      'totalStatPoints',
      'totalEdgePoints',
      'totalShins',
      'maxCyphers',
      'allEquipment',
      'allAbilities',
      'allPracticeds',
      'allSkills',
      'allInabilities',
      'allSources',
      'allCyphers',
      'allOddities',
      'totalArmor',
      'allArtifacts',
      'allExtras',
      'shareData'
    ]),
    availableFixedAbilities () {
      return this.allAbilities.fixed.filter((x) => {
        var notExcluded = [...this.excludedSourcebooks].indexOf(x.sourcebook) === -1
        return notExcluded
      })
    },
    availableOptionalAbilities () {
      return this.allAbilities.optional.filter((x) => {
        var notExcluded = [...this.excludedSourcebooks].indexOf(x.sourcebook) === -1
        return notExcluded
      })
    },
    title () {
      return utils.cleanSentence(`A ${this.descriptor.name} ${this.type.name} who ${this.focus.name}`)
    }
  },
  methods: {
    incStat (pool) {
      this.$store.commit('chargen/updateStats', {[pool]: 1})
    },
    decStat (pool) {
      this.$store.commit('chargen/updateStats', {[pool]: -1})
    },
    incEdge (pool) {
      this.$store.commit('chargen/updateEdges', {[pool]: 1})
    },
    decEdge (pool) {
      this.$store.commit('chargen/updateEdges', {[pool]: -1})
    },
    toggleAbility (choice) {
      if (!this.isChosen(choice) && this.abilities.length >= 2) {
        return
      }

      this.$store.commit('chargen/toggleAbility', choice)
    },
    prevCharacterStep () {
      this.$router.replace({ path: '/characters' })
      this.$store.commit('chargen/updateStep', 1)
    },
    isChosen(choice) {
      return _some(this.abilities, choice)
    },
    async shareCharacter () {
      const base64_arraybuffer = async (data) => {
        // Use a FileReader to generate a base64 data URI
        const base64url = await utils.promiseBase64URL(data)
        return utils.makeBase64URLSafeBase64(base64url)
      }
      const data = await base64_arraybuffer(this.shareData)
      const pathPrefix = import.meta.env.BASE_URL;
      this.dataUrl = `${window.origin}${pathPrefix}characters/${data}`
      navigator.clipboard.writeText(this.dataUrl)
      this.copied = true
    }
  }
}
</script>

<style scoped lang="scss">
.v-chip {
  height: auto !important;
  min-height: calc(var(--v-chip-height) + 0px);
}
</style>
