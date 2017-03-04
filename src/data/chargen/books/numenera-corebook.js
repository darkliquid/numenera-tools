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
        'Positive or pleasant social interactions',
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
        'Swimming',
        'Climbing',
        'Jumping',
        'Running',
        'Training, riding or placating natural animals',
        'Identifying or using natural plants'
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
    extras: 'Requires the Numenera Corebook to select mutations'
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
      'Reforging',
      'Slow to recover'
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
      'Change state'
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
    edges: {
      might: 1,
      speed: 1
    },
    shins: 5,
    cypherlimit: 2,
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
        'Using All Armor',
        'All Weapons'
      ]
    },
    equipment: [
      'Clothing',
      'Two weapons (or one weapon and a shield)',
      'Light or medium armor',
      'An explorer’s pack'
    ],
    cyphers: [
      'Two cyphers (chosen for you by the GM)'
    ],
    oddities: [
      'One oddity (chosen for you by the GM)'
    ]
  },
  {
    name: 'Nano',
    sourcebook: 'Numenera Corebook',
    page: 32,
    stats: {
      might: 7,
      speed: 9,
      intellect: 12,
      points: 6
    },
    sources: [
      { sourcebook: 'Players Guide', page: 21 }
    ],
    edges: {
      intellect: 1
    },
    shins: 4,
    cypherlimit: 3,
    abilities: [
      'Hedge Magic',
      'Onslaught',
      'Push',
      'Scan',
      'Ward'
    ],
    skills: {
      trained: [
        'Understanding and identifying numenera'
      ],
      practiced: [
        'Light Weapons'
      ]
    },
    equipment: [
      'Clothing',
      'One weapon',
      'A book about the numenera'
    ],
    cyphers: [
      'Three cyphers (chosen for you by the GM)'
    ],
    oddities: [
      'One oddity (chosen for you by the GM)'
    ]
  },
  {
    name: 'Jack',
    sourcebook: 'Numenera Corebook',
    page: 40,
    stats: {
      might: 10,
      speed: 10,
      intellect: 10,
      points: 6
    },
    sources: [
      { sourcebook: 'Players Guide', page: 28 }
    ],
    edges: {
      points: 1
    },
    shins: 8,
    cypherlimit: 2,
    abilities: [
      'Flex Skill',
      'Bash',
      'Hedge Magic',
      'Pierce',
      'Practiced in Armour',
      'Skill With Defense',
      'Thrust',
      'Trained Without Armour'
    ],
    skills: {
      trained: [
        'Any one non-attack/defense task of your choosing'
      ],
      practiced: [
        'Light and Medium Weapons'
      ]
    },
    equipment: [
      'Clothing',
      'Two weapons',
      'Light Armor',
      'An explorers pack',
      'A pack of light tools'
    ],
    cyphers: [
      'Two cyphers (chosen for you by the GM)'
    ],
    oddities: [
      'One oddity (chosen for you by the GM)'
    ]
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
      'Fire esoteries',
      'Shroud of Flame'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 38 }
    ]
  },
  {
    name: 'Carries a Quiver',
    sourcebook: 'Numenera Corebook',
    page: 54,
    equipment: [
      'A well-made bow',
      'Two-dozen arrows'
    ],
    abilities: [
      'Archer'
    ],
    skills: {
      trained: [
        'Making arrows'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 40 }
    ]
  },
  {
    name: 'Commands Mental Powers',
    sourcebook: 'Numenera Corebook',
    page: 54,
    equipment: [
      'Psionic Crystal/Jewel artifact. +1 Int when worn, -5 Int when without it'
    ],
    skills: {
      trained: [
        'Mind Control esoteries',
        'Mind Reading esoteries'
      ]
    },
    abilities: [
      'Telepathic'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 41 }
    ]
  },
  {
    name: 'Controls Beasts',
    sourcebook: 'Numenera Corebook',
    page: 55,
    equipment: [
      '3 days of animal feed',
      'Animal harness/collar/etc'
    ],
    abilities: [
      'Beast Companion'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 41 }
    ]
  },
  {
    name: 'Controls Gravity',
    sourcebook: 'Numenera Corebook',
    page: 56,
    oddities: [
      'Pen-sized oddity that displays the weight of objects it is pointed at in symbols only you can read'
    ],
    abilities: [
      'Hover'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 42 }
    ]
  },
  {
    name: 'Crafts Illusions',
    sourcebook: 'Numenera Corebook',
    page: 57,
    oddities: [
      'Oddity that looks like a clear glass panel. Manipulating switches on it shows strange, moving images'
    ],
    abilities: [
      'Psychedelic esoteries',
      'Minor Illusion'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 43 }
    ]
  },
  {
    name: 'Crafts Unique Objects',
    sourcebook: 'Numenera Corebook',
    page: 58,
    equipment: [
      'A bag of light tools',
      'Tools required to make the two kinds of items you know how to make',
      'Any normal level 1 or 2 item you are able to make'
    ],
    oddities: [
      'An oddity chosen by the GM'
    ],
    skills: {
      trained: [
        'Creating 2 types of items',
        'Identifying the function of any kind of device'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 44 }
    ]
  },
  {
    name: 'Employs Magnetism',
    sourcebook: 'Numenera Corebook',
    page: 59,
    abilities: [
      'Move Metal'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 45 }
    ]
  },
  {
    name: 'Entertains',
    sourcebook: 'Numenera Corebook',
    page: 60,
    equipment: [
      'A musical instrument or tools you need to perform'
    ],
    abilities: [
      'Levity'
    ],
    skills: {
      trained: [
        'All social interactions except coercion or intimidation'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 46 }
    ]
  },
  {
    name: 'Exists Partially Out of Phase',
    sourcebook: 'Numenera Corebook',
    page: 60,
    abilities: [
      'Walk Through Walls'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 46 }
    ]
  },
  {
    name: 'Explores Dark Places',
    sourcebook: 'Numenera Corebook',
    page: 61,
    equipment: [
      'An explorers pack or the following: 50ft rope, 2 days rations, two minor glowglobes'
    ],
    abilities: [
      'Dark esoteries'
    ],
    skills: {
      trained: [
        'Searching',
        'Listening',
        'Climbing',
        'Balancing',
        'Jumping'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 47 }
    ]
  },
  {
    name: 'Fights with Panache',
    sourcebook: 'Numenera Corebook',
    page: 62,
    equipment: [
      'Extremely stylish clothing',
      'A jeweled weapon'
    ],
    abilities: [
      'Attack Flourish'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 47 }
    ]
  },
  {
    name: 'Focuses Mind over Matter',
    sourcebook: 'Numenera Corebook',
    page: 63,
    abilities: [
      'Deflect Attacks'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 48 }
    ]
  },
  {
    name: 'Fuses Flesh and Steel',
    sourcebook: 'Numenera Corebook',
    page: 64,
    stats: {
      might: 3,
      speed: 3
    },
    armor: 1,
    equipment: [
      'A bag of light tools',
      'Parts to repair yourself with'
    ],
    abilities: [
      'Special Healing'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 49 }
    ]
  },
  {
    name: 'Howls at the Moon',
    sourcebook: 'Numenera Corebook',
    page: 64,
    artifacts: [
      'A chronometer artifact that lets you know when the next change is coming'
    ],
    abilities: [
      'Beast Form'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 50 }
    ]
  },
  {
    name: 'Hunts with Great Skill',
    sourcebook: 'Numenera Corebook',
    page: 65,
    equipment: [
      'Boots that muffle footsteps, granting +1 the sneaky tasks'
    ],
    skills: {
      trained: [
        'Following and identifying tracks',
        'All types of movement tasks'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 50 }
    ]
  },
  {
    name: 'Leads',
    sourcebook: 'Numenera Corebook',
    page: 66,
    artifacts: [
      'A device that can tag up to 7 followers and show their relative distance and direction from you'
    ],
    skills: {
      trained: [
        'Social interactions'
      ]
    },
    abilities: [
      'Good advice'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 51 }
    ]
  },
  {
    name: 'Lives in the Wilderness',
    sourcebook: 'Numenera Corebook',
    page: 67,
    equipment: [
      'A directional compass'
    ],
    skills: {
      trained: [
        'Climbing',
        'Swimming',
        'Wilderness navigation',
        'Identifying plants and creatures'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 52 }
    ]
  },
  {
    name: 'Masters Defense',
    sourcebook: 'Numenera Corebook',
    page: 68,
    equipment: [
      'A shield'
    ],
    abilities: [
      'Shield Master'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 52 }
    ]
  },
  {
    name: 'Masters Weaponry',
    sourcebook: 'Numenera Corebook',
    page: 69,
    equipment: [
      'A high-quality weapon of your choosing'
    ],
    abilities: [
      'Weapon Esoteries',
      'Weapon Master'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 53 }
    ]
  },
  {
    name: 'Murders',
    sourcebook: 'Numenera Corebook',
    page: 70,
    equipment: [
      'A disguise kit',
      'Three doses of a level 2 blade poison that deals 5 damage'
    ],
    abilities: [
      'Surprise Attack'
    ],
    skills: {
      trained: [
        'Stealth and disguise'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 54 }
    ]
  },
  {
    name: 'Rages',
    sourcebook: 'Numenera Corebook',
    page: 71,
    abilities: [
      'Frenzy'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 54 }
    ]
  },
  {
    name: 'Rides the Lightning',
    sourcebook: 'Numenera Corebook',
    page: 71,
    equipment: [
      'A bag of misc power cells'
    ],
    abilities: [
      'Electrical esoteries',
      'Shock',
      'Charge'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 55 }
    ]
  },
  {
    name: 'Talks to Machines',
    sourcebook: 'Numenera Corebook',
    page: 72,
    equipment: [
      'A bag of small tools'
    ],
    abilities: [
      'Distant Activation'
    ],
    skills: {
      trained: [
        'All tasks involving electrical machines'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 56 }
    ]
  },
  {
    name: 'Wears a Sheen of Ice',
    sourcebook: 'Numenera Corebook',
    page: 73,
    equipment: [
      'A bladed weapon made of stronglass which looks like ice'
    ],
    abilities: [
      'Ice Armor',
      'Ice Esoteries'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 57 }
    ]
  },
  {
    name: 'Wields Power with Precision',
    sourcebook: 'Numenera Corebook',
    page: 74,
    stats: {
      intellect: 5
    },
    equipment: [
      'A book on the numenera'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 57 }
    ]
  },
  {
    name: 'Wields Two Weapons at Once',
    sourcebook: 'Numenera Corebook',
    page: 75,
    equipment: [
      'A light melee weapon'
    ],
    abilities: [
      'Dual Light Wield'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 58 }
    ]
  },
  {
    name: 'Works Miracles',
    sourcebook: 'Numenera Corebook',
    page: 75,
    abilities: [
      'Healing Touch'
    ],
    sources: [
      { sourcebook: 'Players Guide', page: 59 }
    ]
  },
  {
    name: 'Works the Back Alleys',
    sourcebook: 'Numenera Corebook',
    page: 76,
    equipment: [
      'A bag of light tools'
    ],
    skills: {
      trained: [
        'Sneaking',
        'Pickpocketing',
        'Lockpicking'
      ]
    },
    sources: [
      { sourcebook: 'Players Guide', page: 60 }
    ]
  }
]

export {
  descriptors,
  foci,
  types
}
