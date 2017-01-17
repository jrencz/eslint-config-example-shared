// @see https://github.com/Gillespie59/eslint-plugin-angular/blob/master/README.md#possible-errors
module.exports = {
  // This config is prepared for ES modules.
  // Therefore it's not recommended to use module getters.
  // TODO: verify if rule has ['error', 'never'] option and enable
  // SEE: https://github.com/Gillespie59/eslint-plugin-angular/issues/436
  'angular/module-getter': 'off',

  // This config is prepared for ES modules.
  // Therefore it is recommended to assign Angular module to a variable and
  // export its name.
  // TODO: verify if rule has ['error', 'always'] option and enable
  // SEE: https://github.com/Gillespie59/eslint-plugin-angular/issues/436
  'angular/module-setter': 'off',

  'angular/no-private-call': 'error',
};
