import uniq from 'lodash/uniq'

import types from './types';
import descriptors from './descriptors';
import foci from './foci';

export default uniq([
    ...(types.map(t => t.sourcebook)),
    ...(descriptors.map(t => t.sourcebook)),
    ...(foci.map(t => t.sourcebook)),
]).sort();