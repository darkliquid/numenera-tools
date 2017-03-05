function randNum (limit) {
  return Math.floor(Math.random() * limit)
}

function randItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
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
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i)
    let x = a[i - 1]
    a[i - 1] = a[j]
    a[j] = x
  }

  return a
}

export default {
  randItem,
  randomlyInterpolate,
  cleanSentence,
  capitalise,
  randNum,
  arrayToSentence,
  shuffle
}
