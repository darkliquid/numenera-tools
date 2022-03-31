<template>
  <v-card>
    <v-card-header-text>
      <v-card-title>Numenera playground</v-card-title>
    </v-card-header-text>
    <v-card-text>
      Welcome to my Numenera playground, full of tools and generators to help
      you run your Numenera game.
    </v-card-text>
    <v-card-actions>
      <v-btn colored @click="$store.commit('toggleDrawer')">Get Started</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
