import { Input, Output, getInputs, getOutputs } from 'easymidi'
import LazyIterator from '@sweet-monads/iterator'

import config from './config.js'
import createDeviceFinder from './helpers/create-device-finder.js'

import initializeMappings from './initialize-mappings.js'

const inputDeviceFinder = createDeviceFinder(config.inputDevice)
const outputDeviceFinder = createDeviceFinder(config.outputDevice)

const inputDevice = LazyIterator.from(getInputs()).find((d) =>
  inputDeviceFinder(d)
)
const outputDevice = LazyIterator.from(getOutputs()).find((d) =>
  outputDeviceFinder(d)
)

const foundInputAndOutput = inputDevice.isNone() || outputDevice.isNone()

if (foundInputAndOutput) {
  const errorMessages: string[] = ['\n']

  if (inputDevice.isNone()) {
    errorMessages.push(
      `There are no MIDI input devices containing "${
        config.inputDevice
      }" in their name, the list of available devices is: ${getInputs().join(
        ', '
      )}.`
    )
  }

  if (outputDevice.isNone()) {
    errorMessages.push(
      `There are no MIDI output devices containing "${
        config.outputDevice
      }" in their name, the list of available devices is: ${getOutputs().join(
        ', '
      )}.`
    )
  }

  errorMessages.push('')

  throw new Error(errorMessages.join(`\n${' '.repeat(2)}`))
}

const input = new Input(inputDevice.value!)
const output = new Output(outputDevice.value!)

void initializeMappings(input, output)
