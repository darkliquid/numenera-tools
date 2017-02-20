<template>
  <router-link :to="to" class="mdl-navigation__link">
    <i class="material-icons" v-if="icon">{{ icon }}</i>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>
