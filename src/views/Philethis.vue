<template>
  <div id="philethis">
    <philethis-generator/>
  </div>
</template>

<script>
import PhilethisGenerator from '../components/Philethis/Generator.vue'

export default {
  components: {
    PhilethisGenerator
  }
}
</script>

<style>
#philethis {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}
</style>
