var descriptors = [{
    name: 'Abrasive',
    sourcebook: 'Character Options 2',
    page: 25,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'Seeing through lies and deception',
        'Two of the following skills of your choice: climbing, running, breaking things, jumping, swimming, lockpicking, stealth, or repair'
      ],
      inability: [
        'Pleasant social interactions'
      ]
    },
  },
  {
    name: 'Aggressive',
    sourcebook: 'Character Options 2',
    page: 25,
    stats: {
      might: 2,
      speed: 2
    },
    skills: {
      trained: [
        'All initiative tasks'
      ],
      inability: [
        'Pleasant social interactions'
      ]
    },
    extras: [
      'First Strike: The first time you strike a foe in combat, you inflict 1 additional point of damage'
    ]
  },
  {
    name: 'Altruistic',
    sourcebook: 'Character Options 2',
    page: 26,
    stats: {
      might: 3
    },
    skills: {
      trained: [
        'Pleasant social interactions'
      ]
    },
    extras: [
      'Expert Helper: When you use your action to help someone else, they gain an asset even if you are not trained in that task. Enabler'
    ]
  },
  {
    name: 'Amusing',
    sourcebook: 'Character Options 2',
    page: 26,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Pleasant social interactions'
      ],
    },
    abilities: [
      'Disarm With Humour'
    ]
  },
  {
    name: 'Deliberate',
    sourcebook: 'Character Options 2',
    page: 27,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Puzzle-solving tasks',
        'All tasks related to perception'
      ],
      inability: [
        'All speed defense tasks'
      ]
    },
  },
  {
    name: 'Devout',
    sourcebook: 'Character Options 2',
    page: 27,
    stats: {
      intellect: 3
    },
    extras: [
      'Steadfast: Your faith gives you the foundation to deal with stress. When something would alter the difficult of your action to your detriment, you can negate one step of the modification. Once you use this ability, you cannot use it again until after your next ten-hour recovery roll'
    ]
  },
  {
    name: 'Efficient',
    sourcebook: 'Character Options 2',
    page: 27,
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Identifying deceptions',
        'All tasks involving perception and solving puzzles',
        'Intellect defense tasks'
      ],
      inability: [
        'Any task related to deceiving others'
      ]
    },
  },
  {
    name: 'Extraterrestrial',
    sourcebook: 'Character Options 2',
    page: 28,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        '3 non-combat skills',
        'Intellect defense tasks'
      ],
      inability: [
        'Pleasant social interactions with strangers'
      ]
    },
  },
  {
    name: 'Fabulous',
    sourcebook: 'Character Options 2',
    page: 28,
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Tasks related to pleasant social interaction',
        'Speed defense tasks',
        'Any task related to creating art (such as drawing, painting, or putting together the perfect set of clothing to wear)'
      ]
    },
    equipment: [
      'A set of fabulous clothing'
    ],
    extras: [
      'Artistic: You\'re always coming up with some new artistic endeavor. You can usually sell a piece of art you spend at least ten hours working on for about 1 d6 shins if you\'re in a city'
    ]
  },
  {
    name: 'Gregarious',
    sourcebook: 'Character Options 2',
    page: 29,
    stats: {
      intellect: 2
    },
    extras: [
      'People Person: When you are within immediate range of at least two allies, the difficult of one noncombat-related task is decreased by one step. You can do this only once, but its use is restored each time you make a recovery roll',
      'Getting the Word: If you spend an hour amid a large group of people, you can clean the general rumours, gossip, or opinions held'
    ]
  },
  {
    name: 'Insolent',
    sourcebook: 'Character Options 2',
    page: 29,
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Intellect defense tasks'
      ],
      inability: [
        'All tasks relating to social interaction'
      ]
    },
    oddities: [
      'Thanks to your insolent behaviour, you have an additional oddity, given to you by someone who, having reached the breaking point over your impudence, offered you the object if you would just go away'
    ]
  },
  {
    name: 'Intimidating',
    sourcebook: 'Character Options 2',
    page: 29,
    skills: {
      trained: [
        'All intimidation tasks'
      ]
    },
    abilities: [
      'Lower Morale',
      'Cause Fear'
    ]
  },
  {
    name: 'Lonely',
    sourcebook: 'Character Options 2',
    page: 30,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        '4 noncombat skills of your choice'
      ],
      inability: [
        'Resisting mental attacks',
        'All climbing, running, jumping, and swimming tasks'
      ]
    },
    extras: [
      'Side Track: While talking, you annoy and distract another creature, even if the creature can\'t understand you.For as long as you do nothing but speak(you can\'t even move), the other creature takes no actions other than to defend itself, even over multiple rounds. If the creature is attacked, the effect ends. You can do this one time, although the ability is renewed each time you make a recovery roll'
    ]
  },
  {
    name: 'Manipulative',
    sourcebook: 'Character Options 2',
    page: 31,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Deception',
        'Persuasion',
        'Intimidation'
      ]
    },
    extras: [
      'Cautious: You are devious, not quick. Any time you spend points from your Speed Pool, it costs you 1 more than usual'
    ]
  },
  {
    name: 'Marine',
    sourcebook: 'Character Options 2',
    page: 31,
    skills: {
      trained: [
        'Swimming'
      ],
      inability: [
        'All perception tasks out of water',
        'Any Speed-based action, other than defense, out of the water'
      ]
    },
    extras: [
      'Water Breathing: You can breathe water and air equally well, for an unlimited time',
      'Underwater Adaption: You see twice as well as a human does underwater. Your body adapts to pressure well, and you can survive incredible depths. You do not face any of the normal underwater penalties for movement or combat'
    ]
  },
  {
    name: 'Meek',
    sourcebook: 'Character Options 2',
    page: 31,
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Sneaking and hiding',
        'Two areas of knowledge of your choice',
        'Perception',
        'Speed defense'
      ],
      inability: [
        'Resisting intimidation, threats, or fear-inducing effects'
      ]
    },
    extras: [
      'Easily Intimidated: Any time you are confronted with a situation where you could suffer damage, you must first make an Intellect defense roll, with the difficulty being equal to the level of the threat. If you fail, you cannot act for one round, and when you do act, the difficult of all tasks related to that thread is increased by one step'
    ]
  },
  {
    name: 'Mercurial',
    sourcebook: 'Character Options 2',
    page: 32,
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Deception'
      ],
      inability: [
        'Any Intellect defense task'
      ]
    },
    extras: [
      'Changeable: Changing tacks sometimes achieves your objective. When you fail at a task, you can change the way you go about achieving it and roll twice on the second attempt and take the higher result. For example, instead of trying to pick the lock a second time, you might elect to bash the door down. Or instead of trying to skewer the tetrahydra with your sword a second time, you might take a shot with your buzzer'
    ]
  },
  {
    name: 'Obsessive',
    sourcebook: 'Character Options 2',
    page: 32,
    extras: [
      'Your Obsession: At the beginning of each day, choose one topic or ideal on which you will concentrate. For the rest of that day, you\'re obsessed with that choice. This doesn\'t mean you ignore anything not related to your obsession - it just means you are at your best when performing tasks related to it, and slightly inattentive when performing tasks that are not',
      'Enthralled: When you attempt a task that is directly related to your currenty obsession, the difficulty of that task is one step lower. The player and GM can decide whether a particular situation warrants the step reduction',
      'Preoccupied: When you attempt a task that is not related to your current obsession, the difficulty of that task is one step higher. The player and GM can decide whether a particular situation warrants the step increase'
    ]
  },
  {
    name: 'Passionate',
    sourcebook: 'Character Options 2',
    page: 33,
    skills: {
      trained: [
        'Running, climbing, and swimming'
      ],
      inability: [
        'Any task requiring restraint or subtlety, including sneaking or lying'
      ]
    },
    extras: [
      'Fever: You are a devil when angered, inflicting 1 additional point of damage with any attack',
      'Fire Inside: You have the ability to lower the difficulty of an action by one step when doing so can be justified by your passion. You can do this only once, but its use is restored each time you make a recovery roll'
    ]
  },
  {
    name: 'Polyglot',
    sourcebook: 'Character Options 2',
    page: 34,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Fluency in four different languages of your choice',
        'Pleasant social interaction'
      ],
      inability: [
        'Any task requiring scientific understanding'
      ]
    },
    extras: [
      'Language Mastery: If you hear a language spoken for an hour or so, you can attempt a difficult 6 task to discern basic meaning of anything spoken in that language thereafter. If you hear a language spoken for a day or so, the difficulty becomes 4. After a week, the difficulty becomes 2. After two weeks, you are fluent in the language'
    ]
  },
  {
    name: 'Rebellious',
    sourcebook: 'Character Options 2',
    page: 34,
    stats: {
      might: 3
    },
    skills: {
      trained: [
        'Intellect defense'
      ]
    },
    extras: [
      'Headstrong: The GM can introduce a GM intrusion on you (as if you had rolled a 1 on a d20), without awarding you any XP, based on your always-charging-ahead nature. However, if this happens, 50% of the time, your headstrong nature works to your advantage. Rather than hurting you, it helps, or it hurts your enemies. For example, you might discover you\'re charging many more enemies than you realised, but they are intimidated by your \'conviction\' and run. You and the GM should work together to determine the details. The GM can also use GM intrusions based on your headstrong nature normally (awarding XP) if they desire'
    ]
  },
  {
    name: 'Resourceful',
    sourcebook: 'Character Options 2',
    page: 35,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Any task that involves learning something new, whether you\'re talking to a local to get information or digging through old books to find lore'
      ],
      inability: [
        'Any task to notice danger around you'
      ]
    },
    extras: [
      'Planner: You\'re the one with a plan. When you observe or study a location for at least one round as your action, the next time you interact with it (possibly in the following round), the difficult of a related task (such as finding a clue, a tool, or a secret compartment) is reduced by one step'
    ]
  },
  {
    name: 'Subterranean',
    sourcebook: 'Character Options 2',
    page: 35,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'Tasks related to finding your way and avoiding becoming lost',
        'Climbing tasks',
        'Tasks related to squeezing into and out of tight places'
      ],
    },
    equipment: [
      '1 Glowglobe',
      'A rope',
      'A dozen pitons'
    ],
    extras: [
      'You are unsettled in open spaces. You regain 1 less point than normal when you make recovery rolls out in the open (minimum 1 point)'
    ]
  },
  {
    name: 'Ultraterrestrial',
    sourcebook: 'Character Options 2',
    page: 35,
    stats: {
      points: 4
    },
    skills: {
      trained: [
        'Tasks related to knowing about alternate dimensions'
      ],
      inability: [
        'Intellect defense tasks'
      ]
    },
    extras: [
      'Noncausal: When you roll a die on a task and get a result you don\'t like, you can insert yourself a few seconds back in your own timeline and reroll and choose the result you like best. However, when you take advantage of this ability, reality rebounds and you are dazed, increasing the difficult of all your tasks by one step on your next turn'
    ]
  },
  {
    name: 'Vigilant',
    sourcebook: 'Character Options 2',
    page: 36,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Detecting deception',
        'Initiative actions'
      ]
    },
    equipment: [
      'A spyglass'
    ]
  },
  {
    name: 'Artificially Intelligent',
    sourcebook: 'Character Options 2',
    page: 40,
    stats: {
      might: 3,
      speed: 3,
      intellect: 4
    },
    armor: 1,
    extras: [
      'Limited Recovery: Resting restores points only to your Intellect Pool, not to your Might Pool or Speed Pool',
      'Mechanics, Not Medicines: Conventional healing methods, including the vast majority of numenera restorative devices, do not function to restore points to any of your Pools. You can recover points to your Intellect Pool only by resting, and you can recover points to your Speed and Might Pools only through repair',
      'Machine Vulnerabilities and Invulnerabilities: Damaging effects and other threats that rely on an organic system - poison, disease, cell disruption, and so on - have no effect on you. Neither do beneficial drugs or other effects. Conversely, things that normally affect only inorganic or inanimate objects can affect you. Effects that can disrupt machines affect you',
      'Uncanny Valley: You have a hard time relating to organic beings, and they don\'t react well to you. The difficulty of all positive interaction tasks with such beings is increased by two steps'
    ]
  },
  {
    name: 'Calramite',
    sourcebook: 'Character Options 2',
    page: 41,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Actions related to fine manual manipulation, such as picking locks, repairing tiny devices',
        'Actions related to sleight of hand'
      ],
    },
    extras: [
      'You speak the Truth, Calramite, and one other language of your choice',
      'You require more sleep than a human. Instead of taking a ten-hour recovery roll, you require thirteen hours. You still get the benefit of the recovery if you take only ten hours of rest, but you gain an inability in Intellect-based tasks. The inability persists until you can take the additional hours of rest or complete an entire ten-hour recovery roll'
    ]
  },
  {
    name: 'Naiadapt',
    sourcebook: 'Character Options 2',
    page: 42,
    skills: {
      inability: [
        'Tasks involving remaining calm, resisting stress, and engaging in rational rebate (including attempts at persuasion)'
      ]
    },
    extras: [
      'Swappable Dyremmi Abilities: Each naiadapt can have two active dyremmi abilities plus two spare abilities that are inactive at one time. The spare abilities are usually stored as internal biological packages visible as slight bulges or discolourations somewhere on the character\'s skin. This feature grants a naiadapt a flexibility that others rarely possess. The naiadapt can replace one active dyremmi ability (such as Deep Adaption, Armoured Carapace, Spray of Confusion, Contemplative, Numenera Specialisation, and so on) with a different stored ability. A naiadapt can store two inactive abilities at one time, though is a naiadapt meets another willing naiadapt or naiadan with different abilities, they can permamently swap abilities (active or inactive) between them. To switch between an active and stored ability, a naiadapt must spend ten minutes concentrating, during which time their physiology shifts as they give up (and store) one dyremmi ability for another (a process naiadans call communion.) A naiadapt can choose to vary an active dyremmi ability up to twice per day, immediately after a one-hour or ten-hour recovery roll',
      'Naiadapt Dyremmi Abilities: The abilities listed under Naiadapt Dyremmi Abilities are granted only while the indicated dyremmi ability is active, as chosen by the PC',
      'Cypher Danger: Active dyremmi abilities count against a character\'s cypher limit.To avoid a roll on the Cypher Danger table, a character must be sure to keep the number of normal cyphers they carry plus the number of active dyremmi abilities available to them under their cypher limit at all times ',
      'Hybrid Instability: Whenever the naiadapt descends a step on the damage track, they must succeed on a difficulty 3 Might defense roll. On a failure, they lose cohesion over some of their dyremmi constituents, which suspends one active dyremmi ability for ten hours'
    ]
  },
  {
    name: 'Ormyrl',
    sourcebook: 'Character Options 2',
    page: 44,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Blending into the crowd, moving unseen in groups of people'
      ],
      inability: [
        'You can \'see\' perfectly in short range, but not at all beyond that'
      ]
    },
  },
  {
    name: 'Proxima',
    sourcebook: 'Character Options 2',
    page: 45,
    stats: {
      might: 4
    },
    skills: {
      trained: [
        'Tasks related to intimidating humans'
      ],
      inability: [
        'Positive social interactions with humans'
      ]
    },
    extras: [
      'Quick Recovery: Your ten-minute recovery roll only takes one action'
    ]
  },
  {
    name: 'Skeane',
    sourcebook: 'Character Options 2',
    page: 45,
    edges: {
      speed: 1
    },
    skills: {
      trained: [
        'The numenera',
        'Swimming',
        'Study, contemplation, or mental concentration',
        'Crafting'
      ],
      inability: [
        'Resisting disease or poison',
        'Tasks involving combat - including attack and defense rolls'
      ]
    },
    cyphers: [
      'A cypher that you created yourself, and thus you can work with the GM to determine what it is'
    ],
    extras: [
      'Amphibious: You can breathe air or water'
    ]
  },
]

var types = [{
    name: 'Glint',
    sourcebook: 'Character Options 2',
    page: 5,
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
      practiced: [
        'Light weapons'
      ],
      trained: [
        'Two of the following: deceiving, persuading, public speaking, seeing through deception, or intimidating'
      ]
    },
    oddities: [
      '1 Oddity'
    ],
    equipment: [
      'Stylish clothing',
      'A light weapon',
      '12 ammunition for any chosen ranged weapon (only if a ranged weapon is selected)'
    ],
    cyphers: [
      '2 Cyphers (chosen for you by the GM)'
    ],
    abilities: [
      'Coax Information',
      'Connection With an Organisation',
      'Contact',
      'Encouragement',
      'Fast Talk',
      'Friendship',
      'Influence',
      'False Identity'
    ],
  },
  {
    name: 'Seeker',
    sourcebook: 'Character Options 2',
    page: 15,
    stats: {
      might: 9,
      speed: 10,
      intellect: 9,
      points: 6
    },
    edges: {
      speed: 1
    },
    shins: 3,
    cypherlimit: 3,
    skills: {
      practiced: [
        'Light weapons',
        'Medium weapons'
      ],
      trained: [
        'Understanding numenera',
        'Identifying numenera',
        'Might defense'
      ]
    },
    artifacts: [
      'stuff'
    ],
    oddities: [
      '1 Oddity (chosen for you by the GM)'
    ],
    equipment: [
      'Clothing',
      'Two weapons (or one weapon and a shield)',
      'Light armour',
      'An explorer\'s pack',
      '12 ammunition for any chosen ranged weapon (only if a ranged weapon is selected)'
    ],
    cyphers: [
      '3 Cyphers (chosen for you by the GM)'
    ],
    abilities: [
      'Battle Numenera',
      'Danger Sense',
      'Decipher',
      'Knowledge Skills',
      'Muscles of Iron',
      'Physical Skills',
      'Practised in Armour',
      'Trained Without Armour'
    ]
  },
]

var foci = [{
    name: 'Abides in Crystal',
    sourcebook: 'Character Options 2',
    page: 48,
    equipment: [
      '4 crystals of different sizes and colours that you value'
    ],
    extras: [
      'Crystalline Esoteries:  If you perform esoteries, those that inflict damage do so hurled with great force. Protective esoteries use crystalline shields or armor. And so on.'
    ],
    abilities: [
      'Fuse Into Crystal'
    ]
  },
  {
    name: 'Absorbs Energy',
    sourcebook: 'Character Options 2',
    page: 50,
    abilities: [
      'Absorb Kinetic Energy',
      'Release Energy'
    ]
  },
  {
    name: 'Abuses Alchemy',
    sourcebook: 'Character Options 2',
    page: 51,
    equipment: [
      'A bag containing tools and ingredients for creating your drugs',
      'Journal containing your drug recipes',
      'Several weeks\' worth of your daily alchemical dose prepared, and ingredients to create several more weeks\' worth on hand'
    ],
    abilities: [
      'Alchemical Dependence'
    ]
  },
  {
    name: 'Becomes Energy',
    sourcebook: 'Character Options 2',
    page: 53,
    abilities: [
      'Energy Skin',
      'Release Energy Blast'
    ]
  },
  {
    name: 'Charges Right In',
    sourcebook: 'Character Options 2',
    page: 54,
    skills: {
      trained: [
        'Initiative tasks'
      ]
    },
    abilities: [
      'Charge Attack'
    ]
  },
  {
    name: 'Conceals the Truth',
    sourcebook: 'Character Options 2',
    page: 55,
    abilities: [
      'Natural Born Liar'
    ],
    skills: {
      trained: [
        'Trained in one of disguise, deception, lockpicking, pickpocketing, seeing through deception, sleight of hand, or stealth', 
      ]
    }
  },
  {
    name: 'Delved Too Deeply',
    sourcebook: 'Character Options 2',
    page: 56,
    stats: {
      might: 5
    },
    edges: {
      might: 1
    },
    armor: 1,
    extras: [
      'Void Matter Infusion: can see in total darkness as if dim. 1 damage per round if exposed to light.'
    ],
    skills: {
      inability: [
        'Speed defense during the day'
      ]
    }
  },
  {
    name: 'Devotes Everything to the Cause',
    sourcebook: 'Character Options 2',
    page: 58,
    equipment: [
      'A printed pamphlet or booklet related to the purity and truth of your cause'
    ],
    stats: {
      points: 4
    },
    skills: {
      trained: [
        'Trained in a knowledge skill related to your cause'
      ]
    }
  },
  {
    name: 'Fell From Another World',
    sourcebook: 'Character Options 2',
    page: 59,
    abilities: [
      'Uncanny'
    ],
    skills: {
      trained: [
        'Trained in one esoteric skill'
      ]
    }
  },
  {
    name: 'Figures Things Out',
    sourcebook: 'Character Options 2',
    page: 60,
    equipment: [
      'A journal and quill where you can jot down your observations and analysis'
    ],
    abilities: [
      'Applied Observation'
    ]
  },
  {
    name: 'Forges a Bond',
    sourcebook: 'Character Options 2',
    page: 63,
    abilities: [
      'Share Focus',
      'Bond'
    ]
  },
  {
    name: 'Gazes Into the Abyss',
    sourcebook: 'Character Options 2',
    page: 64,
    equipment: [
      'Manacles and hobble that you sometimes ask your friends to secure you with, just in case'
    ],
    stats: {
      might: 4
    },
    edges: {
      might: 1
    },
    abilities: [
      'Natural Weapons'
    ]
  },
  {
    name: 'Likes to Break Things',
    sourcebook: 'Character Options 2',
    page: 65,
    equipment: [
      'A hammer'
    ],
    abilities: [
      'Feat of Strength'
    ]
  },
  {
    name: 'Makes Something Out of Nothing',
    sourcebook: 'Character Options 2',
    page: 67,
    equipment: [
      'A pack of light tools'
    ],
    abilities: [
      'Improvise'
    ],
    skills: {
      trained: [
        'Trained in a crafting skill not already trained in'
      ]
    }
  },
  {
    name: 'Manipulates Force',
    sourcebook: 'Character Options 2',
    page: 69,
    abilities: [
      'Bubble of Protection'
    ]
  },
  {
    name: 'Plays Tricks',
    sourcebook: 'Character Options 2',
    page: 71,
    shins: 10,
    equipment: [
      'A disguise of your choice'
    ],
    abilities: [
      'Legerdemain'
    ],
    skills: {
      trained: [
        'Trained in either pleasant social interactions or negative social interactions'
      ]
    }
  },
  {
    name: 'Provides Support',
    sourcebook: 'Character Options 2',
    page: 72,
    skills: {
      trained: [
        'Healing'
      ]
    },
    abilities: [
      'Good Advice'
    ]
  },
  {
    name: 'Shapes Liquid',
    sourcebook: 'Character Options 2',
    page: 73,
    abilities: [
      'Create Liquid Item'
    ]
  },
  {
    name: 'Speaks to the Datasphere',
    sourcebook: 'Character Options 2',
    page: 75,
    equipment: [
      'A numenera device (worn or implanted on your skin) that adds 1 point to your Intellect Pool. If you\'re ever without the artifact, subtract 5 points from your Intellect Pool;the points are restored if you regain the item '
    ],
    extras: [
      'Scan Training: If you have the Scan esotery from your type, you\'re automatically trained in it. Enabler'
    ],
    abilities: [
      'Knowledge Tap',
      'Machine Interface'
    ]
  },
  {
    name: 'Stares Down Adversity',
    sourcebook: 'Character Options 2',
    page: 77,
    equipment: [
      'A weapon of your choice'
    ],
    skills: {
      trained: [
        'Perception',
        'Intimidation'
      ]
    },
    abilities: [
      'Rally on Me'
    ]
  },
  {
    name: 'Steps Into the Outside',
    sourcebook: 'Character Options 2',
    page: 77,
    equipment: [
      'Explorer\'s Pack'
    ],
    abilities: [
      'Walk Through Walls'
    ],
    skills: {
      trained: [
        'Knowledge about alternate dimensions'
      ]
    }
  },
  {
    name: 'Ventures Into the Night',
    sourcebook: 'Character Options 2',
    page: 79,
    equipment: [
      'With your GM\'s approval, access to a small starcraft'
    ],
    abilities: [
      'Air Supply'
    ],
    skills: {
      trained: [
        'General knowledge of nearby planets and worlds'
      ]
    }
  },
  {
    name: 'Wields a Whip',
    sourcebook: 'Character Options 2',
    page: 81,
    abilities: [
      'Savage Whip'
    ]
  },
  {
    name: 'Wonders',
    sourcebook: 'Character Options 2',
    page: 83,
    oddities: [
      '1 additional oddity'
    ],
    abilities: [
      'Asks the Question'
    ],
    skills: {
      trained: [
        'Any one non-combat skill'
      ]
    }
  },
]

export {
  descriptors,
  foci,
  types
}
