<template>
  <div id="homepage">
    <div class="v-card">
      <header class="v-card__title">
        <h2 class="v-card__title-text">Numenera Playground</h2>
      </header>
      <div class="v-card__media">

      </div>
      <div class="v-card__supporting-text">
        Welcome to my Numenera playground, full of tools and generators to help
        you run your Numenera game.
      </div>
      <div class="v-card__actions v-card--border">
        <v-btn colored @click.native="$store.commit('toggleDrawer')">Get Started</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#homepage {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}

.v-card {
  flex: none;
  min-width: 50%;
}

.v-card__media  {
  width: 100%;
  padding-bottom: 40%;
  background: url('../assets/images/MCG-Numenera-Raster.jpg') center / cover;
}
</style>
