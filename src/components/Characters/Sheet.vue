<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Character Generator</v-card-title>
    </v-card-header-text>
    <v-card-text>
      <v-form>
        <h3>
          Pools
          <span class="points" v-if="stats.points > 0">({{ stats.points }} remaining points)</span>
        </h3>
        <v-row no-gutters>
          <v-col>
            <h4>Might</h4>
            <stat :min="minMight" :points="stats.points" pool="might" @add="incStat" @remove="decStat"/>
          </v-col>
          <v-col>
            <h4>Speed</h4>
            <stat :min="minSpeed" :points="stats.points" pool="speed" @add="incStat" @remove="decStat"/>
          </v-col>
          <v-col>
            <h4>Intellect</h4>
            <stat :min="minIntellect" :points="stats.points" pool="intellect" @add="incStat" @remove="decStat"/>
          </v-col>
        </v-row>

        <h3>
          Edge
          <span class="points" v-if="edges.points > 0">({{ edges.points }} remaining points)</span>
        </h3>
        <v-row>
          <v-col>
            <h4>Might</h4>
            <stat :min="minMightEdge" :points="edges.points" pool="might" @add="incEdge" @remove="decEdge"/>
          </v-col>
          <v-col>
            <h4>Speed</h4>
            <stat :min="minSpeedEdge" :points="edges.points" pool="speed" @add="incEdge" @remove="decEdge"/>
          </v-col>
          <v-col>
            <h4>Intellect</h4>
            <stat :min="minIntellectEdge" :points="edges.points" pool="intellect" @add="incEdge" @remove="decEdge"/>
          </v-col>
        </v-row>

        <h3>Skills</h3>
        <v-row>
          <v-col>
            <h4>Practiced</h4>
            <v-list v-if="allPracticeds.length > 0">
              <v-list-item v-for="item in allPracticeds">{{ item }}</v-list-item>
            </v-list>
          </v-col>
          <v-col>
            <h4>Trained</h4>
            <v-list v-if="allSkills.length > 0">
              <v-list-item v-for="item in allSkills">{{ item }}</v-list-item>
            </v-list>
          </v-col>
          <v-col>
            <h4>Inability</h4>
            <v-list v-if="allInabilities.length > 0">
              <v-list-item v-for="item in allInabilities">{{ item }}</v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <h3>Abilities</h3>
        <v-row>
          <v-col>
            <h4>Fixed abilities</h4>
            <div class="padded" v-if="allAbilities.fixed.length > 0">
              <v-chip v-for="item in allAbilities.fixed">{{ item }}</v-chip>
            </div>
          </v-col>
          <v-row>
            <h4>
              Chosen abilities
              <span class="fr" v-if="abilities.length < 2">(choose {{ 2-abilities.length }})</span>
            </h4>
            <div class="padded" v-if="abilities.length < 2">
              <v-chip
                v-for="choice in availableAbilities"
                delete-icon="check_circle"
                @delete="addAbility(choice)"
              >
                {{ choice.ability }}
              </v-chip>
            </div>
            <div class="padded" v-if="abilities.length > 0">
              <v-chip
                v-for="choice in abilities"
                @delete="removeAbility(choice)"
              >
                {{ choice.ability }}
              </v-chip>
            </div>
          </v-row>
        </v-row>

        <h3>Equipment</h3>
        <v-row>
          <v-col>
            <v-list v-if="allEquipment.length > 0">
              <v-list-item v-for="item in allEquipment">{{ item }}</v-list-item>
            </v-list>
          </v-col>
          <v-row>
            <h4 v-if="totalArmor > 0">Armor: {{ totalArmor }}</h4>
            <h4>Shins: {{ totalShins }}</h4>
            <h4>Cyphers <span class="fr">(Limit: {{ maxCyphers }})</span></h4>
            <v-list v-if="allCyphers.length > 0">
              <v-list-item v-for="item in allCyphers">{{ item }}</v-list-item>
            </v-list>
            <h4 v-if="allArtifacts.length > 0">Artifacts</h4>
            <v-list v-if="allArtifacts.length > 0">
              <v-list-item v-for="item in allArtifacts">{{ item }}</v-list-item>
            </v-list>
            <h4 v-if="allOddities.length > 0">Oddities</h4>
            <v-list v-if="allOddities.length > 0">
              <v-list-item v-for="item in allOddities">{{ item }}</v-list-item>
            </v-list>
          </v-row>
        </v-row>

        <h3 v-if="allExtras.length > 0">Extra Notes</h3>
        <v-row>
          <v-col>
            <v-list v-if="allExtras.length > 0">
              <v-list-item v-for="item in allExtras">{{ item }}</v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <h3>Sourcebooks</h3>
        <dl class="v-list">
          <dt class="v-list__item">{{ descriptor.name }}</dt>
          <dd class="v-list__item" v-for="src in allSources.descriptor">
            {{ src.sourcebook }}, page {{ src.page }}
          </dd>
          <dt class="v-list__item">{{ type.name }}</dt>
          <dd class="v-list__item" v-for="src in allSources.type">
            {{ src.sourcebook }}, page {{ src.page }}
          </dd>
          <dt class="v-list__item">{{ focus.name }}</dt>
          <dd class="v-list__item" v-for="src in allSources.focus">
            {{ src.sourcebook }}, page {{ src.page }}
          </dd>
        </dl>
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
    addAbility (choice) {
      this.$store.commit('chargen/addAbility', choice)
    },
    removeAbility (choice) {
      this.$store.commit('chargen/removeAbility', choice)
    },
    prevCharacterStep () {
      this.$store.commit('chargen/updateStep', 1)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
