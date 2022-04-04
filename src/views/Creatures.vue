<template>
  <div id="creatures">
    <creature-generator/>
  </div>
</template>

<script>
import utils from '../utils'
import CreatureGenerator from '../components/Creatures/Generator.vue'

export default {
  components: {
    CreatureGenerator
  },
  beforeRouteEnter(to, from) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    if (to.params.data) {
      utils.setRandomStateFromBase64(to.params.data)
    }
  }
}
</script>

<style>
#creatures {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}
</style>
