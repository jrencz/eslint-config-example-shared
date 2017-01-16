const defaults = require('./lib/defaults');

module.exports = Object.assign({}, defaults, {
  root: true,

  env: Object.assign({}, defaults.env, {
    node: true,
    es6: true,
    browser: false,
  }),
});
