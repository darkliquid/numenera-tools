<template>
  <div class="mdl-selectfield">
    <label :for="id" v-if="label">
      {{ label }}
    </label>
    <select :id="id" v-model="selected">
      <option :value="null" hidden disabled v-if="label">{{ label }}</option>
      <template v-if="grouped">
        <optgroup v-for="group in options" :key="group.label" :label="group.label">
          <option v-for="opt in group.options" :key="opt.label" :value="opt.value" :selected="isSelected(opt.value)">{{ opt.label }}</option>
        </optgroup>
      </template>
      <template v-else>
        <option v-for="opt in options" :key="opt.label" :value="opt.value" :selected="isSelected(opt.value)">{{ opt.label }}</option>
      </template>
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
  methods: {
    isSelected (value) {
      return this.selected === value
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

<style scoped lang="scss">
$select-background-color: transparent;
$select-font-size: 16px;
$select-padding: 4px;

.mdl-selectfield select {
  font-family: inherit;
  background: rgb(var(--v-theme-surface));
  width: 100%;
  padding: $select-padding 0;
  font-size: $select-font-size;
  color: rgb(var(--v-theme-on-surface));
  border: none;
  border-bottom: 1px solid  rgba(var(--v-border-color), var(--v-border-opacity));
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
        border-top: .375em solid  rgba(var(--v-border-color), var(--v-border-opacity));
        pointer-events: none;
    }
}
.mdl-selectfield select option {
  background: rgb(var(--v-theme-surface));
}
</style>
