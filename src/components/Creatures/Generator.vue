<template>
  <div class="mdl-card">
    <header class="mdl-card__title">
      <h2 class="mdl-card__title-text">Numenera Creature Generator</h2>
    </header>
    <div class="mdl-card__supporting-text">
      <mdl-progress :indeterminate="true" v-if="loading"></mdl-progress>
      <template v-if="!loading">
        <p class="image">
          <a :href="imgLink"><img :src="imgSrc"></a>
        </p>
        <p class="attribution">
          <a :href="imgLink">{{ name }}</a>
          by
          <a :href="authorLink">{{ author }}</a>
        </p>
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
      </template>
    </div>
    <div class="mdl-card__actions">
      <mdl-button colored @click.native="generate">Random</mdl-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'
import powers from '../../data/creatures/powers'
import utils from '../../utils'

const tags = [
  'creature',
  'monster',
  'alien',
  'animal'
]

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
    loadVisualArtsImage () {
      this.loading = true
      var tag = utils.randItem(tags)
      return axios.get(`//crossorigin.me/http://www.visualart.me/search/index?type=tags&q=${tag}`)
      .then((response) => {
        var $ = cheerio.load(response.data)
        var lastPageLink = $('#pagination .pages li:not([class])').last().find('a').prop('href')
        var pageCount = 1

        if (lastPageLink && lastPageLink.length > 0) {
          pageCount = lastPageLink.match(/page=(\d+)/)[1]
        }

        var page = utils.randNum(pageCount) + 1

        return axios.get(`//crossorigin.me/http://www.visualart.me/search/index?type=tags&q=${tag}&page=${page}`)
        .then((response) => {
          var $ = cheerio.load(response.data)
          var creatures = $('#main .browse .photo .thumb')
          var creature = creatures.eq(utils.randNum(creatures.length))
          this.imgSrc = creature.find('img').eq(0).prop('src')
          var title = creature.find('.info .left a').first()
          this.name = title.text().trim()
          this.imgLink = title.prop('href')
          var author = creature.find('.info .left a').last()
          this.author = author.text().trim()
          this.authorLink = author.prop('href')
        })
      })
    },
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
      this.loadVisualArtsImage().then(() => {
        this.loading = false
      })
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
