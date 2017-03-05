<template>
  <div id="rumours">
    <rumour-generator/>
  </div>
</template>

<script>
import RumourGenerator from 'components/Rumours/Generator'

export default {
  components: {
    RumourGenerator
  }
}
</script>

<style>
#rumours {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}
</style>
