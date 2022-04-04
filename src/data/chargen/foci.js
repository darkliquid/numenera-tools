import { foci as corebook } from './books/numenera-corebook'
import { foci as guidebook } from './books/ninth-world-guidebook'
import { foci as rusthaven } from './books/rusthaven'
import { foci as co1 } from './books/character-options-1'
import { foci as co2 } from './books/character-options-2'
import { foci as destiny } from './books/numenera-destiny'
import { foci as torment } from './books/torment'

import combineExtensions from './utils'

export default combineExtensions([
  ...corebook,
  ...guidebook,
  ...rusthaven,
  ...co1,
  ...co2,
  ...destiny,
  ...torment
])
