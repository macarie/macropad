import robot from 'robotjs'

import COLOR from '../enums/color.js'
import LED_BUTTON from '../enums/led-button.js'

import type MappingConfig from '../types/mapping-config.js'

robot.setKeyboardDelay(0)

export const aConfig: MappingConfig<Record<string, unknown>> = {
  button: LED_BUTTON.B4_Q1BR,
  buttonDownColor: COLOR.PINK,
  buttonUpColor: COLOR.PURPLE,
  onButtonDown: () => {
    robot.keyToggle('a', 'down')
  },
  onButtonUp: () => {
    robot.keyToggle('a', 'up')
  },
}

export default aConfig
