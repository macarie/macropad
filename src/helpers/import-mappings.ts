import { extname, join } from 'path'
import { pathToFileURL } from 'url'

import LazyIterator from '@sweet-monads/iterator'

import type MappingConfig from '../types/mapping-config.js'

export const importMappings = async (
  mappingsPath: string,
  mappingFiles: LazyIterator<string>
): Promise<
  Array<{
    default: MappingConfig<Record<string, unknown>>
  }>
> =>
  Promise.all(
    mappingFiles
      .filter((file) => extname(file) === '.js')
      .map(async (mapping) => {
        const moduleURL = pathToFileURL(join(mappingsPath, mapping)).toString()

        return import(moduleURL)
      })
      .collect()
  )

export default importMappings
