import robot from 'robotjs'

import COLOR from '../enums/color.js'
import LED_BUTTON from '../enums/led-button.js'

import type MappingConfig from '../types/mapping-config.js'

robot.setKeyboardDelay(0)

export const bConfig: MappingConfig<Record<string, unknown>> = {
  button: LED_BUTTON.B4_Q3BR,
  buttonDownColor: COLOR.GREEN,
  buttonUpColor: COLOR.CHARTREUSSE,
  onButtonDown: () => {
    robot.keyToggle('b', 'down')
  },
  onButtonUp: () => {
    robot.keyToggle('b', 'up')
  },
}

export default bConfig
