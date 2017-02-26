<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Character Generator</h2>
    </header>
    <form>
      <h3>Pools</h3>
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

      <h3>Edge</h3>
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
          <ul class="mdl-list">
            <li class="mdl-list__item">a</li>
            <li class="mdl-list__item">b</li>
            <li class="mdl-list__item">c</li>
          </ul>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Trained</h4>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Inability</h4>
        </div>
      </div>

      <h3>Equipment</h3>
      <div class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--6-col equipment-list mdl-cell--stretch">
          Equipment List
        </div>
        <div class="mdl-cell mdl-cell--6-col">
          <h4>Shins</h4>
          <h4>Cyphers</h4>
          <h4>Oddities</h4>
        </div>
      </div>

      <h3>Sourcebooks</h3>
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
      'totalEdgePoints'
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
  padding: 4px 16px;
  border-bottom: 1px solid $card-border-color;
}

.stat-counter {
  display: inline-block;
  border-radius: 50%;
  font-size: $button-fab-font-size;
  font-weight: bold;
  height: $button-fab-size;
  margin: auto;
  min-width: $button-fab-size;
  width: $button-fab-size;
  padding: 0;
  overflow: hidden;
  background: $button-primary-color;
  box-shadow: 0 1px 1.5px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);
  position: relative;
  line-height: $button-fab-size+4;
  color: $text-color-primary;
  text-align: center;
  vertical-align: middle;
}

.stat-counter.might {
  background: unquote("rgb(#{$palette-red-500})");
  color: $button-secondary-color-alt;
}

.stat-counter.speed {
  background: unquote("rgb(#{$palette-green-500})");
  color: $button-secondary-color-alt;
}

.stat-counter.intellect {
  background: unquote("rgb(#{$palette-blue-500})");
  color: $button-secondary-color-alt;
}

.pool-editor {
  padding: 16px;

  /* Firefox */
  display:-moz-box;
  -moz-box-pack:center;
  -moz-box-align:center;

  /* Safari and Chrome */
  display:-webkit-box;
  -webkit-box-pack:center;
  -webkit-box-align:center;

  display:box;
  box-pack:center;
  box-align:center
}

</style>
