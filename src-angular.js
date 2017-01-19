const src = require('./src');

// TODO: check if we have to manually extend `src`
// Maybe it's enough just to use it as
// ```json
// {
//   "extends": [
//     "example-shared/src",
//     "example-shared/src-angular"
//   ],
// }
// ```
module.exports = Object.assign({}, src, {
  plugins: [
    ...(src.plugins || []),
    'angular',
  ],

  env: Object.assign({}, src.env, {
    'angular/angular': true,
  }),

  rules: Object.assign({}, src.rules, ...[
    // Rules are divided into sections from https://github.com/Gillespie59/eslint-plugin-angular#rules
    require('./lib/ruleGroups/plugins/angular/possibleErrors'),
    require('./lib/ruleGroups/plugins/angular/bestPractices'),
    require('./lib/ruleGroups/plugins/angular/deprecatedAngularFeatures'),
    require('./lib/ruleGroups/plugins/angular/naming'),
    require('./lib/ruleGroups/plugins/angular/conventions'),
    require('./lib/ruleGroups/plugins/angular/angularWrappers'),
    require('./lib/ruleGroups/plugins/angular/misspelling'),
  ]),
});
