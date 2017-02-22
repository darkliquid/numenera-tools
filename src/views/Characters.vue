<template>
  <div id="characters">
    <div class="mdl-card">
      <header class="mdl-card__title">
        <h2 class="mdl-card__title-text">Numenera Character Generator</h2>
      </header>
      <div class="mdl-card__supporting-text">
        Choose your Descriptor, Type and Focus
      </div>
      <form>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <span class="sentence-fragment">I am a</span>
            <div class="mdl-selectfield">
              <label for="descriptor">Descriptor</label>
              <select id="descriptor" v-model="selectedDescriptor">
                <option value="" hidden disabled>Descriptor</option>
                <optgroup v-for="group in groupedDescriptors" :label="group.label">
                  <option v-for="opt in group.options">{{ opt }}</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-selectfield">
              <label for="type">Type</label>
              <select id="type" v-model="selectedType">
                <option value="" hidden disabled>Type</option>
                <optgroup v-for="group in groupedTypes" :label="group.label">
                  <option v-for="opt in group.options">{{ opt }}</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            <span class="sentence-fragment">who</span>
            <div class="mdl-selectfield">
              <label for="focus">Focus</label>
              <select id="focus" v-model="selectedFocus">
                <option value="" hidden disabled>Focus</option>
                <optgroup v-for="group in groupedFoci" :label="group.label">
                  <option v-for="opt in group.options">{{ opt }}</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </form>
    </mdl-card>
  </div>
</template>

<script>
import descriptors from 'data/chargen/descriptors'
import foci from 'data/chargen/foci'
import types from 'data/chargen/types'

function groupedOptions (arr) {
  var grouping = {}
  arr.forEach(function (item) {
    if (!grouping[item.sourcebook]) {
      grouping[item.sourcebook] = [item.name]
    } else {
      grouping[item.sourcebook].push(item.name)
    }
  })

  var options = []
  Object.keys(grouping).sort().forEach(function (item) {
    options.push({ label: item, options: grouping[item].sort() })
  })
  return function () {
    return options
  }
}

export default {
  data () {
    return {
      descriptors,
      foci,
      types,
      selectedFocus: '',
      selectedType: '',
      selectedDescriptor: ''
    }
  },
  computed: {
    groupedFoci: groupedOptions(foci),
    groupedDescriptors: groupedOptions(descriptors),
    groupedTypes: groupedOptions(types)
  }
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
  min-width: 50%;
  overflow: initial;
}

.mdl-card__media img {
  max-width: 100%;
}

.label {
  padding: 20px 0;
  text-align: center;
}

.is-small-screen .label {
  display: block;
}

.sentence-fragment {
  text-align: center;
  display: block;
  font-weight: bold;
}
</style>
