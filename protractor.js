const testsPreset = require('./lib/presets/tests');

module.exports = Object.assign({}, testsPreset, {
  extends: [
    ...(testsPreset.extends || []),
    'plugin:protractor/recommended',
  ],

  plugins: [
    ...(testsPreset.plugins || []),
    'angular',
    'protractor',
  ],

  env: Object.assign({}, testsPreset.env || {}, {
    node: true,
    browser: false,
    jasmine: true,
    protractor: true,
    'angular/angular': true,
  }),
});
