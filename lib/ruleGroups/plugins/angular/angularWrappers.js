// @see https://github.com/Gillespie59/eslint-plugin-angular/blob/master/README.md#angular-wrappers
module.exports = {
  'angular/angularelement': 'off',
  'angular/definedundefined': 'off',
  'angular/document-service': 'error',
  'angular/foreach': 'off',
  'angular/interval-service': 'error',
  'angular/json-functions': 'off',

  // The `console` object is OK for debugging and development but if we want
  // something to be merged on master make it $log.
  'angular/log': process.env.CI ?
    'error' :
    'warn',
  'angular/no-angular-mock': 'off',
  'angular/no-jquery-angularelement': 'off',
  'angular/timeout-service': 'error',

  // We use lodash for type checking
  'angular/typecheck-array': 'off',
  'angular/typecheck-date': 'off',
  'angular/typecheck-function': 'off',
  'angular/typecheck-number': 'off',
  'angular/typecheck-object': 'off',
  'angular/typecheck-string': 'off',

  'angular/window-service': 'error',
};
