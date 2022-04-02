import { foci as corebook } from './books/numenera-corebook'
import { foci as guidebook } from './books/ninth-world-guidebook'
import { foci as rusthaven } from './books/rusthaven'
import { foci as co1 } from './books/character-options-1'
import { foci as co2 } from './books/character-options-2'

import combineExtensions from './utils'

export default combineExtensions([
  ...corebook,
  ...guidebook,
  ...rusthaven,
  ...co1,
  ...co2
])
