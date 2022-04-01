# numenera-tools

> A set of tools and generators for the Numenera roleplaying game

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# run all tests
yarn test
```

## Data Files

There are a number of data files that are used to generate all the information the generators use. These are all simple javascript but there are a few different structures dependant on the generator the data is for. There a 2 main formats, plus a third one which is generated using the gen-names task mentioned above which wont be covered here. For more information on that, see the documentation for [ngram-word-generator][1].

### Character Generator Data

All character generator data is compiled directly into the app from the [src/data/chargen][2] directory. Each sourcebook has its own file, and each one exports various things (descriptors, foci, types) which are then grouped together separately (and/or manipulated as necessary). Each book should be a standard ES6 module that exports one or more of the following symbols, like in this example:

```javascript
var descriptors = []
var foci = []
var type = []
export {
  descriptors,
  foci,
  types
}
```

In the above example, this book is empty, but ready to be filled with information. As you'll notice, each symbol exports an array - these arrays should contain objects of the correct type. All of the types work the same way with the exception of Types, which have an extra field for allowing extensions (such as the extra options from the Character Options sourcebooks.

#### Descriptors, Types and Foci

Here is an example object that includes every field. It could work as any type.

```javascript
{
  name: "Example",
  sourcebook: "Primary/original sourcebook title",
  page: 1, // the page on which it is found in the primary/original sourcebook 
  sources: [
    { sourcebook: "A secondary sourcebook you can find this in", page: 2 }
  ],
  stats: {
    might: 3,
    speed: 4,
    intellect: 5,
    points: 6 // this is the number of points you can spend to increase your stats
  },
  edges: {
    might: 1,
    speed: 1,
    intellect: 0,
    points: 0 // this is the number of points you can spend to increase your edges
  },
  shins: 10,
  armor: 0, // any starting built-in armour bonuses
  cypherlimit: 2,
  skills: {
    trained: [
      'A skill you are trained in'
    ],
    inability: [
      'A skill you have an inability at'
    ],
    practiced: [
      'Practiced in something (like using armour)'
    ]
  },
  equipment: [
    'A piece of equipment'
  ],
  cyphers: [
    'A description of a cypher, or a number of cyphers you should get'
  ],
  oddities: [
    'A description of an oddity, or a number of oddities you should get'
  ],
  artifacts: [
    'A description of an artifact, or a number of atifacts you should get'
  ],
  extras: [
    'Any extra things you might have not covered by other things, like a Contact, or a note you need to look up specifics from the sourcebook'
  ],
  abilities: [
    'Special abilities you start with (when specified in a focus or descriptor)',
    'Otherwise a list of multiple abilities from which you pick 2 when listed in a type.'
  ]
}
```

For sourcebooks that extend an existing type (like the Character Options books) there is a special extra field that can be used called `extensions`. It works like this:

```javascript
{
  name: "Name of existing type",
  sourcebook: "Original sourcebook of type",
  extensions: [
    {
      sourcebook: "Character Options",
      page: 1,
      abilities: [
        'A new ability to add to the type'
      ]
    }
  ]
}
```

As you can see, a single sourcebook may have multiple extensions. Extensions basically group abilities by page number to make it easier to merge into the existing data. This can result in duplicating the sourcebook name a lot, but also allows for the flexibility for grouping together multiple 'Character Options' books if desired.

### Phrase-based Generator Data

Phrase-based generators like the rumour generator and the oddity generator use random, nested interpolation to generate their output. Writing the data for these generators is easy, but some care needs to be taken in writing the generator itself so that the interpolation placeholder names work correctly. 

Each data file is a simple exported list of strings (or if you want, several lists exported however you like). Strings can have placeholder values noted by `{{placeholder}}`. A random string will be selected from the list and then each placeholder will be replaced by a random entry from the list named by the placeholder. If _that_ string has placeholders, those will be replaced too, ad-infinitum until there are no more placeholders. For this reason it is a good idea not to use placeholders that refer to the same list they come from (or to other lists that refer to the one they come from), otherwise you can end up with endless recursion.

#### Example data

```javascript
export default [
  'This {{example}} phrase generates stuff by {{interpolating}} the {{placeholders}}'
]
```
In this example, this data might be in a list called `phrase`. You would have 3 other lists, each `example`, `interpolating` and `placeholders`, and the values in the phrase would be replaced by random values from those lists.


[1]:https://www.npmjs.com/package/ngram-word-generator
[2]:https://github.com/darkliquid/numenera-tools/tree/master/src/data/chargen
