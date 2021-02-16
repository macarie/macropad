import type NumbersTo from './numbers-to.js'
import type Range from './range.js'
import type LEDs from './leds.js'

export type Buttons = NumbersTo<3> | Range<20, 25> | LEDs

export default Buttons
