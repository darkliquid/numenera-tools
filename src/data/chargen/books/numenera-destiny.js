var descriptors = [{
    name: 'Adaptable',
    sourcebook: 'Numenera Destiny',
    page: 40,
    skills: {
      trained: [
        'Pleasant social interactions',
        'All actions that involve overcoming or ignoring the effects of deprivation, sorrow, or pain. This includes tasks related to ending an ongoing condition such as being fazed, blinded, stunned, and so on. (However, you are not trained in tasks to resist effects that confer those conditions in the first place.)'
      ]
    },
    extras: [
      'You gain +2 points to any one Pool, which you can reassign after each ten-hour recovery roll'
    ]
  },
  {
    name: 'Articulate',
    sourcebook: 'Numenera Destiny',
    page: 41,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Persuasion',
        'All actions that involve making plans, explaining plans, and convincing others to accept your plans'
      ]
    }
  },
  {
    name: 'Beneficent',
    sourcebook: 'Numenera Destiny',
    page: 41,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'All tasks related to pleasant social interaction, putting other people at ease, and gaining others\' trust'
      ]
    },
    extras: [
      'Devoted: Allies who have spent the last day with you add +1 to their recovery rolls. You also gain this benefit if at least one other ally gains it'
    ]
  },
  {
    name: 'Cheerful',
    sourcebook: 'Numenera Destiny',
    page: 42,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        '1 activity that most would consider to be a hobby, such as woodworking, singing, writing, and so on',
        'Tasks related to making friends, ending conflicts, and making a positive first impression on strangers'
      ],
      inability: [
        'Tasks to detect falsehoods and disguises'
      ]
    },
  },
  {
    name: 'Civic',
    sourcebook: 'Numenera Destiny',
    page: 42,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Tasks related to finding out about both current events and secrets within the community where you live',
        'All tasks related to aiding a community, including repairing infrastructure, quelling riots, defending against incursions, and so on'
      ]
    },
    equipment: [
      '1 numenera plan for an installation'
    ],
    extras: [
      'Civic Minded: You add +1 to the health of any community you are currently living in'
    ]
  },
  {
    name: 'Committed',
    sourcebook: 'Numenera Destiny',
    page: 42,
    stats: {
      might: 4
    },
    skills: {
      trained: [
        'Tasks related to enduring trials of mind and body'
      ],
      inability: [
        'Persuasion tasks'
      ]
    },
    extras: [
      'Dedication Brings Reward: You tend to practise things over and over. Once between each ten-hour recovery roll, you gain an asset to similar actions involving the same task (such as making attacks against the same foe or operating the same device.) The asset doesn\'t apply to similar but different tasks (such as attacking a different foe, even if of the same kind, or operating a different but very similar device)'
    ]
  },
  {
    name: 'Confident',
    sourcebook: 'Numenera Destiny',
    page: 43,
    stats: {
      might: 1,
      speed: 1,
      intellect: 1
    },
    skills: {
      trained: [
        '3 non-combat skills of your choice'
      ]
    },
    extras: [
      'Confident Outlook: Sometimes confidence counts as much as or more than competence. When you set your mind to it, you are trained in one task for ten minutes, as long as that task is not an attack or a defense. You can do this once per rest (the ability is renewed each time you make a recovery roll)',
      'Failure Has Its Consequence: Sometimes confidence leads to overconfidence and a stark realisation of failure. You trigger a GM intrusion on a d20 roll of 1 or 2'
    ]
  },
  {
    name: 'Cultured',
    sourcebook: 'Numenera Destiny',
    page: 43,
    skills: {
      trained: [
        'All tasks related to knowledge of current events and history',
        'All tasks related to perception, detecting differences, and noticing minor flaws (or strengths) in the works of others'
      ],
      inability: [
        'Any task involving getting people to believe or trust you'
      ]
    },
    equipment: [
      'A book on a topic of your choice',
      'A set of very fine clothing'
    ],
    extras: [
      'Learned: Being well read and well educated, you have a wide range of talents. You can attempt one task in which you have no training as if you were trained. This ability refreshes every time you make a recovery roll, but the uses never accumulate'
    ]
  },
  {
    name: 'Curious',
    sourcebook: 'Numenera Destiny',
    page: 44,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Perception',
        'All tasks related to detecting falsehoods, piercing ullusions or disguises, and seeing past facades'
      ]
    },
    equipment: [
      '3 books on whatever subjects you choose'
    ],
  },
  {
    name: 'Earnest',
    sourcebook: 'Numenera Destiny',
    page: 44,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Persuasion',
        '1 area of lore or knowledge of your choice',
        'Defense rolls to resist disease and poison',
        'All tasks involving providing consolation and emotional support to others'
      ],
      inability: [
        'Tasks that involve seeing through lies or trickery'
      ]
    },
    equipment: [
      'Thanks to your earnest nature, a friend has given you an additional expensive item worth up to 10 shins'
    ],
  }, {
    name: 'Empirical',
    sourcebook: 'Numenera Destiny',
    page: 45,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'All actions involved with conducting tests to find proof, discern the truth, or glean information'
      ],
    },
    extras: [
      'Quick Study: When you take a round to study whatever is in front of you and gain the facts, you feel more confident that you\'re about to do the right thing. Your next non-combat action gains an asset',
      'Non-Resilient: If you haven\'t had time to study something, you have a hard time taking action and moving forward. Whenever you receive a GM intrustion, any action you take in response is hindered'
    ]
  }, {
    name: 'Exacting',
    sourcebook: 'Numenera Destiny',
    page: 45,
    stats: {
      might: 4
    },
    skills: {
      trained: [
        'Persuasion and intimidation tasks',
        'Tasks to sense when someone isn\'t telling the truth'
      ],
      inability: [
        'Tasks involving positive social interaction',
        'Intellect defense rolls'
      ]
    },
  }, {
    name: 'Forward-Thinking',
    sourcebook: 'Numenera Destiny',
    page: 45,
    stats: {
      intellect: 2
    },
    shins: 30,
    skills: {
      trained: [
        'Initiative tasks',
        'Tasks that involve some element of chance, such as playing games or choosing between two or three apparently equal options'
      ]
    },
  }, {
    name: 'Gregarious',
    sourcebook: 'Numenera Destiny',
    page: 46,
    stats: {
      intellect: 2
    },
    extras: [
      'People Person: When you are within immediate range of at least two allies, the difficult of one non-combat-related task is eased. You can do this only once, but its use is restored each time you make a recovery roll',
      'Getting the Word: If you spend an hour amid a large group of people, you can glean general rumours, gossip, or opinions they hold'
    ]
  }, {
    name: 'Heroic',
    sourcebook: 'Numenera Destiny',
    page: 46,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'All social interactions',
        'Tasks involving perception and finding hidden things'
      ],
      inability: [
        'Tasks that involve detecting falsehoods'
      ]
    },
    extras: [
      'Hero\'s Complication: Although the GM can use GM intrusions on you normally (awarding XP), they can also introduce a GM intrusion on you as if you had rolled a 1 on a d20 roll (without awarding XP) based on how your heroic nature tends to attract danger. Every other time the GM uses this ability to introduce a GM intrusion without giving you XP, your heroic nature works to your advantage. Your weapon breaks, but that allows you to notice something everyone else missed. A trap catches you, but it also catches your enemies. A new foe enters the fray, but your current goe mistakes it for your ally and attacks it instead of you. You and the GM should determine the advantage together'
    ]
  }, {
    name: 'Imaginative',
    sourcebook: 'Numenera Destiny',
    page: 47,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'One of the following skills: painting, drawing, singing, poetry, writing, sculpting, playing a style of musical instrument, or something similar'
      ]
    },
    extras: [
      'Imaginative Solution: When you apply a level of Effort to any Intellect task, you gain a free level of Effort. You can do this one time, although the ability is renewed each time you make a ten-hour recovery roll'
    ]
  }, {
    name: 'Industrious',
    sourcebook: 'Numenera Destiny',
    page: 47,
    stats: {
      speed: 4
    },
    skills: {
      inability: [
        'All movement-related tasks'
      ]
    },
    extras: [
      'Imaginative Solution: When you apply a level of Effort to any Intellect task, you gain a free level of Effort. You can do this one time, although the ability is renewed each time you make a ten-hour recovery roll',
      'Ready for What\'s Next: You add +1 to your recovery rolls'
    ]
  }, {
    name: 'Intimidating',
    sourcebook: 'Numenera Destiny',
    page: 47,
    skills: {
      trained: [
        'All intimidation tasks'
      ],
      inability: [
        'Tasks related to lore and knowledge'
      ]
    },
    extras: [
      'Threatening: =2 to your Might Pool OR +2 to your Intellect Pool OR +1 to both Pools',
      'Threaten: Foes within immediate distance hesitate, which hinders their next action. You can do this once, although the ability is renewed each time you make a recovery roll',
      'Menace: One foe you choose within immediate range uses their next action to move away from you. You can do this once, although the ability is renewed each time you make a recovery roll'
    ]
  }, {
    name: 'Intuitive',
    sourcebook: 'Numenera Destiny',
    page: 48,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Perception tasks'
      ],
    },
    extras: [
      'Know What to Do: You can act immediately, even if it\'s not your turn. Afterward, on your next regular turn, any action you take is hindered. You can do this one time, although the ability is renewed each time you make a recovery roll'
    ]
  }, {
    name: 'Irrepressible',
    sourcebook: 'Numenera Destiny',
    page: 48,
    stats: {
      might: 4
    },
    skills: {
      trained: [
        'All tasks related to positive social interaction'
      ],
      inability: [
        'Intellect defense tasks related to recognising confidence games and similar schemes, especially when you\'re the target'
      ]
    },
    extras: [
      'Bounces Back: You add +1 to your recovery rolls'
    ]
  }, {
    name: 'Lawful',
    sourcebook: 'Numenera Destiny',
    page: 49,
    stats: {
      might: 2,
      speed: 2
    },
    skills: {
      trained: [
        'Tasks related to knowing, understanding, and interpreting the laws of the land'
      ],
      inability: [
        'Intellect-based tasks while engaged in any activity that breaks the law'
      ]
    },
  }, {
    name: 'Loyal',
    sourcebook: 'Numenera Destiny',
    page: 49,
    stats: {
      intellect: 2
    },
    skills: {
      inability: [
        'Tasks that involve detecting falsehoods and seeing through disguises'
      ]
    },
    extras: [
      'Devoted: If an ally within immediate range descends one step on the damage track, you can act immediately but in a restricted fashion. You can use this action either to move the willing ally up to an immediate distance or to attempt a healing task on your ally',
      'Faithful: When you help a creature to make or avoid an attack in combat, you regain 1 point to one of your Pools (this is true whether the task you helped with succeeds or fails.) You can do this one time, although the ability renews each time you make a recovery roll'
    ]
  }, {
    name: 'Meddlesome',
    sourcebook: 'Numenera Destiny',
    page: 50,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Perception',
        'Detecting falsehoods',
        'Stealth tasks',
        'Tasks to remember pertinent details on a topic you once heard or read about'
      ]
    },
  }, {
    name: 'Nurturing',
    sourcebook: 'Numenera Destiny',
    page: 50,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'Healing tasks'
      ]
    },
    extras: [
      'Nurturing: Allies who have spent the last day with you add +1 to their recovery rolls. You also gain this benefit if at least one other ally gains it'
    ]
  }, {
    name: 'Obsessive',
    sourcebook: 'Numenera Destiny',
    page: 50,
    extras: [
      'Your Obsession: At the beginning of each day, choose one concept on which you will concentrate. For the rest of that day, you’re obsessed with that concept. This doesn’t mean you ignore anything not related to your obsession. It just means you are at your best when performing tasks related to the obsession, and you are slightly inattentive when performing tasks that are not.',
      'Enthralled: When you attempt a non-combat task that is directly related to your current obsession, you gain an asset. The player and GM can decide whether a particular situation warrants this benefit.',
      'Preoccupied: Any task that is not related to your current obsession is hindered. The player and GM can decide whether a particular situation warrants this disadvantage.'
    ]
  }, {
    name: 'Optimistic',
    sourcebook: 'Numenera Destiny',
    page: 51,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Intellect defense tasks'
      ],
      inability: [
        'All movement-related tasks',
        'Might defense tasks'
      ]
    },
    extras: [
      'Shrugs Off Disappointment: When you fail at a non-combat task and try that task again the very next round, you can apply a free level of Effort towards the success of that task. This benefit effectively alleviates the requirement to apply a level of Effort when retrying failed tasks'
    ]
  }, {
    name: 'Organised',
    sourcebook: 'Numenera Destiny',
    page: 51,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Tasks related to perception, planning, and organising'
      ],
      inability: [
        'Intellect defense tasks in messy or chaotic locations'
      ]
    },
    equipment: [
      'An explorer\'s pack with extra pockets and compartments'
    ],
    extras: [
      'Benefits of Organisation: You can take one additional free action while you are at a location that you have organised to your liking (which means having spent at least ten minutes there tidying and organising) or if you are following a plan that hasn\'t diverged from the original conception. You can do this only once, but its use is restored each time you make a ten-hour recovery roll'
    ]
  }, {
    name: 'Passionate',
    sourcebook: 'Numenera Destiny',
    page: 52,
    skills: {
      trained: [
        'Running, climbing, and swimming'
      ],
      inability: [
        'Tasks requiring retraint or subtlety, including sneaking or lying'
      ]
    },
    extras: [
      'Fever: You are a devil when angered, inflicting 1 additional point of damage with any attack',
      'Fire Inside: You gain one asset to an action when doing so can be justified by your passion. You can do this only once, but its use is restored each time you make a recovery roll'
    ]
  }, {
    name: 'Perservering',
    sourcebook: 'Numenera Destiny',
    page: 52,
    skills: {
      trained: [
        'Tasks related to enndurance and keeping at an undertaking in the face of difficulties'
      ]
    },
    extras: [
      'Determined: +2 to your Intellect Pool or +2 to your Might Pool',
      'Irrepressible Reaction: Whenever you receive a GM intrusion (either by rolling a 1 or by getting one from the GM), one action you take in response within the next minute gains an asset'
    ]
  }, {
    name: 'Prepared',
    sourcebook: 'Numenera Destiny',
    page: 52,
    stats: {
      Speed: 4
    },
    skills: {
      trained: [
        'Initiative tasks'
      ]
    },
    equipment: [
      'A bag of light tools'
    ],
    extras: [
      'Tool Aficionade: If a tool enables a non-combat task but does not provide an asset, you gain an asset to that task anyway when using a tool. If a tool provides an asset to a non-combat task, you gain one additional asset when using it',
      'Inflexible: You\'re not usually surprised, so it\'s extra surprising when you are. The first action you take after being surprised or when a foe attacks you before you have acted is hindered'
    ]
  }, {
    name: 'Protective',
    sourcebook: 'Numenera Destiny',
    page: 53,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Tasks related to perception and healing'
      ],
      inability: [
        'Knowledge-based tasks'
      ]
    },
    extras: [
      'Step In Front: If you successfully draw the attack so that a foe attacks you instead of the target that they originally intended to attack, you have +2 Armour against that attack. You can do this one time, although the ability renews each time you make a recovery roll'
    ]
  }, {
    name: 'Relentless',
    sourcebook: 'Numenera Destiny',
    page: 53,
    stats: {
      might: 4
    },
    skills: {
      trained: [
        'Tasks related to healing and finding food and water'
      ],
      inability: [
        'Interaction tasks'
      ]
    },
    extras: [
      'Survivor\'s Intuition: You can come up with a random piece of information pertinent to the current situation when you wish. It is always an objective fact and must be something you could have logically read or seen in the past. You can do this one time, although the ability renews each time you make a ten-hour recovery roll'
    ]
  }, {
    name: 'Risk-Taking',
    sourcebook: 'Numenera Destiny',
    page: 53,
    stats: {
      speed: 4
    },
    skills: {
      trained: [
        'Tasks that involve some element of chance, such as playing games or choosing between two or three apparently equal options'
      ],
      inability: [
        'Tasks related to sneaking and staying quiet'
      ]
    },
    extras: [
      'Pressing Your Luck: You can choose to automatically succeed on one task without rolling, as long as the task\'s difficult is no higher than level 6. When you do so, however, you also trigger a GM intrusion as if you had rolled a 1. The intrusion doesn\'t invalidate the success, but it probably qualifies it in some fashion. You can do this one time, although the ability renews each time you make a ten-hour recovery roll'
    ]
  }, {
    name: 'Serene',
    sourcebook: 'Numenera Destiny',
    page: 54,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Intellect defense tasks',
        'All actions that involve overcoming or ignoring the effects of fear, intimidation, or panic'
      ]
    },
  }, {
    name: 'Vicious',
    sourcebook: 'Numenera Destiny',
    page: 54,
    skills: {
      trained: [
        'Tracking creatures. Creatures that have wronged you are one further step easier to track.'
      ]
    },
    equipment: [
      'A book in which you\'ve listed the names of those who\'ve wronged you'
    ],
    extras: [
      'Bloodthirsty: Once you begin fighting, you see only red. You inflict 2 additional points of damage with any attack',
      'Berserk: Once you begin fighting, it\'s hard for you to stop. In fact, it\'s a difficulty 2 Intellect task to do so, even if your foe surrenders of you\'ve run out of foes. If the latter occurs and you fail to stop, you attack the nearest ally within short range'
    ]
  }
]

var types = [{
    name: 'Arkus',
    sourcebook: 'Numenera Destiny',
    page: 7,
    stats: {
      might: 8,
      speed: 9,
      intellect: 11,
      points: 6
    },
    edges: {
      intellect: 1
    },
    shins: 9,
    cypherlimit: 2,
    skills: {
      practised: [
        'Light weapons'
      ],
      trained: [
        'Persuasion',
        '1 interaction skill of your choice from the following: negotiation, deceiving, public speaking, intimidation, or seeing through deception'
      ],
      inability: [
        'Medium weapons',
        'Heavy weapons',
        'Crafting numenera',
        'Salvaging numenera',
        'understanding numenera'
      ]
    },
    oddities: [
      'Feathered hat that occasionally makes bird noises'
    ],
    equipment: [
      'Stylish clothing',
      '1 light weapon of your choice',
      'If a ranged weapon is chosen, 12 ammunition for it'
    ],
    cyphers: [
      'Farspeaker',
      'Harmony Lamp'
    ],
    abilities: {
      fixed: [
        'Community Leader',
        'Demeanor of Command'
      ],
      optional: [
        'Anecdote',
        'Babel',
        'Connection With an Organisation',
        'Goad',
        'Powerful Rhetoric',
        'Trained Without Armour',
        'Understanding'
      ]
    },
  },
  {
    name: 'Delve',
    sourcebook: 'Numenera Destiny',
    page: 29,
    stats: {
      might: 9,
      speed: 9,
      intellect: 10,
      points: 6
    },
    edges: {
      speed: 1,
      intellect: 1
    },
    shins: 3,
    cypherlimit: 2,
    skills: {
      practised: [
        'Light weapons',
        'Medium weapons'
      ],
      trained: [
        'Salvaging numenera',
        '1 exploration skill of your choice from the following: navigation, perception, sensing danger, creature knowledge, initiative, peacefully opening communications with strangers, or tracking',
      ],
      inability: [
        'Heavy weapons',
        'Crafting numenera',
        'Understanding numenera'
      ]
    },
    oddities: [
      'Shirt that displays your muscles, bones, and internal organs when you wear it'
    ],
    equipment: [
      'Clothing',
      '1 weapon',
      'Light armour OR 1 extra unit of responsive synth',
      'A pack of light tools',
      'An explorer\'s pack',
      'If a ranged weapon is chosen, 12 ammunition for it'
    ],
    cyphers: [
      'Phasing Gloves',
      'Travel Bubble'
    ],
    abilities: {
      fixed: [
        'Community Explorer'
      ],
      optional: [
        'Additional training',
        'Familiarise',
        'Find the Way',
        'Right Tool for the Job',
        'Skill with Defense',
        'Trained in Armour',
        'Trained Without Armour'
      ]
    },
  },
  {
    name: 'Wright',
    sourcebook: 'Numenera Destiny',
    page: 18,
    stats: {
      might: 9,
      speed: 7,
      intellect: 12,
      points: 6
    },
    edges: {
      intellect: 1
    },
    shins: 5,
    cypherlimit: 3,
    skills: {
      practised: [
        'Light weapons'
      ],
      trained: [
        'Crafting numenera',
        '1 crafting skill of your choice from the following: salvaging numenera, understanding numenera, engineering, woodcrafting, armouring, weaponsmitthing, or another crafting skill',
      ],
      inability: [
        'Medium weapons',
        'Heavy weapons',
        'Salvaging numenera',
        'Understanding numenera'
      ]
    },
    oddities: [
      'Piece of extremely strong and thin cable 8 feet (2.5m) long'
    ],
    equipment: [
      '2 numenera plans of your choice',
      'Clothing',
      '1 weapon',
      'If a ranged weapon is chosen, 12 ammunition for it',
      'An explorer\'s pack',
      'A book about crafting',
      'A box of crafting tools',
      '4 units of io',
      '4 units of responsive synth',
      '6 units of parts'
    ],
    cyphers: [
      'Crafter\'s Eyes',
      'Instant Item',
      'Gravity Changer'
    ],
    abilities: {
      fixed: [
        'Community Builder'
      ],
      optional: [
        'Additional numenera plans',
        'Deconstruct',
        'Extra Use',
        'Natural Crafter',
        'Right Tool for the Job',
        'Scan for Iotum',
        'Scramble Machine',
        'Trained in Armour',
        'Trigger Iotum Ray'
      ]
    },
    extras: [
      'Always Tinkering: If you have any tools and materials at all, and you are carrying fewer cyphers than your limit, you can create a cypher if you have an hour of time to spend. The new cypher is random and always 2 levels lower than normal (minimum 1.) It\s also temperamental and fragile. These are called temperamental cyphers. If you give it to anyone else to use, it falls apart immediately, useless. Action to initiate, 1 hour to complete'
    ]
  },
  {
    name: 'Glaive',
    sourcebook: 'Numenera Destiny',
    page: 39,
    extensions: [{
      abilities: {
        fixed: [
          'Community Defender'
        ]
      }
    }]
  },
  {
    name: 'Jack',
    sourcebook: 'Numenera Destiny',
    page: 39,
    extensions: [{
      abilities: {
        fixed: [
          'Community Fixer'
        ]
      }
    }]
  },
  {
    name: 'Nano',
    sourcebook: 'Numenera Destiny',
    page: 39,
    extensions: [{
      abilities: {
        fixed: [
          'Community Scholar'
        ]
      }
    }]
  },
]

var foci = [{
    name: 'Absorbs Energy',
    sourcebook: 'Numenera Destiny',
    page: 55,
    abilities: {
      fixed: [
        'Absorb Kinetic Energy',
        'Release Energy'
      ]
    }
  },
  {
    name: 'Acts Without Consequence',
    sourcebook: 'Numenera Destiny',
    page: 57,
    skills: {
      trained: [
        'One of the following: deception, stealth, or disguise'
      ]
    },
    oddities: [
      '1 \'lucky\' oddity of the GM\'s choice'
    ],
    equipment: [
      'A deck of cards'
    ],
    abilities: {
      fixed: [
        'Slip Into Shadow'
      ],
      optional: [
        'Weird Ability: Danger Sense'
      ]
    }
  },
  {
    name: 'Adjures the Leviathan',
    sourcebook: 'Numenera Destiny',
    page: 58,
    skills: {
      trained: [
        'Lore of flesh-eating, non-humanoid creatures - recognising them, knowing their weaknesses, and knowing their habits and behaviours'
      ]
    },
    equipment: [
      'A leash'
    ],
    abilities: {
      fixed: [
        'Adjure Creature'
      ]
    }
  },
  {
    name: 'Augments Flesh with Grafts',
    sourcebook: 'Numenera Destiny',
    page: 60,
    skills: {
      trained: [
        'Healing, performing surgical procedures, and withstanding pain. You can perform surgeries on yourself, remaining conscious while you do so'
      ],
    },
    abilities: {
      fixed: [
        'Autodoctor',
        'Surgical Graft'
      ]
    }
  },
  {
    name: 'Battles Automatons',
    sourcebook: 'Numenera Destiny',
    page: 61,
    skills: {
      trained: [
        'Understanding numenera'
      ]
    },
    equipment: [
      'Bits and pieces that you tore from the husks of automatons you have destroyed in the past'
    ],
    abilities: {
      fixed: [
        'Machine Vulnerabilities'
      ]
    },
    extras: [
      'Anti-Machine Abilities: If your type grants you special abilities that inflict damage, they inflict 1 additional point of damage to automatons and similar beings, and 1 fewer point of damage to biological, living targets. If you have abilities that normally would not work against automatons (like mind control), they will now'
    ]
  },
  {
    name: 'Brandishes an Exotic Shield',
    sourcebook: 'Numenera Destiny',
    page: 63,
    abilities: {
      fixed: [
        'Force Field Shield',
        'Force Bash'
      ],
      optional: [
        'Shield Abilities: Force Fall'
      ]
    }
  },
  {
    name: 'Breaks Down Walls',
    sourcebook: 'Numenera Destiny',
    page: 64,
    skills: {
      trained: [
        'Tasks related to damaging objects with the goal of breaking, piercing, or demolishing them'
      ]
    },
    equipment: [
      'A mechanism of some sort is fused with your flesh. You think it might have something to do with your ability to pierce solid material'
    ],
    abilities: {
      fixed: [
        'Breaker',
        'Hard as Synthsteel'
      ]
    }
  },
  {
    name: 'Builds Tomorrow',
    sourcebook: 'Numenera Destiny',
    page: 66,
    skills: {
      trained: [
        'crafting numenera'
      ],
    },
    equipment: [
      '1 numenera plan for an installation OR a cypher of your choice and a bag of light tools',
      '2 plans to create any object up to level 3 plus your tier',
      '3 units of io',
      '3 units of responsive synth',
      '3 units of parts'
    ],
    abilities: {
      fixed: [
        'Seeds of a Plan',
        'Starting iotum'
      ]
    }
  },
  {
    name: 'Dances With Dark Matter',
    sourcebook: 'Numenera Destiny',
    page: 69,
    abilities: {
      fixed: [
        'Ribbons of Dark Matter'
      ]
    }
  },
  {
    name: 'Defends the Gate',
    sourcebook: 'Numenera Destiny',
    page: 71,
    equipment: [
      'A strange device, either handheld or fused to your forearm. It might be purely decorative, or it might be related to your connection to the numenera'
    ],
    abilities: {
      fixed: [
        'Fortified Position',
        'Rally to Me'
      ]
    }
  },
  {
    name: 'Defends the Weak',
    sourcebook: 'Numenera Destiny',
    page: 72,
    skills: {
      trained: [
        'Intellect defense and initiative tasks'
      ]
    },
    equipment: [
      'A shield'
    ],
    abilities: {
      fixed: [
        'Warding Shield'
      ]
    }
  },
  {
    name: 'Descends From Nobility',
    sourcebook: 'Numenera Destiny',
    page: 73,
    skills: {
      trained: [
        'Persuasion'
      ],
    },
    equipment: [
      'A set of expensive clothing suitable for nobility'
    ],
    abilities: {
      fixed: [
        'Privileged Nobility'
      ],
      optional: [
        'Noble Advantage: Servant'
      ]
    }
  },
  {
    name: 'Emerged From the Obelisk',
    sourcebook: 'Numenera Destiny',
    page: 75,
    stats: {
      might: 4
    },
    armor: 2,
    skills: {
      inability: [
        'Speed defense tasks'
      ]
    },
    equipment: [
      'A 1-pound (450g) chunk of inert amber crystal'
    ],
    extras: [
      'Crystalline Body: You are composed of animate, translucent crystall the colour of amber. Work with your GM to decide your exact form, though it is likely about the shape and size of a humanoid. Certain conditions, like mundane diseases and poisons, do not affect you',
      'Special Healing: You r cystalline body repairs itself more slowly than that of living flesh. You have only the one-round, one-hour, and ten-hour recovery rolls available each day; you do not have a ten-minute recovery roll available. Any ability you have that requires a ten-minute recovery roll instead requires a one-hour recovery roll'
    ]
  },
  {
    name: 'Explores Yesterday',
    sourcebook: 'Numenera Destiny',
    page: 77,
    skills: {
      trained: [
        'Perception, climbing, and salvaging numenera'
      ]
    },

    equipment: [
      'A bag of excavation tools'
    ]
  },
  {
    name: 'Fights With a Horde',
    sourcebook: 'Numenera Destiny',
    page: 78,
    equipment: [
      'A melee weapon you gained from your association with the martial society with their symbol or crest on the hilt'
    ],
    abilities: {
      fixed: [
        'Teamwork'
      ]
    }
  }, {
    name: 'Fuses Mind and Machine',
    sourcebook: 'Numenera Destiny',
    page: 79,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Resisting disruption or intrusion attacks against your implants and enhancements',
        'One area of knowledge of your choice (history, geography, astronomy, and so on)'
      ]
    },
    artifacts: [
      'An artifact that protects your implants and enhancements from disruption or intrusion'
    ]
  }, {
    name: 'Hunts Abhumans',
    sourcebook: 'Numenera Destiny',
    page: 81,
    skills: {
      trained: [
        'Tracking, looking for, interacting with, and hiding from abhumans'
      ]
    },
    extras: [
      'Abhuman Fighter: You inflict 2 additional points of damage when fighting abhumans'
    ]
  }, {
    name: 'Imparts Wisdom',
    sourcebook: 'Numenera Destiny',
    page: 82,
    skills: {
      trained: [
        '2 areas of knowledge of your choice'
      ]
    },
    abilities: {
      fixed: [
        'Learning the Path'
      ],
      optional: [
        'Philosophic Confusion'
      ]
    }
  }, {
    name: 'Leads',
    sourcebook: 'Numenera Destiny',
    page: 83,
    skills: {
      trained: [
        'All social interactions, whether they involve charm, learning a person\'s secrets, or intimidating others'
      ]
    },
    artifacts: [
      'An artifact that allows you to tag up to seven followers. By looking into the glass plate on the device, you can determine their distance and direction relative to you. The tagging process is somewhat demeaning, so it is likely that only your followers would ever submit to it'
    ],
    abilities: {
      fixed: [
        'Good Advice'
      ]
    }
  }, {
    name: 'Learns From Adversity',
    sourcebook: 'Numenera Destiny',
    page: 85,
    stats: {
      might: 3
    },
    skills: {
      trained: [
        'Tasks related to initiative, seeing underlying patterns, and solving puzzles'
      ]
    },
    equipment: [
      'A book filled with knowledge on a topic of your choice'
    ]
  }, {
    name: 'Metes Out Justice',
    sourcebook: 'Numenera Destiny',
    page: 86,
    skills: {
      trained: [
        'Discerning the truth of a situation, seeing through lies, or otherwise overcoming deception'
      ],
    },
    equipment: [
      'A shield'
    ],
    abilities: {
      fixed: [
        'Designation'
      ]
    }
  }, {
    name: 'Moves Like a Cat',
    sourcebook: 'Numenera Destiny',
    page: 87,
    stats: {
      speed: 5
    },
    skills: {
      trained: [
        'Balancing'
      ]
    }
  }, {
    name: 'Needs No Weapons',
    sourcebook: 'Numenera Destiny',
    page: 88,
    abilities: {
      fixed: [
        'Fists of Fury',
        'Flesh of Stone'
      ]
    }
  }, {
    name: 'Never Says Die',
    sourcebook: 'Numenera Destiny',
    page: 89,
    abilities: {
      fixed: [
        'Rapid Recovery',
        'Push on Through'
      ]
    }
  }, {
    name: 'Possesses a Shard of the Sun',
    sourcebook: 'Numenera Destiny',
    page: 90,
    skills: {
      trained: [
        'Any perception task that involves sight'
      ],
    },
    equipment: [
      'A crystal lens. When you shine light through it, the light extends for double the normal distance'
    ],
    abilities: {
      fixed: [
        'Illuminating Touch'
      ],
    },
    extras: [
      'Radiant Abilities: If you perform esoteries or similar abilities, those that would normally use force or other similar energy instead use light and heat. For example, when you use Ward, light dapples your body and flares when you would be attacked, preventing your enemies from landing a solid blow'
    ]
  }, {
    name: 'Radiates Vitality',
    sourcebook: 'Numenera Destiny',
    page: 92,
    stats: {
      might: 6
    },
    equipment: [
      'A small, metallic pendant that always seems to turn up, even after you\'ve apparently lost it or left it behind. It\'s resisted all attempts you\'ve made to scan, understand, or find out more about it'
    ]
  }, {
    name: 'Sees Beyond',
    sourcebook: 'Numenera Destiny',
    page: 94,
    equipment: [
      'A single item of your choosing - drugs, lenses, or a piece of the numenera - that helps you perceive things that others cannot. If you don\'t have this item or something like it, tasks directly related to seeing beyond are hindered'
    ],
    abilities: {
      fixed: [
        'See the Unseen'
      ]
    }
  }, {
    name: 'Shepherds the Community',
    sourcebook: 'Numenera Destiny',
    page: 96,
    skills: {
      trained: [
        'Persuasion and intimidation tasks about topics that directly relate to the community when speaking to others in the community you foster'
      ]
    },
    abilities: {
      fixed: [
        'Community Knowledge'
      ]
    }
  }, {
    name: 'Shreds the Walls of the World',
    sourcebook: 'Numenera Destiny',
    page: 97,
    abilities: {
      fixed: [
        'Phase Sprint'
      ]
    }
  }, {
    name: 'Thunders',
    sourcebook: 'Numenera Destiny',
    page: 99,
    abilities: {
      fixed: [
        'Thunder Beam'
      ]
    }
  }, {
    name: 'Touches the Sky',
    sourcebook: 'Numenera Destiny',
    page: 101,
    equipment: [
      'A device that sometimes crackles with electricity. Whoever holds it is immune to your weather abilities (but only if you willingly give it to them)'
    ],
    abilities: {
      fixed: [
        'Hover'
      ],
      optional: [
        'Zap'
      ]
    }
  }, {
    name: 'Wields Words Like Weapons',
    sourcebook: 'Numenera Destiny',
    page: 103,
    skills: {
      trained: [
        '1 of the following tasks: persuasion, deception, or detecting falsehoods'
      ],
    },
    abilities: {
      fixed: [
        'Misdirect Blame'
      ]
    }
  }
]

export {
  descriptors,
  foci,
  types,
}
