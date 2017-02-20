<template>
  <div id="characters">
    <div class="mdl-card">
      <header class="mdl-card__title">
        <h2 class="mdl-card__title-text">Numenera Character Generator</h2>
      </header>
      <div class="mdl-card__supporting-text">
        Choose your Descriptor, Type and Focus
      </div>
    </mdl-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#characters {
  display: flex;
  align-items: center;
  justify-content:center;
  height: 100%;
  margin-top: 5em;
}

.mdl-card {
  flex: none;
  max-width: 480px;
}

.mdl-card__media img {
  max-width: 100%;
}
</style>
