# jrjs-template

A `jrjs-template` project.

Repo cloned fron `jrjs-template` repository, dependent on `jrjs` repository.

## Install and build

From the repo's root: `npm run rebuild`

Equivalent to running `npm run reinstall && npm run build`

Where `npm run reinstall` cleans and reinstalls all defined dependencies, including `jrjs`.

Then `npm run build` will clone shared source into the target folder via the `prebuild` command,
then copy and minify source from `packages` into the `dist` folder.

## Run

From the repo's root: `npm run start`. It will start the defined application, `npm run start:main` by default.

This will begin running `prebuild:main`, cloning imported and shared source code into the target application, `main`,
and then will trigger `main/sys/index.js`, configured by  default in `main/sys/config.js` to launch a server.

The source code can also be run without the need of a build, `npm run start:dev`, which will also run the `prebuild` command before starting.
