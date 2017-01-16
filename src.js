const defaults = require('./lib/defaults');

module.exports = Object.assign({}, defaults, {
  parserOptions: Object.assign({}, defaults.parserOptions, {
    sourceType: 'module',
  }),
  env: Object.assign({}, defaults.env, {
    node: false,
    es6: true,
    browser: true,
  }),
});
