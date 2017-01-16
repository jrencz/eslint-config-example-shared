const defaults = require('./defaults');

module.exports = Object.assign({}, defaults, {
  extends: [
    ...(defaults.extends || []),
    'plugin:protractor/recommended',
  ],

  plugins: [
    ...(defaults.plugins || []),
    'angular',
    'jasmine',
    'protractor',
  ],

  env: Object.assign({}, defaults.env || {}, {
    node: false,
    browser: true,
    jasmine: true,
    protractor: true,
    'angular/angular': true,
  }),
});
