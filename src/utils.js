function randNum (limit) {
  return Math.floor(Math.random() * limit)
}

function randItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const matcher = /\{\{([a-z_]+)\}\}/g

function randomlyInterpolate (template, startKey) {
  var phrase = randItem(template[startKey])
  var replacer = function (match, key) {
    if (key && template.hasOwnProperty(key)) {
      return randItem(template[key]).replace(matcher, replacer)
    }
    return 'ERROR'
  }

  return phrase.replace(matcher, replacer)
}

function capitalise (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function cleanSentence (str) {
  return capitalise(str.replace(/\sa\s([aeiou])/gi, ' an $1'))
}

function arrayToSentence (arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  return arr.slice(0, arr.length - 1).join(', ') + ' and ' + arr.slice(-1)
}

export default {
  randItem,
  randomlyInterpolate,
  cleanSentence,
  capitalise,
  randNum,
  arrayToSentence
}
