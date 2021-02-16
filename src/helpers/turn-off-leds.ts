import LazyIterator from '@sweet-monads/iterator'

import type { Note, Output } from 'easymidi'

import COLOR from '../enums/color.js'
import LED_BUTTON from '../enums/led-button.js'

export const turnOffLEDs = (output: Output) => {
  LazyIterator.from(Object.values(LED_BUTTON))
    .filter((button) => typeof button === 'number')
    .forEach((button) => {
      output.send('noteoff', {
        note: button as LED_BUTTON,
        velocity: COLOR.OFF,
        channel: 3,
      } as Note)
    })
}

export default turnOffLEDs
