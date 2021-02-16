import { Output } from 'easymidi'

import COLOR from '../enums/color.js'
import LED_BUTTON from '../enums/led-button.js'

export const setColor = (device: Output, button: LED_BUTTON, color: COLOR) => {
  device.send('noteon', {
    note: button,
    velocity: color,
    channel: 4,
  })
}

export default setColor
