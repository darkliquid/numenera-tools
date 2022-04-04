<template>
  <div id="rust-cyphers">
    <rust-cypher-generator/>
  </div>
</template>

<script>
import utils from '../utils'
import RustCypherGenerator from '../components/RustCyphers/Generator.vue'

export default {
  components: {
    RustCypherGenerator
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
#rust-cyphers {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}
</style>
