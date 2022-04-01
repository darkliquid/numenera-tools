var descriptors = [{
    name: 'Bitter',
    sourcebook: 'Rusthaven',
    page: 49,
    stats: {
      Intellect: 2
    },
    skills: {
      trained: [
        'Any knowledge tasks related to your bitterness.'
      ],
      inability: [
        'Pleasant social interactions.',
        'The GM gets free intrusions when invoking the source of your bitterness.'
      ]
    },
  },
  {
    name: 'Frightening',
    sourcebook: 'Rusthaven',
    page: 48,
    stats: {
      Might: 4
    },
    skills: {
      trained: [
        'Intimidation.'
      ]
    },
    extras: [
      'You have a scar or deformity that acts as an asset for intimidating others.'
    ]
  },
  {
    name: 'Grumpy',
    sourcebook: 'Rusthaven',
    page: 50,
    skills: {
      trained: [
        'Intellect defence.'
      ],
      inability: [
        'All pleasant social interactions.'
      ]
    },
    extras: [
      'As a minor effect on pleasant social tasks, you gain an asset if the target finds your grumpiness endearing.'
    ]
  },
  {
    name: 'Iron-Touched/Rustwalker',
    sourcebook: 'Rusthaven',
    page: 51,
  },
  {
    name: 'Nihilistic',
    sourcebook: 'Rusthaven',
    page: 46,
    skills: {
      trained: [
        'Intellect defense and resisting persuasion.',
        'Any action taken in aid of utterly destroying something.'
      ],
      inability: [
        'Pleasant social interactions are two steps more difficult.'
      ]
    },
  },
  {
    name: 'Iron-Willed',
    sourcebook: 'Rusthaven',
    page: 58,
    stats: {
      Intellect: 2
    },
    skills: {
      trained: [
        'Resisting temptation and coercion.'
      ],
      inability: [
        'Anything related to avoiding or defending against the Iron Wind.'
      ]
    },
    extras: [
      'Inspiring: When helping others, you grant two assets instead of one.',
      'Iron Blessing: The Wind left its mark upon you. Take a cosmetic corrosion.'
    ]
  },
  {
    name: 'Pure',
    sourcebook: 'Rusthaven',
    page: 49,
    stats: {
      Might: 1,
      Speed: 1,
      Intellect: 1
    },
    skills: {
      trained: [
        'Pleasant social interactions with untained humans.'
      ],
      inability: [
        'Tasks that risk ruining your appearance.'
      ]
    },
    equipment: [
      'A hand mirror and a set of cosmetic paints and dyes.'
    ],
    extras: [
      'Androgeny: You can pass as either a male or a female with no difficulty.'
    ]
  },
  {
    name: 'Reborn',
    sourcebook: 'Rusthaven',
    page: 50,
    skills: {
      trained: [
        'Resisting fear and doubt.'
      ],
      inability: [
        'When confronted with the Iron Wind the GM can use intrusions on you for free.'
      ]
    },
  },
  {
    name: 'Reckless',
    sourcebook: 'Rusthaven',
    page: 47,
    stats: {
      Speed: 2
    },
    shins: 10,
    skills: {
      trained: [
        'Resisting fear and intimidation.',
        'Speed defence actions.'
      ],
      inability: [
        'All tasks relating to identifying danger.',
        'Gaining the trust of others.'
      ]
    },
  },
  {
    name: 'Ridden',
    sourcebook: 'Rusthaven',
    page: 49,
    stats: {
      Might: 4
    },
    skills: {
      inability: [
        'Pleasant social interactions.',
        'You have given yourself to the Riders and must obey their commands (which often come in the form of GM intrusions.) Disobedience makes any task two steps more difficult and causes your maximum Might Pool to reduce by 4 points until you atone.'
      ]
    },
    extras: [
      'Factory: Your body grows terrible growths which occasionally bud off into level 2 creatures. These creatures are not hostile to you and are not under your control, but may be convinced to assist you on a single task.',
      'Advice: The creatures within advise you on courses of action or provide knowledge you otherwise couldn\'t easily obtain.Once per session you can ask a question about your current situation and get an answer.'
    ]
  },
  {
    name: 'Rustborn',
    sourcebook: 'Rusthaven',
    page: 47,
    skills: {
      trained: [
        'Might defense.'
      ],
    },
    extras: [
      'Born Different: Your strange heritage is plain to see - roll for two cosmetic mutations.',
      'Stormsense: When you focus, you can sense the direction of the nearest Iron Wind storm long before it is detectable by normal means. Once per session you can ask the GM about the Iron Wind and be told the direction of the nearest one within 10 miles.',
      'Changed: You were born with one beneficial and one harmful mutation. For each one, roll 1d100, for results below 51, refer to the mutations tables in the core rulebook, for 51+, select a corrosion from the beneficial corrosions table on page 51 or the harmful corrosions table on page 53  of Rusthaven respectively.'
    ]
  },
  {
    name: 'Shunned',
    sourcebook: 'Rusthaven',
    page: 48,
    stats: {
      Might: 4
    },
    skills: {
      trained: [
        'Disguise tasks related to your mark.',
        'Remaining unnoticed and out-of-sight.'
      ],
      inability: [
        'If discovered, all social interaction tasks are two steps more difficult for you and anyone known to associate with you.',
        'Your mark is very obvious and by default a difficulty 0 task to notice without any disguise or other means of obscuring it.'
      ]
    },
    equipment: [
      'Simple disguise kit for covering your mark.'
    ]
  }
]

var foci = [{
    name: 'Chases the Wind',
    sourcebook: 'Rusthaven',
    page: 63,
    oddities: [
      'A unique object that reacts in some way when placed near a cypher, artifact or oddity.'
    ],
  },
  {
    name: 'Commands Flesh',
    sourcebook: 'Rusthaven',
    page: 64,
    equipment: [
      '2 weeks of rations. Generating all this additional biomass is hungry work.'
    ]
  },
  {
    name: 'Embraces Chaos',
    sourcebook: 'Rusthaven',
    page: 59,
  },
  {
    name: 'Forever Changes',
    sourcebook: 'Rusthaven',
    page: 61,
    equipment: [
      'A small hand-mirror so you can see what you look like.'
    ]
  },
  {
    name: 'Taints',
    sourcebook: 'Rusthaven',
    page: 60,
    equipment: [
      'A pair of black, synth gloves.'
    ]
  },
  {
    name: 'Wakes from Death',
    sourcebook: 'Rusthaven',
    page: 62,
    equipment: [
      'An indestructible oddity that had a major role in you discovering your immortality. It never seems to be far from your grasp, even when you awake from total destruction.'
    ]
  }
]

export {
  descriptors,
  foci,
}
