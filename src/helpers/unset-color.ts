import { Output } from 'easymidi'

import LED_BUTTON from '../enums/led-button.js'

export const unsetColor = (device: Output, button: LED_BUTTON) => {
  device.send('noteoff', {
    note: button,
    velocity: 0,
    channel: 3,
  })
}

export default unsetColor
