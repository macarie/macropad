# macropad

> Small utility that translates MIDI events to custom actions.

Built for personal use and, as is, only compatible with the [MIDI Fighter 3D](https://store.djtechtools.com/products/midi-fighter-3d).

If you want to try it out, at your own risk, just clone or fork the repository and create some mapping files inside `./src/mappings`. To use it with other MIDI controllers it should be enough to change the channel on which notes are sent (`./src/initialize-mappings.ts`) and the enums (`./src/enums/color.ts` and `./src/enums/led-button`).

Run the program with

```bash
$ npm run start
```
