<template>
  <v-card>
    <v-card-header>
      <v-card-header-text>Creature Generator</v-card-header-text>
    </v-card-header>
    <v-card-text>
      <p class="powers">{{ powers }}</p>
      <table>
        <tbody>
          <tr>
            <th>Level</th>
            <td>{{ level }}</td>
          </tr>
          <tr>
            <th>Armour</th>
            <td>{{ armour }}</td>
          </tr>
          <tr>
            <th>Health</th>
            <td>{{ health }}</td>
          </tr>
          <tr>
            <th>Primary Attack</th>
            <td>{{ primaryAttack }}</td>
          </tr>
          <tr>
            <th>Power Attack</th>
            <td>{{ powerAttack }}</td>
          </tr>
          <tr>
            <th>Maneuvering Attack</th>
            <td>{{ maneuveringAttack }}</td>
          </tr>
        </tbody>
      </table>
    </v-card-text>
    <v-card-actions>
      <v-btn colored @click="generate">Random</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import powers from '../../data/creatures/powers'
import utils from '../../utils'

export default {
  data () {
    return {
      name: '',
      imgLink: '',
      imgSrc: '',
      author: '',
      authorLink: '',
      powers: '',
      level: 0,
      armour: 0,
      health: 0,
      primaryAttack: 0,
      powerAttack: 0,
      maneuveringAttack: 0,
      loading: true
    }
  },
  mounted () {
    this.generate()
  },
  methods: {
    generateStats () {
      this.level = utils.randNum(6) + 1 + utils.randNum(3) + 1
      this.armour = this.level - 2
      this.health = this.level * 4
      this.primaryAttack = this.level + 1
      this.powerAttack = this.level + 3
      this.maneuveringAttack = this.level - 1
    },
    generatePowers () {
      this.powers = utils.cleanSentence(
        utils.arrayToSentence(
          utils.shuffle(powers).slice(0, utils.randNum(3) + 1)
        )
      )
    },
    generate () {
      this.generateStats()
      this.generatePowers()
    }
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}

.image, .attribution, .powers {
  text-align: center;
}

th {
  text-align: left;
  padding-right: 2em;
}

td {
  text-align: center;
}
</style>
