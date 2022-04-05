import 'core-js/es/typed-array/uint8-array'
import 'core-js/es/typed-array/int32-array'
import { Random, MersenneTwister19937 } from 'random-js'
import { Base64 } from 'js-base64';

// create our deterministic random source
var array = new Int32Array(1);
var randomSeed = self.crypto.getRandomValues(array)[0];
var randomEngine = MersenneTwister19937.seed(randomSeed);
var randomSrc = new Random(randomEngine);

function getRandomState () {
  return new Int32Array([randomSeed, randomEngine.getUseCount()])
}

function setRandomState (state) {
  randomSeed = state[0]
  randomEngine = MersenneTwister19937.seed(randomSeed)
  randomEngine.discard(state[1])
  randomSrc = new Random(randomEngine)
}

function setRandomStateFromBase64 (encodedData) {
  var state = decodeURLSafeBase64ToInt32Array(encodedData)

  // state could not be decoded, so do nothing
  if (state.length < 1) {
    return
  }

  setRandomState(state)
}

function randNum (limit) {
  return randomSrc.integer(0, limit)
}

function random () {
  return randomSrc.realZeroToOneInclusive()
}

function randItem (arr) {
  return randomSrc.pick(arr)
}

const matcher = /\{\{([a-z]+)(\.([a-z]+))?\}\}/gi

function randomlyInterpolate (template, startKey) {
  var phrase = randItem(template[startKey])
  var replacer = function (match, key, _, subkey) {
    if (key && template.hasOwnProperty(key)) {
      var item = randItem(template[key])

      if (typeof item === 'string') {
        if (subkey) {
          return match
        }

        return item.replace(matcher, replacer)
      }

      if (subkey && item.hasOwnProperty(subkey) && item[subkey]) {
        return item[subkey].replace(matcher, replacer)
      }

      return item[key].replace(matcher, replacer)
    }
    return match
  }

  return phrase.replace(matcher, replacer)
}

function capitalise (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function cleanSentence (str) {
  return capitalise(str.replace(/.*?[.?!]/g, function (match) {
    return capitalise(match)
  })).replace(/\sa\s([aeiou])/gi, ' an $1')
}

function arrayToSentence (arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  return arr.slice(0, arr.length - 1).join(', ') + ' and ' + arr.slice(-1)
}

function shuffle (a) {
  randomSrc.shuffle(a)
  return a
}

function decodeURLSafeBase64ToUint8Array (encodedData) {
  var raw;
  try {
    raw = Base64.toUint8Array(encodedData)
  } catch (e) {
    console.error(e)
    return []
  }
  return Array.from(raw)
}

function decodeURLSafeBase64ToInt32Array (encodedData) {
  var data;
  try {
    data = Base64.toUint8Array(encodedData)
  } catch (e) {
    console.error(e)
    return []
  }
  return Array.from(new Int32Array(data.buffer, 0, data.length / 4))
}

function promiseBase64URL(data) {
  return new Promise((r) => {
    const reader = new FileReader()
    reader.onload = () => r(reader.result)
    reader.readAsDataURL(new Blob([data]))
  })
}

function makeBase64URLSafeBase64(url) {
  return url.split(",", 2)[1].replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export default {
  randItem,
  randomlyInterpolate,
  cleanSentence,
  capitalise,
  randNum,
  arrayToSentence,
  shuffle,
  decodeURLSafeBase64ToUint8Array,
  decodeURLSafeBase64ToInt32Array,
  getRandomState,
  setRandomState,
  setRandomStateFromBase64,
  promiseBase64URL,
  makeBase64URLSafeBase64,
  random
}
