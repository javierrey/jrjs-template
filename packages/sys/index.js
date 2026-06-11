// sys/index.js
// @ts-check

import { log, hydrate, sysConfig } from 'jrjs-shared/packages/lib/sys/sys.js';
import config from './config.jso.js';

const params = JSON.parse(process.argv.slice(2).at(-1) || '{}');

hydrate(sysConfig, params, config);

import('jrjs-shared/packages/lib/sys/run.js');

log.info(`sysConfig ${JSON.stringify(sysConfig, null, 2)}`);
