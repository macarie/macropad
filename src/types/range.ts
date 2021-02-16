import type NumbersTo from './numbers-to.js'

export type Range<From extends number, To extends number> =
  | Exclude<NumbersTo<To>, NumbersTo<From>>
  | From

export default Range
