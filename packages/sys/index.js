// sys/index.js
// @ts-check

globalThis.globalConfig = {
  processConfig: {
    workerId: NaN,
    workersSize: 1, // 0, 1, 2, ... os.cpus().length
    primaryApps: [],
    workerApps: ['jrjs-shared/packages/lib/sys/server/run.js'],
    ...JSON.parse(process.argv.slice(2).at(-1) || '{}'),
  },
};

import('jrjs-shared/packages/lib/sys/run.js');
