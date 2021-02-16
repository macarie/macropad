import LazyIterator from '@sweet-monads/iterator'

import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

import type { Input, Note, Output } from 'easymidi'

import getMappingFiles from './helpers/get-mapping-files.js'
import importMappings from './helpers/import-mappings.js'
import createActions from './helpers/create-actions.js'

import turnOffLEDs from './helpers/turn-off-leds.js'
import wait from './helpers/wait.js'

import closeSymbol from './symbols/close.js'
import restartSymbol from './symbols/restart.js'

import COLOR from './enums/color.js'

import type { BaseState, MappingConfig } from './types/mapping-config.js'

const stateChangeHandler = new Map<
  string | symbol | number,
  (
    target: BaseState,
    mapping: MappingConfig<Record<string, unknown>>,
    output: Output,
    input: Input
  ) => void
>()

stateChangeHandler.set('buttonColor', (target, mapping, output) => {
  if (target.buttonColor === COLOR.OFF) {
    output.send('noteoff', {
      note: mapping.button,
      velocity: COLOR.OFF,
      channel: 3,
    } as Note)
  } else {
    output.send('noteon', {
      note: mapping.button,
      velocity: target.buttonColor,
      channel: 3,
    } as Note)
  }
})

stateChangeHandler.set(closeSymbol, async (target, mapping, output, input) => {
  if (target[closeSymbol] === true) {
    turnOffLEDs(output)

    await wait(1)

    output.close()
    input.close()
  }
})

export const initializeMappings = async (
  input: Input,
  output: Output
): Promise<void> => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const mappingsPath = join(__dirname, './mappings/')

  let mappingFiles = await getMappingFiles(mappingsPath)
  let mappings = await importMappings(mappingsPath, mappingFiles)

  let actions = await createActions(mappings, input, output, stateChangeHandler)

  const actionsMap = new Map()

  actions.forEach(([name, action]) => actionsMap.set(name, action))

  stateChangeHandler.set(
    restartSymbol,
    async (target, mapping, output, input) => {
      // Doesn't work, modules are cached
      if (target[restartSymbol] === true) {
        execSync('npm run compile:library')
        turnOffLEDs(output)

        await wait(1)

        mappingFiles = await getMappingFiles(mappingsPath)
        mappings = await importMappings(mappingsPath, mappingFiles)

        actions = await createActions(
          mappings,
          input,
          output,
          stateChangeHandler
        )

        actionsMap.clear()

        actions.forEach(([name, action]) => actionsMap.set(name, action))
      }
    }
  )

  input.on('noteon', (message) => {
    actionsMap.get(message.note)?.noteOn(message)
  })

  input.on('noteoff', (message) => {
    actionsMap.get(message.note)?.noteOff(message)
  })
}

export default initializeMappings
