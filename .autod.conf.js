'use strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
  ],
  devdep: [
    'autod',
    'egg',
    'egg-bin',
    'eslint',
    'eslint-config-egg',
  ]
};
