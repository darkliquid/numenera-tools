<template>
  <viewport :title="title">
    <router-view></router-view>
  </viewport>
</template>

<script>
import Viewport from 'components/Viewport'

export default {
  components: {
    Viewport
  },
  data () {
    return {
      title: 'Numenera Tools'
    }
  },
  name: 'app'
}
</script>

<style lang="scss">
$trim-color-classes: true;

html, body {
  height: 100%;
}
</style>
