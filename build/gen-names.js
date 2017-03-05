// Generate markov model
var generateModel = require('ngram-word-generator/model-generation')
var fs = require('fs')
var path = require('path')
var ora = require('ora')

var dir = path.join(__dirname, '..', 'src','data','names')

var spinner = ora('generating markov model for names...')
spinner.start()

var file = fs.readFileSync(path.join(dir, 'names.txt'), 'utf8')
var ngramModel = generateModel(file, {
    name: 'Names',
    filter: 'noSymbols',
    n: 3,
    minLength: 4,
    unique: true,
    excludeOriginal: true,
    compress: true
})
fs.writeFileSync(path.join(dir, 'names.json'), JSON.stringify(ngramModel))
spinner.stop()
