// sys/config.obj.js
// @ts-check

/**
@typedef {import('jrjs-shared/packages/lib/sys/sys.js').PlainObject} PlainObject;
@typedef {import('jrjs-shared/packages/lib/sys/cluster.js').ClusterConfig} ClusterConfig;
*/

/** @type {PlainObject & ClusterConfig} */
export default {
  clusterSize: 1, // 0, 1, 2, ... os.cpus().length
  base: '',
  apps: [
    {
      name: 'server',
      path: 'jrjs-shared/packages/lib/sys/server/run.js',
      primary: false,
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

// @remove test examples:
// http://localhost:3000/Users/reyj/home/projects/apps/js/jrjs-template/packages/view
// http://localhost:3000/Users/reyj/home/projects/apps/js/node-lab/www/plot-line-curve-svg/mathfun-svg/mathfun-svg.html
