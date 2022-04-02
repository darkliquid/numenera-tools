var descriptors = [
  {
    name: 'Clumsy',
    sourcebook: 'Character Options 1',
    page: 19,
    stats: {
      speed: -2,
      might: 2
    },
    shins: number,
    skills: {
      trained: [
        'All pleasant social interactions when you express a lighthearted, self-deprecating manner',
        'All tasks involving breaking things'
      ],
      inability: [
        'Any task that involves balance, grace, or hand-to-eye coordination'
      ]
    },
    extras: [
      'Dumb Luck: The GM can introduce a GM intrusion on you, based on your clumsiness, without awarding you any XP (as if you had rolled a 1 on a d20 roll). However, if this happens, 50% of the time, your clumsiness works to your advantage. Rather than hurting you (much), it helps, or it hurts your enemies. You slip, but it’s just in time to duck an attack. You fall down, but you trip your enemies as you crash into their legs. You turn around too quickly, but you end up knocking the weapon from your foe’s hand. You and the GM should work together to determine the details. The GM can use GM intrusions based on your clumsiness normally (awarding XP) if she desires'
    ]
  },
  {
    name: 'Craven',
    sourcebook: 'Character Options 1',
    page: 19,
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Stealth-based tasks',
        'Running actions',
        'Any action made to escape danger, flee from a dangerous situation, or wheedle your way out of trouble'
      ],
      inability: [
        'Initiative actions',
        'Any potentially dangerous tasks you undertake alone'
      ]
    },
    equipment: [
      'A good luck charm or protective device to keep you out of harm\'s way',
      'You begin the game with one extra oddity'
    ]
  },
  {
    name: 'Cruel',
    sourcebook: 'Character Options 1',
    page: 20,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Tasks related to deception, intimidation, and persuasion when you interact with characters experiencing physical or emotional pain'
      ],
      inability: [
        'Any task made to ascertain another character\'s motives, feelings, or disposition'
      ]
    },
    equipment: [
      'A valuable memento from the last person you destroyed. The memento is worth 10 shins and you can sell ir ot trade it for an item of equal or lesser value'
    ],
    extras: [
      'Cruelty: When you use force, you can choose to main or deliver painful injuries to draw out you foe\'s suffering. Whenever you inflict damage, you can choose to inflict 2 fewer points of damage to decrease the difficulty of the next attack against that foe by one step'
    ]
  },
  {
    name: 'Dishonorable',
    sourcebook: 'Character Options 1',
    page: 20,
    stats: {
      speed: 4
    },
    skills: {
      trained: [
        'Deception',
        'Stealth',
        'Intimidation'
      ],
      inability: [
        'Pleasant social interactions'
      ]
    },
    extras: [
      'Just Desserts: When the GM gives another character an XP to award someone for a GM intrusion, that character cannot give it to you'
    ]
  },
  {
    name: 'Doomed',
    sourcebook: 'Character Options 1',
    page: 21,
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Perception-related tasks',
        'Speed defense tasks',
        'Intellect defense tasks related to losing your sanity'
      ]
    },
    extras: [
      'Every other time the GM uses a GM intrusion on your character, you cannot refuse it and do not get an XP for it (you still get an XP to award to another player). This is because you are doomed. The universe is a cold, uncaring place, and your efforts are futile at best'
    ]
  },
  {
    name: 'Driven',
    sourcebook: 'Character Options 1',
    page: 21,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'Intellect defense actions',
        'Each day, choose one skill that you believe will clearly help you reach your goal. You are trained in tasks related to that skill'
      ],
      inability: [
        'All perception tasks'
      ]
    },
  },
  {
    name: 'Empathic',
    sourcebook: 'Character Options 1',
    page: 22,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'All tasks involving social interaction, pleasant or otherwise',
        'Tasks involving sensing other emotions, discerning dispositions, and getting a hunch about people around you'
      ],
      inability: [
        'Intellect defense'
      ]
    },
  },
  {
    name: 'Exiled',
    sourcebook: 'Character Options 1',
    page: 22,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'All tasks involving sneaking',
        'All tasks involving foraging, hunting, and finding safe places to rest or hide'
      ],
      inability: [
        'Any task involving social interactions'
      ]
    },
    extras: [
      'Loner: You gain no benefit when you get help with a task from another character who is trained or specialised in that task'
    ]
  },
  {
    name: 'Foolish',
    sourcebook: 'Character Options 1',
    page: 23,
    stats: {
      intellect: -4
    },
    skills: {
      inability: [
        'Intellect Defense',
        'Any task that involves seeing through a deception, an illusion, or a trap'
      ]
    },
    extras: [
      'Carefree: You succeed more on luck than anything. Every time you roll for a task, roll twice and take the higher result',
      'Intellect Weakness: Any time you spend points from your Intellect Pool, it costs you 1 more point than usual'
    ]
  },
  {
    name: 'Guarded',
    sourcebook: 'Character Options 1',
    page: 23,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'All Intellect defense tasks',
        'All tasks involving discerning the truth, piercing disguises, and recognising falsehoods and other deceptions'
      ],
      inability: [
        'Any task involving deception or persuasion'
      ]
    },
  },
  {
    name: 'Hardy',
    sourcebook: 'Character Options 1',
    page: 24,
    stats: {
      might: 4
    },
    skills: {
      trained: [
        'Might defense actions'
      ],
      inability: [
        'Any task involving initiative'
      ]
    },
    extras: [
      'Fast Healer: You halve the time it takes to make a recovery roll (minimum one action.)',
      'Unstoppable: While you are impaired, you function as if you were hale. While you are debilitated, you function as if you were impaired. In other words, you don\'t suffer the effects of being impaired until you become debilitated, and you never suffer the effects of being debilitated. You still die if all your stat pools are 0',
      'Ponderous: When you apply Effort when making a Speed roll, you must spend 1 extra point from your Speed Pool'
    ]
  },
  {
    name: 'Hideous',
    sourcebook: 'Character Options 1',
    page: 24,
    stats: {
      points: 4
    },
    skills: {
      trained: [
        'Intimidation and any other fear-based interactions',
        'Disguise and stealth tasks'
      ],
      inability: [
        'Pleasant social interactions'
      ]
    },
  },
  {
    name: 'Honorable',
    sourcebook: 'Character Options 1',
    page: 25,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'Pleasant social interactions',
        'Discerning people\'s true motives or seeing through lies'
      ],
    },
  },
  {
    name: 'Impulsive',
    sourcebook: 'Character Options 1',
    page: 25,
    stats: {
      speed: 2
    },
    skills: {
      trained: [
        'Initiative actions',
        'Speed defense actions'
      ],
      inability: [
        'Any task that involves patience, willpower, or discipline'
      ]
    },
  },
  {
    name: 'Inquisitive',
    sourcebook: 'Character Options 1',
    page: 25,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Any task that involves learning something new, whether you\'re talking to a local to get information or digging through old books to find lore ',
        'Any task involving geography or history'
      ],
      inability: [
        'Any task to hear or notice dangers around you',
        'Initiative actions'
      ]
    },
    equipment: [
      'Three books on whatever subjects you choose'
    ]
  },
  {
    name: 'Mad',
    sourcebook: 'Character Options 1',
    page: 26,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Numenera knowledge'
      ],
      inability: [
        'Resisting mental attacks'
      ]
    },
    extras: [
      'Fits of Insight: Whenever such knowledge is appropriate, the GM feeds you information although there is no clear explanation as to how you could know such a thing. This is up to the GM\'s discretion, but it should happen as often as once each session',
      'Erratic Behaviour: You are prone to acting erractically or irrationally. When you are in the presence of a major numenera discovery or subjected to great stress (such as a serious physical threat), the GM can use GM intrusion that directs your next action without awarding XP. You can still pay 1 XP to refuse the intrusion. The GM\'s influence is the manifestation of your madness and thus is always something you would likely not do otherwise, but it is not directly, obviously harmful to you unless there are extenuating circumstances. (For example, if a foe suddenly leaps out of the darkness, you might spend the first round babbling incoherently or screaming the name of your first true love.)'
    ]
  },
  {
    name: 'Naive',
    sourcebook: 'Character Options 1',
    page: 27,
    skills: {
      trained: [
        'Perception tasks',
        'Intellect defense tasks',
        'All tasks that involve resisting temptation'
      ],
      inability: [
        'Any task that involves seeing through deceptions or determining someone\'s secret motive'
      ]
    },
    extras: [
      'Fresh: You add +1 to your recovery rolls'
    ]
  },
  {
    name: 'Noble',
    sourcebook: 'Character Options 1',
    page: 27,
    shins: 20,
    skills: {
      trained: [
        'Etiquette and interacting with nobility'
      ],
    },
    equipment: [
      'One extra oddity'
    ],
    extras: [
      'Respect: People who are not of noble station often treat you with deference. A few, however, secretly treat you with contempt. The difficult of interactions with non-nobles is decreased by one step 75% of the time, and increase be one step 25% of the time',
      'Retainer or Mount: You start with a level 2 servant or mount that serves you faithfully. You and the GM should work out the details',
      'Contact: You have a contact among the nobility who helps you and treats you well. You and the GM should work out the details'
    ]
  },
  {
    name: 'Perceptive',
    sourcebook: 'Character Options 1',
    page: 28,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Any task that involves identifying objects or calling to mind a minor detail or bit of trivia',
        'Any task that involves finding or noticing small details',
        'Any task that involves intimidating another creature'
      ],
      inability: [
        'Any task involving positive social interactions'
      ]
    },
    equipment: [
      'A bag of light tools'
    ]
  },
  {
    name: 'Resilient',
    sourcebook: 'Character Options 1',
    page: 28,
    stats: {
      might: 2,
      intellect: 2
    },
    skills: {
      trained: [
        'Might defense tasks',
        'Intellect defense tasks'
      ],
      inability: [
        'Any task involving moving, bending, or breaking things',
        'Any task involving knowledge or figuring out problems or puzzles'
      ]
    },
    extras: [
      'Recover: You can make an extra recovery roll each day. This roll is just one action. So you can make two recovery rolls that each take one action, one roll that takes ten minutes, a fourth roll that takes one hour, and a fifth roll that requires ten hours of rest'
    ]
  },
  {
    name: 'Tongue-Tied',
    sourcebook: 'Character Options 1',
    page: 28,
    stats: {
      might: 2,
      speed: 2
    },
    skills: {
      trained: [
        'Perception',
        'Initiative'
      ],
      inability: [
        'All tasks relating to social interaction',
        'All tasks involving verbal communication or relaying information'
      ]
    },
  },
  {
    name: 'Vengeful',
    sourcebook: 'Character Options 1',
    page: 29,
    skills: {
      trained: [
        'Any task that involves intimidation, threats, or inflicting pain through torture',
        'Any task that involves finding and following tracks',
        'Speed defense actions'
      ]
    },
    equipment: [
      'One additional medium weapon'
    ]
  },
  {
    name: 'Wealthy',
    sourcebook: 'Character Options 1',
    page: 30,
    shins: 50,
    skills: {
      trained: [
        'Any task where having money would be an advantage'
      ]
    },
    extras: [
      'Connected: You have connections, resources, and a head for business. Whenever you spend at least an hour in a community with a population of 1,000 or more, you can find comfortable accommodations for you and your companions for as long as you stay there. The accommodations also provide you with food and 50 shins to spend in whatever manner you choose'
    ]
  },
  {
    name: 'Weird',
    sourcebook: 'Character Options 1',
    page: 30,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Numenera knowledge'
      ],
      inability: [
        'All tasks relating to pleasant social interaction'
      ]
    },
    extras: [
      'Distinctive Physical Quirk: You have a unique physical aspect that is, well, bizarre. For example, perhaps instead of hair, you hair metal spikes on your head. Perhaps your hands don\'t connect to your arms, although the move as if they do. Maybe a third eye stares out from the side of your head, superfluous tendrils grow from your back, or you have no nose. Whatever it is, your quirk might be a mutation, a biomechanical transformation, or a feature with no explanation',
      'A Sense for the Weird: Sometimes - at the GM\'s discretion - weird things relating to the numenera or its effects on the world seem to call out to you. You can sense them from afar, and if you get within long range of such a thing, you can sense whether it is overtly dangerous or not'
    ]
  },
  {
    name: 'Naven',
    sourcebook: 'Character Options 1',
    page: 31,
    stats: {
      intellect: 2
    },
    shins: 15,
    skills: {
      trained: [
        'All tasks involving the exchange of money',
        'Studying and retaining knowledge of numbers, patterns, and other minute details'
      ],
      inability: [
        'Any task involving climbing, jumping, running, or swimming'
      ]
    },
    equipment: [
      'A small box that looks like a book but opens only for the press of your right index finger'
    ],
    extras: [
      'Bartering: It\'s almost as though no one wants to part your money from you. Maybe it\'s your great smile, your kind word about the stock, or that little bit of fear you instill in the seller. Either way, you always pay half price for goods or services'
    ]
  },
  {
    name: 'Ghanic',
    sourcebook: 'Character Options 1',
    page: 32,
    skills: {
      trained: [
        'All tasks involving swimming, fishing, or fighting in water',
        'All tasks involving boats or watercraft of any kind',
        'Any tasks involving night-time navigation or map-reading'
      ],
      inability: [
        'Speed-related tasks while on dry land'
      ]
    },
    equipment: [
      'A small egg-shaped item that always smells of sea salt. When held in your right palm, the narrow end points the way to the nearest shore. When held in your left, it points the way towards the nearest fresh water'
    ],
    extras: [
      'Contact: You have many friends in watery places. One of your close contacts holds a high-ranking position in Ghan\'s merchant fleet'
    ]
  },
  {
    name: 'Draolic',
    sourcebook: 'Character Options 1',
    page: 33,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'All tasks that have the potential to bring you eminence. This includes competitions, feats of strength or combat, speeches, and other actions that catch the eye of others'
      ],
      inability: [
        'All tasks requiring perception, identification, or assessing danger'
      ]
    },
    equipment: [
      'A very carefully folded and very old flag that bears the forbidden tiger symbology of Draolis'
    ]
  },
  {
    name: 'Thaemic',
    sourcebook: 'Character Options 1',
    page: 33,
    stats: {
      intellect: 4
    },
    skills: {
      trained: [
        'Any task involving persuasion, sensing emotions, or getting a hunch about people around you',
        'Any task involving crafting'
      ]
    },
    equipment: [
      'A journal in which you record the patterns and connections that you have noticed throughout your life'
    ],
    extras: [
      'Idealistic: Your optimism about everything comes with a price. When things don\'t go as expected, you suffer great doubts that can hinder you. When any member of your party is impaired, the difficulty of every task you attempt is increased by one step'
    ]
  },
  {
    name: 'Malvic',
    sourcebook: 'Character Options 1',
    page: 34,
    stats: {
      might: 4
    },
    skills: {
      trained: [
        'Seeing through lies, deceptions, and disguise',
        'Might defense tasks'
      ],
      inability: [
        'Any task involving deception or persuasion'
      ]
    },
    extras: [
      'You have a numenera-based tattoo somehwere on your body that says Justice & Mercy in some form'
    ]
  },
  {
    name: 'Iscobean',
    sourcebook: 'Character Options 1',
    page: 34,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'All tasks involving glimmers and connecting with the datasphere',
        'All tasks involving identifying or understanding the numenera'
      ],
      inability: [
        'All tasks involving discerning reality, telling truth from lie, or seeing through disguises'
      ]
    },
    equipment: [
      'A numenera device that you attach to your head while you sleep. You believe that it helps you to understand your dream visions (or, alternatively, that it helps to block them.)'
    ],
    extras: [
      'Contact: You remain close friends with the explorer who once worked for Queen Whenith Sarromere'
    ]
  },
  {
    name: 'Pytharon',
    sourcebook: 'Character Options 1',
    page: 35,
    skills: {
      trained: [
        'All tasks involving recovery from disease, poison, or drugs',
        'All might defense tasks'
      ],
      inability: [
        'Initiative actions'
      ]
    },
    equipment: [
      'An additional weapon, probably something small and hidden, that has seen you through many battles'
    ],
    extras: [
      'Underdog: While you are impaired, you function as if you were hale. While you are debilitated, you function as if you were impaired. In other words, you don\'t suffer the effects of being impaired until you become debilitated, and you never suffer the effects of being debilitated. You still die if all your stat pools are 0'
    ]
  },
  {
    name: 'Milavian',
    sourcebook: 'Character Options 1',
    page: 36,
    stats: {
      points: 2
    },
    skills: {
      trained: [
        'Resisting mental effects',
        'One task of your choice'
      ],
    },
    equipment: [
      'A piece of paper rolled in a small metal tube. The paper stipulates that if you\'re ever captured and forced to live under someone else\'s rule, you want to be put to death'
    ]
  },
  {
    name: 'Ancuani',
    sourcebook: 'Character Options 1',
    page: 36,
    stats: {
      might: 4
    },
    skills: {
      trained: [
        'All noncombat tasks dealing with brute force, from breaking open doors to bending bars',
        'All social interaction tasks that deal with criminals, barbarians, and brutes (including abhumans.)'
      ],
      inability: [
        'All tasks involving attention to detail, concentration, or focused movements'
      ]
    },
    equipment: [
      'You wear a saw-toothed claw on a string around your neck'
    ]
  },
  {
    name: 'Ephrem',
    sourcebook: 'Character Options 1',
    page: 37,
    stats: {
      might: 2,
      speed: 2
    },
    skills: {
      trained: [
        'All tasks involving climbing, jumping, and balacing'
      ],
      inability: [
        'All tasks involving geology and geography'
      ]
    },
    equipment: [
      'A small statue of Falgreen to bring you luck and to keep you from the Last Great Fall'
    ],
    extras: [
      'Believer: You believe in the power of your god Falgreen to never let you fall. This faith is so strong that you can call upon it once per day to inspire you and give you +2 to your recovery roll'
    ]
  },
  {
    name: 'Bazian',
    sourcebook: 'Character Options 1',
    page: 37,
    stats: {
      intellect: 2
    },
    skills: {
      trained: [
        'Creating, repairing and communicating with automatons'
      ],
      inability: [
        'All tasks involving communication with humans, abhumans, and visitants'
      ]
    },
    equipment: [
      'An extra stash of spare parts and tools'
    ],
    extras: [
      'Connected: You understand the datasphere better than most (which still isn\'t very much), and once per day, you can tap into it and get the answer to a single question'
    ]
  },
  {
    name: 'Icebound',
    sourcebook: 'Character Options 1',
    page: 38,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'All noncombat tasks that involve snow or ice, including tracking, ice fishing, trekking, and geology',
        'All noncombat tasks involving vision, cinluding perception, long-range sight, and seeing in dark or smoky areas',
        'All noncombat tasks involving the use of fire, including creating, extinguishing, and controlling it'
      ],
      inability: [
        'All tasks attempted in hot weather, dry climates, wastelands, or deserts'
      ]
    },
    equipment: [
      'A mutated drakka companion that alerts you to impending weather changes'
    ]
  },
  {
    name: 'Wasteland',
    sourcebook: 'Character Options 1',
    page: 39,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'All noncombat tasks involving knowledge of area flora and fauna. This might include identifying and using plants, tracking prey, and finding potable water sources',
        'All actions involving initiative'
      ]
    },
    equipment: [
      'An oddity in the shape of a square rubber box that always has at least a spoonful of water in it, no matter how much you drink'
    ],
    extras: [
      'Solitary: Although you might enjoy the company of others, you\'re using to working alone. At least two members of your party must offer to assist you at the same time in order to decrease the difficulty of your task by one step'
    ]
  },
  {
    name: 'Diruk',
    sourcebook: 'Character Options 1',
    page: 40,
    edges: {
      might: 2
    },
    armour: 3,
    skills: {
      trained: [
        'Carrying and smashing things'
      ],
      inability: [
        'All speed tasks',
        'Tasks involving interacting with others in a pleasant manner',
        'Initiative tasks',
        'Running tasks',
        'Swimming tasks'
      ]
    },
    extras: [
      'Stone Body: +3 to Armor. However, you gain no benefit from wearing armour'
    ]
  },
  {
    name: 'Golthiar',
    sourcebook: 'Character Options 1',
    page: 41,
    armour: 1,
    skills: {
      trained: [
        'All tasks involving botany or geology',
        'All tasks that involve learning, decoding, or understanding languages',
        'All skills involving honest social interaction'
      ],
      inability: [
        'All tasks involving the use of initiative'
      ]
    },
    extras: [
      'Solar: Once per day, if the sun is shining, you may stand in direct sunlight as an action to restore 1 point to each of your stat Pools without a roll',
      'Blind: You are particularly sensitive to unexpected light. A flash of bright light from any source increases the difficulty of your next action by one step',
      'Deficient: Once every three days, you must take one hour to bury yourself in drit to receive the necessary nutrients from the soil. Doing so has no positive effect, but if you fail to do so, you lose 5 points from your Might Pool that day and each subsequent day until you take this action',
      'Aimless: If, for some reason, you have no purpose set before you - be it guarding something, scouting an area, or fighting for a higher goal - you begin to feel morose and lethargic. The difficulty of any task that doesn\'t move you toward finding a new purpose is increase by one step'
    ]
  },
  {
    name: 'Mlox',
    sourcebook: 'Character Options 1',
    page: 42,
    stats: {
      points: -2,
    },
    skills: {
      trained: [
        'MLOX: Speed defense tasks',
        'MLOX: Visual and auditory perception',
        'MLOX: Noncombat tasks pertaining to Speed and reflexes',
        'HUMAN: Deception, sneaking, and camouflage',
        'HUMAN: All tasks involving charm, persuasion, and etiquette',
        'HUMAN: All tasks requiring knowledge, memory, or lore'
      ],
      inability: [
        'MLOX: All tasks involving deception, sneaking, or camouflage',
        'MLOX: All tasks involving charm, persuasion, and etiquette',
        'MLOX: All tasks requiring knowledge, memory, or lore',
        'HUMAN: All noncombat tasks involving speed and perception'
      ]
    },
    equipment: [
      'One extra cypher above your normal allowance (to be chosen by the GM.)'
    ],
    extras: [
      'MLOX: Reflexive: +2 to your Speed Pool',
      'MLOX: Protected: When your third eye is open, you project a force screen around yourself, gaining 1 point of Armour. Enabler',
      'MLOX: Unaffected: While in Mloxan form, you may carry one extra cypher above your normal allowance. Upon returning to your human guise, your cypher allowance returns to normal'
    ]
  },
  {
    name: 'Nalarus',
    sourcebook: 'Character Options 1',
    page: 43,
    stats: {
      might: 2
    },
    skills: {
      trained: [
        'All stealth tasks',
        'All noncombat tasks that involve healing, poison, or disease',
        'Camouflage, deception, and intimidation'
      ],
      inability: [
        'All tasks relating to perception'
      ]
    },
    equipment: [
      'A face mask or hood',
      'A unique walking staff to assist you with your stooped appearance. It can also be used as a medium weapon'
    ],
    extras: [
      'Self-Healing: The disease you carry doesn\'t affect you the way that it does others. If you look at your own face in a highly reflective surface while healing, your disease gives you +1 to all recovery rolls',
      'Liability: Those fighting or taking other actions near you must take extra care not to catch a glimpse of your face. Anyone attempting a task within immediate range finds that the difficulty of that task is increased by one step'
    ]
  }
]

var types = [{
    name: "Glaive",
    sourcebook: "Numenera Corebook",
    extensions: [{
      sourcebook: "Character Options 1",
      page: 6,
      abilities: [
        'Danger Sense',
        'Fleet of Foot',
        'Goad',
        'Muscles of Iron',
        'Opportunist',
        'Overwatch',
        'Quick Draw',
        'Surging Confidence'
      ]
    }]
  },
  {
    name: "Jack",
    sourcebook: "Numenera Corebook",
    extensions: [{
      sourcebook: "Character Options 1",
      page: 14,
      abilities: [
        'Combat Ruse',
        'Decipher',
        'Gather Rumours',
        'Rope Trick',
        'Sabotage',
        'Tracer',
        'Vision'
      ]
    }]
  },
  {
    name: "Nano",
    sourcebook: "Numenera Corebook",
    extensions: [{
      sourcebook: "Character Options 1",
      page: 10,
      abilities: [
        'Aggression',
        'Distortion',
        'Erase Memories',
        'Far Step',
        'Machine Interface',
        'Mental Link',
        'Resonance Field',
        'Sculpt Flesh'
      ]
    }]
  },
]

var foci = [{
    name: 'Battles Automatons',
    sourcebook: 'Character Options 1',
    page: 51,
    equipment: [
      'Bits and pieces that you tore from the husks of automatons you have destroyed in the past'
    ],
    extras: [
      'Anti-Machine Esoteries: If you perform esoteries, those that inflict damage inflict 1 additional point of damage to automatons and similar beings, and 1 less point of damage to biological, living targets. If you have esoteries that normally would not work against automatons, they will function against your enemy'
    ]
  },
  {
    name: 'Consorts with the Dead',
    sourcebook: 'Character Options 1',
    page: 53,
    equipment: [
      'An innocuous memento of someone close to you who died. It might be a locket, a ring, a letter, a coin, or something similar'
    ],
    extras: [
      'Necromantic Esoteries: If you perform esoteries, those that would normally use force or other energy (such as electricity) instead use deathly energies. For example, your Flash esotery is a blast of cold, life-draining energy. This alteration changes nothing except that the type of damage is different, and it harms only living creatures'
    ]
  },
  {
    name: 'Constantly Evolves',
    sourcebook: 'Character Options 1',
    page: 55,
    equipment: [
      'A variety of dangerous substances that you carefully expose yourself to in order to further your mutations'
    ]
  },
  {
    name: 'Defends the Weak',
    sourcebook: 'Character Options 1',
    page: 56,
    equipment: [
      'A shield'
    ],
    extras: [
      'You have +1 to Armour while you are wielding a shield. Enabler'
    ]
  },
  {
    name: 'Exists in Two Places at Once',
    sourcebook: 'Character Options 1',
    page: 56,
    extras: [
      'Four Hands Are Better Than Two: When you and your duplicate work together to complete a task, the difficulty of that task is decreased by one step (if cooperation would be helpful)'
    ]
  },
  {
    name: 'Explores Deep Waters',
    sourcebook: 'Character Options 1',
    page: 57,
    oddities: [
      'A special oddity that, when fitted in your mouth, allows you to breathe underwater. The device functions for up to four hours at a time, after which you must wait four hours before you can use it again'
    ],
    extras: [
      'Water Esoteries: If you perform esoteries, those that would normally use force or other energy instead use water or ice. For example, Onslaught might create a wave of water that crashes down on your target. In addition, you can swap out one of the esoteries you learned for the following',
      'Create Water (2 Intellect points.) You cause water to bubble up from a spot on the ground you can see. The water flows from that spot for one minute, creating about 1 gallon (2.8 litres) by the time it stops'
    ]
  },
  {
    name: 'Fights Dirty',
    sourcebook: 'Character Options 1',
    page: 59,
    equipment: [
      'A weapon that is easily hidden',
      'A dose of level 3 poison that inflicts 6 points of damage'
    ]
  },
  {
    name: 'Focuses Two Personalities (Lattimor characters only)',
    sourcebook: 'Character Options 1',
    page: 60,
  },
  {
    name: 'Fuses Mind and Machine',
    sourcebook: 'Character Options 1',
    page: 61,
    artifacts: [
      'An artifact that protects your implants and enhancements from disruption or intrusion. The difficulty of resisting such attacks is decreased by one step'
    ]
  },
  {
    name: 'Hunts Abhumans',
    sourcebook: 'Character Options 1',
    page: 63,
  },
  {
    name: 'Hunts Mutants',
    sourcebook: 'Character Options 1',
    page: 64,
    equipment: [
      'A small collection of items, such as chemicals and nanites, that you believe aid you as you hunt and destroy mutants'
    ]
  },
  {
    name: 'Masters Insects',
    sourcebook: 'Character Options 1',
    page: 65,
    equipment: [
      'An oddity that makes random insect noises when you press a button'
    ]
  },
  {
    name: 'Metes Out Justice',
    sourcebook: 'Character Options 1',
    page: 66,
    equipment: [
      'A shield to help protect yourself and the innocents you find'
    ]
  },
  {
    name: 'Moves Like a Cat',
    sourcebook: 'Character Options 1',
    page: 68,
  },
  {
    name: 'Needs No Weapon',
    sourcebook: 'Character Options 1',
    page: 68,
  },
  {
    name: 'Never Says Die',
    sourcebook: 'Character Options 1',
    page: 70,
  },
  {
    name: 'Performs Feats of Strength',
    sourcebook: 'Character Options 1',
    page: 71,
    equipment: [
      'A heavy weapon'
    ]
  },
  {
    name: 'Possesses a Shard of the Sun',
    sourcebook: 'Character Options 1',
    page: 72,
    equipment: [
      'A crystal lens. When you shine the light through it, the light extends for double the normal distance'
    ],
    extras: [
      'Radiant Esoteries: If you perform esoteries, those that would normally use force or other energy instead use light and heat. For example, when you use Ward, light dapples your body and flares when you would be attacked, preventing your enemies from landing a solid blow'
    ]
  },
  {
    name: 'Reforges Completely (Varjellan characters only)',
    sourcebook: 'Character Options 1',
    page: 73,
  },
  {
    name: 'Sees Beyond',
    sourcebook: 'Character Options 1',
    page: 74,
    equipment: [
      'A single item of your choosing - drugs, lenses or a piece of numenera - that helps you perceive things that others cannot'
    ]
  },
  {
    name: 'Separates Mind from Body',
    sourcebook: 'Character Options 1',
    page: 75,
    oddities: [
      'An oddity that looks like a silvery ball, about 3 inches (7.6cm) in diameter. The ball\'s highly polished surface looks as if it reflects your surroundings, but examining its surface reveals it reflects the surroundings of another location, one you have not yet found. In the images shown on the ball, you have seen many strange and unsettling things'
    ],
    extras: [
      'Mental Esoteries: If you have the Mind Reading or Sensor edotery, you are automatically trained in it. If you have both, you are trained in both. Enabler'
    ]
  },
  {
    name: 'Siphons Power',
    sourcebook: 'Character Options 1',
    page: 77,
  },
  {
    name: 'Stands Like a Bastion',
    sourcebook: 'Character Options 1',
    page: 77,
    equipment: [
      'Armour of your choice',
      'A shield'
    ]
  },
  {
    name: 'Throws With Deadly Accuracy',
    sourcebook: 'Character Options 1',
    page: 78,
    equipment: [
      '3 throwing weapons of your choice'
    ]
  },
  {
    name: 'Travels Through Time',
    sourcebook: 'Character Options 1',
    page: 79,
    equipment: [
      '2 additional oddities'
    ],
    extras: [
      'Temporal Esoteries: If you perform esoteries, time appears to slow down when you use them. You and everything around you moves in slow motion for a moment, and then time snaps back into place. The temporal distortion changes nothing about the effects of your esoteries except for the appearance of the world around you'
    ]
  }
]

export {
  descriptors,
  foci,
}
