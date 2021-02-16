import type { Note } from 'easymidi'

import closeSymbol from '../symbols/close.js'
import restartSymbol from '../symbols/restart.js'

import COLOR from '../enums/color.js'
import LED_BUTTON from '../enums/led-button.js'

import type Spread from './spread.js'

export interface BaseState {
  buttonColor?: COLOR
  [closeSymbol]?: boolean
  [restartSymbol]?: boolean
}

type State<CustomState> = Spread<[BaseState, CustomState]>

export type MappingConfig<S> = {
  button: LED_BUTTON
  buttonUpColor?: COLOR
  buttonDownColor?: COLOR
  setup?: () => Promise<State<S>> | State<S>
  onButtonDown?: (state: State<S>, note: Note) => void
  onButtonUp?: (state: State<S>, note: Note) => void
  stateChanged?: (state: State<S>, key: string | number | symbol) => void
}

export default MappingConfig
