import robot from 'robotjs'

import COLOR from '../enums/color.js'
import LED_BUTTON from '../enums/led-button.js'

import type MappingConfig from '../types/mapping-config.js'

robot.setKeyboardDelay(0)

export const wConfig: MappingConfig<Record<string, unknown>> = {
  button: LED_BUTTON.B4_Q2TL,
  buttonDownColor: COLOR.PINK,
  buttonUpColor: COLOR.PURPLE,
  onButtonDown: () => {
    robot.keyToggle('w', 'down')
  },
  onButtonUp: () => {
    robot.keyToggle('w', 'up')
  },
}

export default wConfig
