<template>
  <div class="stat-editor">
    <v-btn colored icon="remove" @click.stop.prevent="remove" :disabled="!removable"/>
    <div :class="classes">{{ value }}</div>
    <v-btn colored icon="add" @click.stop.prevent="add" :disabled="!addable"/>
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
</style>
