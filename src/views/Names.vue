<template>
  <div id="names">
    <name-generator/>
  </div>
</template>

<script>
import NameGenerator from 'components/Names/Generator'

export default {
  components: {
    NameGenerator
  }
}
</script>

<style>
#names {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}
</style>
