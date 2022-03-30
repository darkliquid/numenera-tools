<template>
  <div class="mdl-selectfield">
    <label :for="id" v-if="label">{{ label }}</label>
    <select :id="id" v-model="selected">
      <option :value="null" hidden disabled v-if="label">{{ label }}</option>
      <optgroup v-for="group in options" :label="group.label" v-if="grouped">
        <option v-for="opt in group.options" :value="opt.value">{{ opt.label }}</option>
      </optgroup>
      <option v-for="opt in options" :value="opt.value" v-if="!grouped">{{ opt.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: this.value
    }
  },
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      default: ''
    },
    label: {
      type: String
    },
    grouped: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  watch: {
    value (val) {
      this.selected = val
    },
    selected (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">

</style>
