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
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Speed</h4>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Intellect</h4>
        </div>
      </div>

      <h3>Edge</h3>
      <div class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Might</h4>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Speed</h4>
        </div>
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Intellect</h4>
        </div>
      </div>

      <h3>Skills</h3>
      <div class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--4-col">
          <h4>Practiced</h4>
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
export default {
  methods: {
    prevCharacterStep () {
      this.$store.commit('chargen/updateStep', 1)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../node_modules/material-design-lite/src/variables";

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
</style>
