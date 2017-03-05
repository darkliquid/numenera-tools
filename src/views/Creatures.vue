<template>
  <div id="creatures">
    <creature-generator/>
  </div>
</template>

<script>
import CreatureGenerator from 'components/Creatures/Generator'

export default {
  components: {
    CreatureGenerator
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
