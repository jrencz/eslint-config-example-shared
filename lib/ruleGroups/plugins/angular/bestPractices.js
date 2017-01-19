// @see https://github.com/Gillespie59/eslint-plugin-angular/blob/master/README.md#best-practices
module.exports = {
  'angular/component-limit': ['error',
    // Number of module parts
    4,
  ],

  // It's not worth to check if ui-router is used. This rule only works for
  // Angular $routeProvider
  'angular/controller-as-route': 'off',

  // It's not worth to check if ui-router is used. This rule only works for
  // Angular $routeProvider
  'angular/controller-as-vm': 'off',

  // Although this rule is named like it's named it checks if there are
  // assignments to $scope in controller which we want to disallow if
  // controllers are classes and we want to assign to context anyway.
  'angular/controller-as': 'error',
  'angular/deferred': 'error',

  // Core rule no-unused-vars will only find last unused variables in function
  // signature - that's why it's worth enabling this one.
  'angular/di-unused': 'error',
  'angular/directive-restrict': 'error',
  'angular/empty-controller': 'error',

  // We use ES Class as controllers and we expose them in DDO directly. We don't
  // use controller declaration since it's preferred to use components (and not
  // controller + template) in state declarations
  'angular/no-controller': 'error',

  // We do expose inline templates imported from HTML files with Webpack and
  // template is always a reference, not a literal. For such case this rule is
  // a noop anyway: https://github.com/Gillespie59/eslint-plugin-angular/blob/a6fa1a66b1a958a42d167c886372355b40648d1d/rules/no-inline-template.js#L28-L30
  'angular/no-inline-template': 'off',
  'angular/no-run-logic': 'error',

  // This rule is not yet granular enough. It only allows configuration on
  // module part (controller/filter/service) level which is not enough.
  // SEE: https://github.com/Gillespie59/eslint-plugin-angular/issues/373
  // SEE: https://github.com/Gillespie59/eslint-plugin-angular/issues/374
  'angular/no-services': 'off',
  'angular/on-watch': 'error',
  'angular/prefer-component': 'error',
};
