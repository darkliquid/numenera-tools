var descriptors = [
  {
    name: 'Charming',
    sourcebook: 'Numenera Corebook',
    page: 47,
    sources: [
      { sourcebook: 'Players Guide', page: 34 }
    ],
    stats: {
      intellect: 2
    },
    shins: 10,
    skills: {
      trained: [
        'All tasks involving involving positive or pleasant social interaction',
        'Using esoteries or abilities to influence the minds of others'
      ],
      inability: [
        'Studying or retaining facts',
        'Resisting mental attacks'
      ]
    },
    extras: [
      'Contact: you have an important contact in a influential position.'
    ]
  },
  {
    name: 'Clever',
    sourcebook: 'Numenera Corebook',
    page: 48,
    sources: [
      { sourcebook: 'Players Guide', page: 34 }
    ],
    stats: {
      intellect: 2
    },
    shins: 10,
    skills: {
      trained: [
        'All interactions involving lies or trickery',
        'Defense against mental effects'
      ],
      inability: [
        'All tasks involving, identifying or assessing danger, lies, quality, importance, function or power.',
        'Any task involving lore, knowledge or understanding'
      ]
    }
  },
  {
    name: 'Graceful',
    sourcebook: 'Numenera Corebook',
    page: 48,
    sources: [
      { sourcebook: 'Players Guide', page: 35 }
    ],
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Balance and careful movement',
        'Physical performing arts',
        'Speed defense'
      ]
    }
  },
  {
    name: 'Intelligent',
    sourcebook: 'Numenera Corebook',
    page: 48,
    sources: [
      { sourcebook: 'Players Guide', page: 35 }
    ],
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'An area of knowledge of your choice',
        'All tasks involving remembering or memorising things you experience directly (rather than learnt from a book/were told)'
      ]
    }
  },
  {
    name: 'Learned',
    sourcebook: 'Numenera Corebook',
    page: 48,
    sources: [
      { sourcebook: 'Players Guide', page: 35 }
    ],
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Three areas of knowledge of your choice'
      ],
      inability: [
        'Any task involving charm, persuasion or etiquette'
      ]
    },
    equipment: [
      'Two books on topics of your choice'
    ]
  },
  {
    name: 'Mechanical',
    sourcebook: 'Numenera Corebook',
    page: 49,
    sources: [
      { sourcebook: 'Players Guide', page: 36 }
    ],
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Identifying or understanding numenera'
      ],
      inability: [
        'Tasks involving charm, persuasion or deception'
      ]
    },
    equipment: [
      'An additional oddity determined by the GM'
    ],
    abilities: [
      'Sense "magic"',
      'Hedge Magic'
    ]
  },
  {
    name: 'Mystical',
    sourcebook: 'Numenera Corebook',
    page: 49,
    sources: [
      { sourcebook: 'Players Guide', page: 36 }
    ],
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Identifying or understanding numenera'
      ],
      inability: [
        'Tasks involving charm, persuasion or deception'
      ]
    },
    equipment: [
      'An additional oddity determined by the GM'
    ],
    abilities: [
      'Sense "magic"',
      'Hedge Magic'
    ]
  },
  {
    name: 'Rugged',
    sourcebook: 'Numenera Corebook',
    page: 49,
    sources: [
      { sourcebook: 'Players Guide', page: 36 }
    ],
    skills: {
      trained: [
        'All tasks involving swimming, climbing, jumping and running',
        'All tasks involving training, riding or placating natural animals',
        'All tasks involving identifying or using natural plants'
      ],
      inability: [
        'Any tasks involving charm, persuasion, etiquette or deception'
      ]
    },
    equipment: [
      'An explorer’s pack or the following: additional 50 feet of rope, two days rations and an extra ranged weapon'
    ]
  },
  {
    name: 'Stealthy',
    sourcebook: 'Numenera Corebook',
    page: 50,
    stats: {
      speed: 2
    },
    sources: [
      { sourcebook: 'Players Guide', page: 36 }
    ],
    skills: {
      trained: [
        'All stealthy tasks',
        'All interactions involving lies or trickery',
        'All esoteries or abilities involving illusions or trickery'
      ],
      inability: [
        'Movement-related tasks'
      ]
    }
  },
  {
    name: 'Strong',
    sourcebook: 'Numenera Corebook',
    page: 50,
    stats: {
      might: 2
    },
    sources: [
      { sourcebook: 'Players Guide', page: 37 }
    ],
    skills: {
      trained: [
        'Breaking inanimate objects',
        'Jumping'
      ],
      inability: [
        'Movement-related tasks'
      ]
    },
    equipment: [
      'An extra medium or heavy weapon'
    ]
  },
  {
    name: 'Strong-Willed',
    sourcebook: 'Numenera Corebook',
    page: 50,
    stats: {
      intellect: 4
    },
    sources: [
      { sourcebook: 'Players Guide', page: 37 }
    ],
    skills: {
      trained: [
        'Resisting mental effects',
        'Tasks requiring incredible focus or concentration'
      ],
      inability: [
        'Figuring out puzzles or problems, memorising things or using lore'
      ]
    }
  },
  {
    name: 'Swift',
    sourcebook: 'Numenera Corebook',
    page: 51,
    stats: {
      speed: 4
    },
    sources: [
      { sourcebook: 'Players Guide', page: 37 }
    ],
    skills: {
      trained: [
        'Initiative actions to determine combat order',
        'Running'
      ],
      inability: [
        'Balancing'
      ]
    }
  },
  {
    name: 'Tough',
    sourcebook: 'Numenera Corebook',
    page: 51,
    armor: 1,
    stats: {
      speed: 4
    },
    sources: [
      { sourcebook: 'Players Guide', page: 37 }
    ],
    skills: {
      trained: [
        'Might defense'
      ]
    },
    equipment: [
      'An extra light weapon'
    ],
    abilities: [
      'Healthy: +1 to recovery rolls'
    ]
  },
  {
    name: 'Mutant',
    sourcebook: 'Numenera Corebook',
    page: 123,
    special: 'Requires the Numenera Corebook to select mutations'
  },
  {
    name: 'Varjellan',
    sourcebook: 'Numenera Corebook',
    page: 121,
    stats: {
      points: -3
    },
    skills: {
      trained: [
        'Numenera',
        'Visual perception'
      ],
      inability: [
        'History',
        'Poetry and oration',
        'Hearing'
      ]
    },
    abilities: [
      'Reforging: Take an hour to rearrange stat pools as desired',
      'Slow to recover: -1 to recovery rolls'
    ]
  },
  {
    name: 'Lattimor',
    sourcebook: 'Numenera Corebook',
    page: 122,
    stats: {
      might: 4
    },
    abilities: [
      'Change state: once per hour change between Fugue, Bursk or Neem state'
    ],
    skills: {
      trained: [
        'Perception (when in Fugue state)',
        'Attacks in one weapon type (when in Bursk state)',
        'Breaking things (when in Bursk state)',
        'All interactions with others (when in Neem state)',
        'All tasks involving studying, contemplation or mental concentration, including esoteries (when in Neem state)'
      ],
      inability: [
        'Lore, knowledge or understanding tasks (when in Bursk state)',
        'Interacting with others in a pleasant manner (when in Bursk state)',
        'Concentration or study - including using esoteries (when in Bursk state)',
        'Attack and defense (when in Neem state)',
        'Perception (when in Neem state)'
      ]
    }
  }
]

var types = [
  {
    name: 'Glaive',
    sourcebook: 'Numenera Corebook',
    page: 26,
    stats: {
      might: 11,
      speed: 10,
      intellect: 7,
      points: 6
    },
    sources: [
      { sourcebook: 'Players Guide', page: 16 }
    ],
    edge: {
      might: 1,
      speed: 1
    },
    shins: 5,
    cyphers: 2,
    abilities: [
      'Bash',
      'No Need For Weapons',
      'Pierce',
      'Thrust',
      'Trained Without Armor'
    ],
    skills: {
      trained: [
        'One of: Balancing, Climbing, Jumping, Swimming'
      ],
      practiced: [
        'Armor',
        'All Weapons'
      ]
    },
    equipment: [
      'Clothing',
      'Two weapons (or one weapon and a shield)',
      'Light or medium armor',
      'An explorer’s pack',
      'Two cyphers (chosen for you by the GM)',
      'One oddity (chosen for you by the GM)'
    ]
  },
  {
    name: 'Nano',
    sourcebook: 'Numenera Corebook',
    page: 32
  },
  {
    name: 'Jack',
    sourcebook: 'Numenera Corebook',
    page: 40
  }
]

var foci = [
  {
    name: 'Bears a Halo of Fire',
    sourcebook: 'Numenera Corebook',
    page: 52,
    equipment: [
      'An artifact that sprays inanimate objects to make them fire-resistant'
    ],
    abilities: [
      'Fire esoteries: you esoteries have a firey quality to them',
      'Shroud of Flame'
    ]
  },
  {
    name: 'Carries a Quiver',
    sourcebook: 'Numenera Corebook',
    page: 54
  },
  {
    name: 'Commands Mental Powers',
    sourcebook: 'Numenera Corebook',
    page: 54
  },
  {
    name: 'Controls Beasts',
    sourcebook: 'Numenera Corebook',
    page: 55
  },
  {
    name: 'Controls Gravity',
    sourcebook: 'Numenera Corebook',
    page: 56
  },
  {
    name: 'Crafts Illusions',
    sourcebook: 'Numenera Corebook',
    page: 57
  },
  {
    name: 'Crafts Unique Objects',
    sourcebook: 'Numenera Corebook',
    page: 58
  },
  {
    name: 'Employs Magnetism',
    sourcebook: 'Numenera Corebook',
    page: 59
  },
  {
    name: 'Entertains',
    sourcebook: 'Numenera Corebook',
    page: 60
  },
  {
    name: 'Exists Partially Out of Phase',
    sourcebook: 'Numenera Corebook',
    page: 60
  },
  {
    name: 'Explores Dark Places',
    sourcebook: 'Numenera Corebook',
    page: 61
  },
  {
    name: 'Fights with Panache',
    sourcebook: 'Numenera Corebook',
    page: 62
  },
  {
    name: 'Focuses Mind over Matter',
    sourcebook: 'Numenera Corebook',
    page: 63
  },
  {
    name: 'Fuses Flesh and Steel',
    sourcebook: 'Numenera Corebook',
    page: 64
  },
  {
    name: 'Howls at the Moon',
    sourcebook: 'Numenera Corebook',
    page: 64
  },
  {
    name: 'Hunts with Great Skill',
    sourcebook: 'Numenera Corebook',
    page: 65
  },
  {
    name: 'Leads',
    sourcebook: 'Numenera Corebook',
    page: 66
  },
  {
    name: 'Lives in the Wilderness',
    sourcebook: 'Numenera Corebook',
    page: 67
  },
  {
    name: 'Masters Defense',
    sourcebook: 'Numenera Corebook',
    page: 68
  },
  {
    name: 'Masters Weaponry',
    sourcebook: 'Numenera Corebook',
    page: 69
  },
  {
    name: 'Murders',
    sourcebook: 'Numenera Corebook',
    page: 70
  },
  {
    name: 'Rages',
    sourcebook: 'Numenera Corebook',
    page: 71
  },
  {
    name: 'Rides the Lightning',
    sourcebook: 'Numenera Corebook',
    page: 71
  },
  {
    name: 'Talks to Machines',
    sourcebook: 'Numenera Corebook',
    page: 72
  },
  {
    name: 'Wears a Sheen of Ice',
    sourcebook: 'Numenera Corebook',
    page: 73
  },
  {
    name: 'Wields Power with Precision',
    sourcebook: 'Numenera Corebook',
    page: 74
  },
  {
    name: 'Wields Two Weapons at Once',
    sourcebook: 'Numenera Corebook',
    page: 75
  },
  {
    name: 'Works Miracles',
    sourcebook: 'Numenera Corebook',
    page: 75
  },
  {
    name: 'Works the Back Alleys',
    sourcebook: 'Numenera Corebook',
    page: 76
  }
]

export {
  descriptors,
  foci,
  types
}
