import closeSymbol from '../symbols/close.js'

import COLOR from '../enums/color.js'
import LED_BUTTON from '../enums/led-button.js'

import type MappingConfig from '../types/mapping-config.js'

export const closeConfig: MappingConfig<Record<string, unknown>> = {
  button: LED_BUTTON.LT,
  onButtonDown: (state) => {
    console.log('Closing the program 👋🏼')
    state[closeSymbol] = true
  },
}

export default closeConfig
