import ObservableMembrane from 'observable-membrane'

import type { Input, Note, Output } from 'easymidi'

import identity from '../helpers/identity.js'

import COLOR from '../enums/color.js'

import type { BaseState, MappingConfig } from '../types/mapping-config.js'

export const createActions = async (
  mappings: Array<{ default: MappingConfig<Record<string, unknown>> }>,
  input: Input,
  output: Output,
  stateChangeHandler: Map<
    string | symbol | number,
    (
      target: BaseState,
      mapping: MappingConfig<Record<string, unknown>>,
      output: Output,
      input: Input
    ) => void
  >
) =>
  Promise.all(
    mappings.map(async ({ default: mapping }) => {
      const membrane = new ObservableMembrane({
        valueMutated: (target, key) => {
          stateChangeHandler.get(key)?.(target, mapping, output, input)

          mapping.stateChanged?.(target, key)
        },
      })
      const state = membrane.getProxy(
        await (mapping.setup?.() ?? identity(Promise.resolve({})))
      )

      if (Reflect.has(state, 'buttonColor')) {
        output.send('noteon', {
          note: mapping.button,
          velocity: state.buttonColor,
          channel: 3,
        })
      }

      if (Reflect.has(mapping, 'buttonUpColor')) {
        state.buttonColor = mapping.buttonUpColor
      }

      const noteOn = (note: Note) => {
        if (Reflect.has(mapping, 'buttonUpColor')) {
          state.buttonColor = COLOR.OFF
        }

        if (Reflect.has(mapping, 'buttonDownColor')) {
          state.buttonColor = mapping.buttonDownColor
        }

        mapping.onButtonDown?.(state, note)
      }

      const noteOff = (note: Note) => {
        if (Reflect.has(mapping, 'buttonDownColor')) {
          state.buttonColor = COLOR.OFF
        }

        if (Reflect.has(mapping, 'buttonUpColor')) {
          state.buttonColor = mapping.buttonUpColor
        }

        mapping.onButtonUp?.(state, note)
      }

      return [mapping.button, { noteOn, noteOff }]
    })
  )

export default createActions
