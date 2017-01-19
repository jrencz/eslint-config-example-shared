const spec = require('./spec');

const angularExpectFunctionNames = [
  '$httpBackend.expect()',
  '$httpBackend.expectDELETE()',
  '$httpBackend.expectGET()',
  '$httpBackend.expectJSONP()',
  '$httpBackend.expectHEAD()',
  '$httpBackend.expectPATCH()',
  '$httpBackend.expectPOST()',
  '$httpBackend.expectPUT()',
];

const jasminePluginOverrides = {
  'jasmine/missing-expect': [
    ...spec.rules['jasmine/missing-expect'],
    ...angularExpectFunctionNames,
  ],
  'jasmine/no-expect-in-setup-teardown': [
    ...spec.rules['jasmine/no-expect-in-setup-teardown'],
    ...angularExpectFunctionNames,
  ],
};
const angularPluginOverrides = {
  // Conventions
  'angular/dumb-inject': 'error',
  'angular/watchers-execution': ['error',
    '$digest',
  ],

  // Angular Wrappers

  // For debugging purposes console.log may be used in tests
  'angular/log': 'off',
};

module.exports = Object.assign({}, spec, {
  plugins: [
    ...(spec.plugins || []),
    'angular',
  ],

  env: Object.assign({}, spec.env, {
    'angular/angular': true,
    'angular/mocks': true,
  }),

  rules: Object.assign({}, spec.rules, ...[
    jasminePluginOverrides,
    angularPluginOverrides,
  ]),
});
