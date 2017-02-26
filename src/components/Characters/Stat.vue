<template>
  <div class="stat-editor">
    <mdl-button colored icon="remove" @click.native.stop.prevent="remove" :disabled="!removable"/>
    <div :class="classes">{{ value }}</div>
    <mdl-button colored icon="add" @click.native.stop.prevent="add" :disabled="!addable"/>
  </div>
</template>

<script>
var pools = ['might', 'speed', 'intellect']

export default {
  computed: {
    addable () {
      return this.value < this.max && this.points > 0
    },
    removable () {
      return this.value > this.min
    }
  },
  data () {
    return {
      classes: ['stat-counter', this.pool].join(' '),
      max: this.min + this.points,
      value: this.min
    }
  },
  props: {
    min: {
      type: Number,
      required: true
    },
    points: {
      type: Number,
      required: true
    },
    pool: {
      type: String,
      required: true,
      validator (val) {
        return pools.includes(val)
      }
    }
  },
  methods: {
    add () {
      if (this.addable) {
        this.$emit('add', this.pool)
        this.value++
      }
    },
    remove () {
      if (this.removable) {
        this.$emit('remove', this.pool)
        this.value--
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../../node_modules/material-design-lite/src/variables";
@import "../../../node_modules/material-design-lite/src/color-definitions";

.stat-counter {
  display: inline-block;
  border-radius: 50%;
  font-size: $button-fab-font-size;
  font-weight: bold;
  height: $button-fab-size;
  margin: auto;
  min-width: $button-fab-size;
  width: $button-fab-size;
  padding: 0;
  overflow: hidden;
  background: $button-primary-color;
  box-shadow: 0 1px 1.5px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);
  position: relative;
  line-height: $button-fab-size+4;
  color: $text-color-primary;
  text-align: center;
  vertical-align: middle;
}

.stat-counter.might {
  background: unquote("rgb(#{$palette-red-500})");
  color: $button-secondary-color-alt;
}

.stat-counter.speed {
  background: unquote("rgb(#{$palette-green-500})");
  color: $button-secondary-color-alt;
}

.stat-counter.intellect {
  background: unquote("rgb(#{$palette-blue-500})");
  color: $button-secondary-color-alt;
}

.stat-editor {
  padding: 16px;

  /* Firefox */
  display:-moz-box;
  -moz-box-pack:center;
  -moz-box-align:center;

  /* Safari and Chrome */
  display:-webkit-box;
  -webkit-box-pack:center;
  -webkit-box-align:center;

  display:box;
  box-pack:center;
  box-align:center
}
</style>
