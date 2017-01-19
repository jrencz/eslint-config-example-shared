const bestPractices = require('./bestPractices');

// @see https://github.com/Gillespie59/eslint-plugin-angular/blob/master/README.md#deprecated-angular-features
module.exports = {
  'angular/no-cookiestore': 'error',

  // It's not worth using this option in case `component` is preferred
  // over element directive
  'angular/no-directive-replace':
    bestPractices['angular/prefer-component'] === 'error' ?
      'off' :
      'error',
  'angular/no-http-callback': 'error',
};
