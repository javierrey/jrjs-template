// sys/index.js
// _@ts-check

import { globalState, hydrate } from 'jrjs-shared/packages/lib/sys/sys.js';

const defaults = {
  workerId: NaN,
  processConfig: {
    workersSize: 1, // 0, 1, 2, ... os.cpus().length
    primaryApps: [],
    workerApps: ['jrjs-shared/packages/lib/sys/server/run.js'],
    ...JSON.parse(process.argv.slice(2).at(-1) || '{}'),
  },
  serverConfig: {
    port: 3000,
  },
};

hydrate(globalState, defaults);

// http://localhost:3000/Users/reyj/home/projects/apps/js/jrjs-template/packages/view
// http://localhost:3000/Users/reyj/home/projects/apps/js/node-lab/www/plot-line-curve-svg/mathfun-svg/mathfun-svg.html
import('jrjs-shared/packages/lib/sys/run.js');
