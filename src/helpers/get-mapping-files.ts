import { readdir } from 'fs/promises'

import LazyIterator from '@sweet-monads/iterator'

export const getMappingFiles = async (mappingsPath: string) =>
  LazyIterator.from(await readdir(mappingsPath))

export default getMappingFiles
