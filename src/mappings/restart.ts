import restartSymbol from '../symbols/restart.js'

import COLOR from '../enums/color.js'
import LED_BUTTON from '../enums/led-button.js'

import type MappingConfig from '../types/mapping-config.js'

export const closeConfig: MappingConfig<Record<string, unknown>> = {
  button: LED_BUTTON.LM,
  setup: async () => ({
    buttonColor: COLOR.PINK,
  }),
  onButtonDown: (state) => {
    console.log('restarting')
    state[restartSymbol] = true
  },
}

export default closeConfig
