<template>
  <div class="mdl-selectfield">
    <label :for="id" v-if="label">{{ label }}</label>
    <select :id="id" v-model="value">
      <option value="" hidden disabled v-if="label">{{ label }}</option>
      <optgroup v-for="group in options" :label="group.label" v-if="grouped">
        <option v-for="opt in group.options" :value="opt.value">{{ opt.label }}</option>
      </optgroup>
      <option v-for="opt in options" :value="opt.value" v-if="!grouped">{{ opt.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      default: null
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
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">
@import "../../node_modules/material-design-lite/src/color-definitions";
$select-background-color: transparent;
$select-border-color: unquote("rgba(#{$color-black}, 0.12)") !default;
$select-font-size: 16px;
$select-color: unquote("rgba(#{$color-black}, 0.26)") !default;
$select-padding: 4px;

.mdl-selectfield select {
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: $select-padding 0;
  font-size: $select-font-size;
  color: $select-color;
  border: none;
  border-bottom: 1px solid $select-border-color;
}

.mdl-selectfield select:focus {
  outline: none;
}

.mdl-selectfield label {display: none;}
.mdl-selectfield select {appearance: none}
.mdl-selectfield {
  font-family: 'Roboto','Helvetica','Arial',sans-serif;
  position: relative;
    &:after {
        position: absolute;
        top: 0.75em;
        right: 0.5em;
        /* Styling the down arrow */
        width: 0;
        height: 0;
        padding: 0;
        content: '';
        border-left: .25em solid transparent;
        border-right: .25em solid transparent;
        border-top: .375em solid $select-border-color;
        pointer-events: none;
    }
}
</style>
