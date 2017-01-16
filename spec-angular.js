const spec = require('./spec');

module.exports = Object.assign({}, spec, {
  plugins: [
    ...(spec.plugins || []),
    'angular',
  ],

  env: Object.assign({}, spec.env, {
    'angular/angular': true,
    'angular/mocks': true,
  }),
});
