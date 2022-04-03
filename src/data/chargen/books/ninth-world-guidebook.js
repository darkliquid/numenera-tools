var descriptors = [
  {
    name: 'Coraoan',
    sourcebook: 'Ninth World Guidebook',
    page: 215,
    stats: {
      speed: 3
    },
    shins: 10,
    skills: {
      trained: [
        'All tasks related to the history of Corao and the surrounding regions',
        'All tasks having to do with the numenera'
      ]
    }
  },
  {
    name: 'Desert-Dwelling',
    sourcebook: 'Ninth World Guidebook',
    page: 215,
    stats: {
      might: 4
    },
    shins: 10,
    skills: {
      trained: [
        'Any task involving resisting damage from heat',
        'All tasks having to do with finding food or water'
      ],
      inability: [
        'Any task involving resisting damage from cold, and you have +2 to Armor that applies only to damage from heat',
        'Any task involving swimming or handling watercraft'
      ]
    },
    extras: [
      'Long-suffering: You can go twice as long without food and water as another human.'
    ]
  },
  {
    name: 'Devout',
    sourcebook: 'Ninth World Guidebook',
    page: 216,
    stats: {
      intellect: 3
    },
    shins: 10,
    extras: [
      'Steadfast: When the difficulty of an action is altered negatively, you can negate one step of the modification. Useable once, until a ten-hour recovery roll is made.'
    ]
  },
  {
    name: 'Echryni',
    sourcebook: 'Ninth World Guidebook',
    page: 216,
    shins: 10,
    skills: {
      trained: [
        'All tasks involving positive social interactions'
      ],
      inability: [
        'You must switch between water and air breathing for a few minutes once every 28 hours, otherwise you gain an inability in movement-related tasks.'
      ]
    },
    extras: [
      'Gregarious: Trained in all tasks involving positive social interactions.',
      'Waterwielder: Mundane items can be crafted from water. Items must be no larger than what can be carried on your person, are not numenera/special equipment, and last up to 28 hours or until released for a round .'
    ]
  },
  {
    name: 'Elychnious',
    sourcebook: 'Ninth World Guidebook',
    page: 217,
    stats: {
      intellect: 4
    },
    shins: 10,
    skills: {
      trained: [
        'Tasks involving botany, zoology, or biology',
        'Climbing'
      ],
      inability: [
        'Understanding or using any numenera requiring a nonliving power source'
      ]
    }
  },
  {
    name: 'Frostborn',
    sourcebook: 'Ninth World Guidebook',
    page: 217,
    stats: {
      might: 2
    },
    shins: 10,
    skills: {
      trained: [
        'Any task involving moving (walking, running, jumping, or climbing) in conditions that would otherwise be more difficult due to ice or snow',
        'Any task involving resisting damage from cold, and you have +2 to Armor that applies only to damage from cold',
        'Handling euriegs and driving a eurieg-pulled sledge'
      ],
      inability: [
        'Any task involving resisting damage from heat'
      ]
    }
  },
  {
    name: 'Gaian',
    sourcebook: 'Ninth World Guidebook',
    page: 218,
    stats: {
      intellect: 2,
      speed: 2
    },
    shins: 10,
    skills: {
      trained: [
        'Any task having to do with interacting with, caring for, or training animals'
      ]
    }
  },
  {
    name: 'Proxima',
    sourcebook: 'Ninth World Guidebook',
    page: 219,
    stats: {
      might: 4
    },
    shins: 10,
    skills: {
      trained: [
        'Tasks related to intimidating humans'
      ],
      inability: [
        'Positive social interactions with humans'
      ]
    },
    extras: [
      'Quick Recovery: Your ten-minute recovery only takes one action'
    ]
  },
  {
    name: 'Rayskelan',
    sourcebook: 'Ninth World Guidebook',
    page: 219,
    stats: {
      speed: 4
    },
    shins: 10,
    extras: [
      'Pliant: At the beginning of each day, choose to be trained either in running & jumping, or in swimming & sailing'
    ],
    equipment: [
      'You carry a unique token that you found on the shore of your home island long ago, as well as a dozen airels.'
    ]
  },
  {
    name: 'Vralkan',
    sourcebook: 'Ninth World Guidebook',
    page: 219,
    stats: {
      might: 4
    },
    shins: 10,
    skills: {
      trained: [
        'Any task involving finding food or water'
      ],
      inability: [
        'All pleasant social interactions'
      ]
    },
    extras: [
      'Bloodthirsty: If you are fighting a wounded foe, you deal 1 additional point of damage'
    ]
  }
]

var foci = [
  {
    name: 'Lives on the Road',
    sourcebook: 'Ninth World Guidebook',
    page: 220,
    stats: {
      might: 4
    },
    equipment: [
      'An explorer’s Pack, or an extra change of clothes, 2 days rations, and 2 minor glowglobes'
    ],
    abilities: {
      fixed: [
        'Multilingual',
        'Connection'
      ]
    },
    sources: [
      { sourcebook: 'Numenera Character Options 2', page: 66 }
    ]
  }
]

export {
  descriptors,
  foci
}
