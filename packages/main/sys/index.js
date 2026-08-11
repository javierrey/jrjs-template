// sys/index.js
// @ts-check

import { log, hydrate, jsonParse, sysConfig } from 'jrjs/packages/lib/sys/sys.js';
import { dummySharedMethod } from '../core/shared.js';
import config from './config.js';

const params = jsonParse(process.argv.slice(2).at(-1) || '{}');

hydrate(sysConfig, params, config, { shared: dummySharedMethod(1, 2, 3) });

import('jrjs/packages/lib/sys/run.js');

log.info(`sysConfig ${JSON.stringify(sysConfig, null, 2)}`);
