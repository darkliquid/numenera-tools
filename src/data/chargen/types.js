import { types as corebook } from './books/numenera-corebook'
import { types as co1 } from './books/character-options-1'

import combineExtensions from './utils'

export default combineExtensions([
    ...corebook,
    ...co1
])
