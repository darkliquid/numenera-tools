var descriptors = [{
    name: "Bloomborn",
    sourcebook: "Torment",
    page: 142,
    stats: {
      intellect: 3
    },
    skills: {
      trained: [
        'All tasks involving interacting with, understanding, and navigating the Bloom, its Maws, and its tongues',
        'Intellect defense tasks'
      ],
      inability: [
        'All tasks involving seeing through lies, deception, and persuasion'
      ]
    },
    extras: [
      'Adaptable: The Bloom is always changing - closing Maws, creating new tunnels, wanting new things - and you\'ve learned to think on your feet, coming up with new plans on the fly. Anytime you receive a GM intrusion, you have an asset on your next task'
    ]
  },
  {
    name: "Castoff",
    sourcebook: "Torment",
    page: 142,
    stats: {
      intellect: 2
    },
    skills: {
      inability: [
        'All tasks related to lore, history, and memory',
        'Al tasks related to positive social interactions, empathy, kindness, and succor'
      ]
    },
    extras: [
      'Tidal Surge: You don\'t suffer the way others do. Instead, when you would normally take damage or otherwise experience something that would cause pain, you radiate a burst of pain outward, transmitting it to the body of another. Unlike many other abilities, Tidal Surge is a passive ability, one that occurs only when you are defending',
      'Requires Torment: The Explorer\'s Guide to select ability from the Tidal Surge table, p143'
    ]
  },
  {
    name: "Cautious",
    sourcebook: "Torment",
    page: 144,
    stats: {
      intellect: 3
    },
    skills: {
      trained: [
        'All tasks involving seeing through perception, discovering traps, and assessing danger',
        'All tasks involving organising and planning'
      ],
      inability: [
        'All noncombat Speed-based tasks'
      ]
    },
    extras: [
      'Calculated Risk: When a task seems particularly dangerous, or when the odds are stacked against you, your careful planning often shows you a way out of it at the last second. When you spend 1 Intellect point prior to your roll and you roll a 1, you can reroll without spending an XP'
    ]
  },
  {
    name: "Slick",
    sourcebook: "Torment",
    page: 145,
    stats: {
      intellect: 2
    },
    shins: 10,
    skills: {
      trained: [
        'All tasks dealing with persuasion, bluffing, misdirection, and deception',
        'All tasks involving manual dexterity, such as stealing, performing sleight-of-hand, and lockpicking'
      ]
    },
    oddities: [
      '3 oddities'
    ],
    extras: [
      'Sleight-of-Hand: Choose one non-combat trick, foil, or feint to be your specialty. When you use it successfully, you have an asset on your next action',
      'All Brain, No Brawn: When you apply Effort when making a Might roll, you must spend 1 extra point from your Speed Pool'
    ]
  },
  {
    name: "Ghibra",
    sourcebook: "Torment",
    page: 149,
    skills: {
      trained: [
        'Swimming',
        'Perception',
        'Horticulture and crafting useful materials from plants'
      ],
      inability: [
        'Tasks involving combat, including attack and defense rolls, while on land'
      ],
    },
    cyphers: [
      'A breather that converts air to water for 28 hours'
    ],
    extras: [
      'Bodily Harm: You have a bodily feature (such as claws, tentacles, barbs, tendrils, and so on) that deals 1 additional point of damage per attack',
      'Telepathic: You can communicate telepathically with any other thinking, speaking creature in long range',
      'Immersion: As a water-breather, you require devices or other assistance to breathe air, and you must be immersed in water for 20 minutes per day or gain a cumulative one-step penalty on physical actions'
    ],
  }
]

var foci = [{
    name: "Breathes Shadow",
    sourcebook: "Torment",
    page: 145,
    equipment: [
      'A special paste that you can apply to your clothing and equipment that reflects, absorbs, and refracts light as you desire. There\'s enough paste for three uses; each one lasts ten minutes and gives you an asset in sneaking'
    ],
    extras: [
      'Shadow Esoteries: If you perform esoteries, those that would normally use force or other energy instead use shadow. For example, when you use Ward, a deep black force envelops your body when you would be attacked, preventing your enemies from landing a solid blow'
    ],
    abilities: {
      fixed: [
        'Shadow Shroud'
      ]
    }
  },
  {
    name: "Snares Deadly Prey",
    sourcebook: "Torment",
    page: 147,
    skills: {
      trained: [
        'All tasks involving traps, including baiting, building, setting, spotting, disabling, and disguising'
      ]
    },
    equipment: [
      'A number of tools specially designed to help you create and repair traps, as well as one simple and one complex trap'
    ]
  },
  {
    name: "Speaks With a Silver Tongue",
    sourcebook: "Torment",
    page: 148,
    skills: {
      trained: [
        'All social interactions, including persuasion, deception, and intimidation'
      ]
    },
    equipment: [
      'A book where you keep notes of all your favourite words, inspirational stories, and speech anecdotes'
    ]
  }
]

export {
  descriptors,
  foci,
}
