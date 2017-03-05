<template>
  <div id="oddities">
    <oddity-generator/>
  </div>
</template>

<script>
import OddityGenerator from 'components/Oddities/Generator'

export default {
  components: {
    OddityGenerator
  }
}
</script>

<style>
#oddities {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}
</style>
