<template>
  <div class="stat-editor">
    <v-btn size="x-small" :color="removable ? 'primary' : ''" icon="mdi-minus" @click.stop.prevent="remove" :disabled="!removable"/>
    <div :class="classes">{{ value }}</div>
    <v-btn size="x-small" :color="addable ? 'primary' : ''" icon="mdi-plus" @click.stop.prevent="add" :disabled="!addable"/>
  </div>
</template>

<script>
var pools = ['might', 'speed', 'intellect']

export default {
  computed: {
    addable () {
      return this.points > 0
    },
    removable () {
      return this.value > this.min
    }
  },
  data () {
    return {
      classes: ['stat-counter', this.pool].join(' '),
      max: this.min + this.points
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
    },
    value: {
      type: Number
    }
  },
  methods: {
    add () {
      if (this.addable) {
        this.$emit('add', this.pool)
      }
    },
    remove () {
      if (this.removable) {
        this.$emit('remove', this.pool)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.stat-editor .v-btn {
  display: inline-block;
}
.stat-counter {
  display: inline-block;
  margin: 0 5px;
  line-height: 32px;
}
</style>
