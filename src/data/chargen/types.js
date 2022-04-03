import { types as corebook } from './books/numenera-corebook'
import { types as co1 } from './books/character-options-1'
import { types as co2 } from './books/character-options-2'
import { types as destiny } from './books/numenera-destiny'

import combineExtensions from './utils'

export default combineExtensions([
    ...corebook,
    ...co1,
    ...co2,
    ...destiny
])
