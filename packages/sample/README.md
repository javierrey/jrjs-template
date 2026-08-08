# Package sample

Package sample. A default sample application consuming repo `jrjs` dependency.

## Install and build

`npm run rebuild`

Equivalent to running `npm run reinstall && npm run build`

Where `npm run reinstall` cleans and reinstalls all defined dependencies, including `jrjs`.

## Run

From the repo's top level:

`npm run start`

It will prebuild and run `sample/sys/index.js`, launching a server, as configured in `sample/sys/config.js` by default.

The source code can also be run without the need of a build:

`npm run start:dev`
