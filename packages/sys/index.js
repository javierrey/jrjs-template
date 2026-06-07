// sys/index.js
// _@ts-check

/**
@typedef {import('jrjs-shared/packages/lib/sys/sys.js').SysConfig} SysConfig;
*/

import { sysConfig, hydrate, log } from 'jrjs-shared/packages/lib/sys/sys.js';

const params = JSON.parse(process.argv.slice(2).at(-1) || '{}');

// import config from './index.json' with { type: 'json' };
// const config = await import('./index.json', { assert: { type: 'json' } });
// log.warn(`config !!!!!!`, JSON.stringify(config, null, 2)); process.exit(0);

/** @type {SysConfig} */
const config = {
  workersSize: 1, // 0, 1, 2, ... os.cpus().length
  base: '',
  apps: [
    {
      name: 'server',
      path: 'jrjs-shared/packages/lib/sys/server/run.js',
      primaryOnly: false,
      requires: [],
      state: {},
      config: {
        port: 3000,
        publicDir: '../view',
        privateDir: '../../_ignore/store',
      },
    },
  ],
};

hydrate(sysConfig, params, config);

// http://localhost:3000/Users/reyj/home/projects/apps/js/jrjs-template/packages/view
// http://localhost:3000/Users/reyj/home/projects/apps/js/node-lab/www/plot-line-curve-svg/mathfun-svg/mathfun-svg.html
import('jrjs-shared/packages/lib/sys/run.js');
