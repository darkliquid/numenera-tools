import { descriptors as corebook } from './books/numenera-corebook'
import { descriptors as guidebook } from './books/ninth-world-guidebook'
import { descriptors as rusthaven } from './books/rusthaven'
import { descriptors as co1 } from './books/character-options-1'
import { descriptors as co2 } from './books/character-options-2'

import combineExtensions from './utils'

export default combineExtensions([
  ...corebook,
  ...guidebook,
  ...rusthaven,
  ...co1,
  ...co2
])
