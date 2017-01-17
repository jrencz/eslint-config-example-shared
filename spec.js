const tests = require('./lib/tests');

module.exports = Object.assign({}, tests, {
  env: Object.assign({}, tests.env, {
    node: false,
    browser: true,
    jasmine: true,
  }),
});
