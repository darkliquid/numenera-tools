<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Character Generator</h2>
    </header>
    <form>
      <h3>
        Pools
        <span class="points" v-if="stats.points > 0">({{ stats.points }} remaining points)</span>
      </h3>
      <div class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Might</h4>
          <stat :min="minMight" :points="stats.points" pool="might" @add="incStat" @remove="decStat"/>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Speed</h4>
          <stat :min="minSpeed" :points="stats.points" pool="speed" @add="incStat" @remove="decStat"/>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Intellect</h4>
          <stat :min="minIntellect" :points="stats.points" pool="intellect" @add="incStat" @remove="decStat"/>
        </div>
      </div>

      <h3>
        Edge
        <span class="points" v-if="edges.points > 0">({{ edges.points }} remaining points)</span>
      </h3>
      <div class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Might</h4>
          <stat :min="minMightEdge" :points="edges.points" pool="might" @add="incEdge" @remove="decEdge"/>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Speed</h4>
          <stat :min="minSpeedEdge" :points="edges.points" pool="speed" @add="incEdge" @remove="decEdge"/>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Intellect</h4>
          <stat :min="minIntellectEdge" :points="edges.points" pool="intellect" @add="incEdge" @remove="decEdge"/>
        </div>
      </div>

      <h3>Skills</h3>
      <div class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Practiced</h4>
          <ul class="mdl-list" v-if="allPracticeds.length > 0">
            <li class="mdl-list__item" v-for="item in allPracticeds">{{ item }}</li>
          </ul>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Trained</h4>
          <ul class="mdl-list" v-if="allSkills.length > 0">
            <li class="mdl-list__item" v-for="item in allSkills">{{ item }}</li>
          </ul>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Inability</h4>
          <ul class="mdl-list" v-if="allInabilities.length > 0">
            <li class="mdl-list__item" v-for="item in allInabilities">{{ item }}</li>
          </ul>
        </div>
      </div>

      <h3>Equipment</h3>
      <div class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--6-col equipment-list mdl-cell--stretch">
          <ul class="mdl-list" v-if="allEquipment.length > 0">
            <li class="mdl-list__item" v-for="item in allEquipment">{{ item }}</li>
          </ul>
        </div>
        <div class="mdl-cell mdl-cell--6-col extras-list mdl-cell--stretch">
          <h4 v-if="totalArmor > 0">Armor: {{ totalArmor }}</h4>
          <h4>Shins: {{ totalShins }}</h4>
          <h4>Cyphers <span class="fr">(Limit: {{ maxCyphers }})</span></h4>
          <ul class="mdl-list cypher-list" v-if="allCyphers.length > 0">
            <li class="mdl-list__item" v-for="item in allCyphers">{{ item }}</li>
          </ul>
          <h4 v-if="allArtifacts.length > 0">Artifacts</h4>
          <ul class="mdl-list" v-if="allArtifacts.length > 0">
            <li class="mdl-list__item" v-for="item in allArtifacts">{{ item }}</li>
          </ul>
          <h4 v-if="allOddities.length > 0">Oddities</h4>
          <ul class="mdl-list" v-if="allOddities.length > 0">
            <li class="mdl-list__item" v-for="item in allOddities">{{ item }}</li>
          </ul>
        </div>
      </div>

      <h3>Sourcebooks</h3>
      <dl class="mdl-list">
        <dt class="mdl-list__item">{{ descriptor.name }}</dt>
        <dd class="mdl-list__item" v-for="src in allSources.descriptor">
          {{ src.sourcebook }}, page {{ src.page }}
        </dd>
        <dt class="mdl-list__item">{{ type.name }}</dt>
        <dd class="mdl-list__item" v-for="src in allSources.type">
          {{ src.sourcebook }}, page {{ src.page }}
        </dd>
        <dt class="mdl-list__item">{{ focus.name }}</dt>
        <dd class="mdl-list__item" v-for="src in allSources.focus">
          {{ src.sourcebook }}, page {{ src.page }}
        </dd>
      </dl>
    </form>
    <div class="mdl-card__actions mdl-card--border">
      <mdl-button @click.native="prevCharacterStep">Back</mdl-button>
    </div>
  </mdl-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Stat from 'components/Characters/Stat'

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
      'focus'
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
      'allArtifacts'
    ])
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
    prevCharacterStep () {
      this.$store.commit('chargen/updateStep', 1)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../node_modules/material-design-lite/src/variables";
@import "../../../node_modules/material-design-lite/src/color-definitions";

.mdl-card {
  flex: none;
  min-width: 50%;
  overflow: initial;
  margin-bottom: 4em;
}

h3 {
  font-size: 20px;
  border-bottom: 1px solid $card-border-color;
  margin: 0;
  padding: 0 16px;
}

h4 {
  font-size: 16px;
  border-bottom: 1px solid $card-border-color;
  margin: 0;
}

.mdl-grid--no-spacing h4 {
  padding: 0 16px;
}

.equipment-list {
  border-bottom: 1px solid $card-border-color;
}

.extras-list {
  border-left: 1px solid $card-border-color;
  border-bottom: 1px solid $card-border-color;
}

.mdl-list {
  padding: 0;
  margin: 0;
}

.cypher-list {
  border-bottom: 1px solid $card-border-color;
}

.points {
  font-size: 75%;
  float: right;
}

</style>
