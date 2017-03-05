<template>
  <div id="rust-cyphers">
    <rust-cypher-generator/>
  </div>
</template>

<script>
import RustCypherGenerator from 'components/RustCyphers/Generator'

export default {
  components: {
    RustCypherGenerator
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
