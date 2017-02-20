<template>
  <mdl-layout class="viewport" :transparent-header="true">
    <mdl-layout-header-row slot="header" :title="title">
      <mdl-layout-spacer />
      <mdl-nav v-if="topnav.length > 0">
        <mdl-nav-link v-for="link in topnav" :href="link.href">{{ link.text}}</mdl-nav-link>
      </mdl-nav>
    </mdl-layout-header-row>
    <mdl-layout-drawer :title="title" v-if="sidenav.length > 0">
      <mdl-nav>
        <mdl-nav-link v-for="link in sidenav" :href="link.href">{{ link.text}}</mdl-nav-link>
      </mdl-nav>
    </mdl-layout-drawer>
    <mdl-layout-content>
      <slot></slot>
    </mdl-layout-content>
  </mdl-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    topnav: {
      type: Array,
      default () {
        return []
      }
    },
    sidenav: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.viewport {
  background: url('../assets/images/MCG-Numenera-Obelisk-of-the-Water-God.jpg') center / cover;
}
</style>
