const defaults = require('./lib/presets/defaults');

module.exports = Object.assign({}, defaults, {
  parserOptions: Object.assign({}, defaults.parserOptions, {
    sourceType: 'module',
  }),

  env: Object.assign({}, defaults.env, {
    node: false,
    browser: true,
  }),
});
