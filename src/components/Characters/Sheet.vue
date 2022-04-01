<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Character Generator</v-card-title>
    </v-card-header-text>
    <v-card-text>
      <v-form>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>
              Pools <template v-if="stats.points > 0"> ({{ stats.points }} remaining points)</template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <v-col>
                  <h4 class="text-center">Might</h4>
                  <stat class="d-flex justify-center" :min="minMight" :points="stats.points" pool="might" @add="incStat" @remove="decStat"/>
                </v-col>
                <v-col>
                  <h4 class="text-center">Speed</h4>
                  <stat class="d-flex justify-center" :min="minSpeed" :points="stats.points" pool="speed" @add="incStat" @remove="decStat"/>
                </v-col>
                <v-col>
                  <h4 class="text-center">Intellect</h4>
                  <stat class="d-flex justify-center" :min="minIntellect" :points="stats.points" pool="intellect" @add="incStat" @remove="decStat"/>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              Edge <template v-if="edges.points > 0"> ({{ edges.points }} remaining points)</template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <h4 class="text-center">Might</h4>
                  <stat class="d-flex justify-center" :min="minMightEdge" :points="edges.points" pool="might" @add="incEdge" @remove="decEdge"/>
                </v-col>
                <v-col>
                  <h4 class="text-center">Speed</h4>
                  <stat class="d-flex justify-center" :min="minSpeedEdge" :points="edges.points" pool="speed" @add="incEdge" @remove="decEdge"/>
                </v-col>
                <v-col>
                  <h4 class="text-center">Intellect</h4>
                  <stat class="d-flex justify-center" :min="minIntellectEdge" :points="edges.points" pool="intellect" @add="incEdge" @remove="decEdge"/>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>Skills</v-expansion-panel-title>
            <v-expansion-panel-text>
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
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>Abilities</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col v-if="allAbilities.fixed.length > 0">
                  <h4>Fixed abilities</h4>
                  <v-chip
                    v-for="item in allAbilities.fixed"
                    :key="item"
                    class="ma-2"
                    color="primary">
                    {{ item }}
                  </v-chip>
                </v-col>
                <v-col v-if="allAbilities.choices.length > 0">
                  <h4>
                    Chosen abilities
                    <span class="fr" v-if="abilities.length < 2">(choose {{ 2-abilities.length }})</span>
                  </h4>
                  <v-chip
                    v-for="choice in allAbilities.choices"
                    @click="toggleAbility(choice)"
                    :key="choice"
                    class="ma-2"
                    :color="isChosen(choice) ? 'primary' : 'grey lighten-2'">
                    {{ choice.ability }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>Equipment</v-expansion-panel-title>
            <v-expansion-panel-text>
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
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel v-if="allExtras.length > 0">
            <v-expansion-panel-title>Extra Notes</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col>
                  <v-list v-if="allExtras.length > 0">
                    <v-list-item v-for="item in allExtras" :key="item">{{ item }}</v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>Sourcebooks</v-expansion-panel-title>
            <v-expansion-panel-text>
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
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn colored @click="prevCharacterStep">Back</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Stat from './Stat.vue'

export default {
  components: {
    Stat
  },
  computed: {
    ...mapState('chargen', [
      'stats',
      'edges',
      'descriptor',
      'type',
      'focus',
      'abilities'
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
      'allExtras'
    ]),
    availableAbilities () {
      return this.allAbilities.choices.filter(x => !this.abilities.includes(x))
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
      this.$store.commit('chargen/updateStep', 1)
    },
    isChosen(choice) {
      return this.abilities.includes(choice)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
