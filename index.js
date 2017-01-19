const defaults = require('./lib/presets/defaults');

module.exports = Object.assign({}, defaults, {
  root: true,

  env: Object.assign({}, defaults.env, {
    node: true,
    browser: false,
  }),
});
