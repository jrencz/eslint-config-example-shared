const expectFunctionNames = [
  'expect()',
];

// @see https://github.com/tlvince/eslint-plugin-jasmine#rules
module.exports = {
  'jasmine/named-spy': 'error',
  'jasmine/no-focused-tests': process.env.CI ?
    'error' :
    'warn',
  'jasmine/no-disabled-tests': 'warn',
  'jasmine/no-suite-dupes': ['warn',
    'branch',
  ],
  'jasmine/no-spec-dupes': ['warn',
    'branch',
  ],
  'jasmine/missing-expect': ['error',
    // Extended config is used to allow adding framework and test type specific
    // expect() replacements
    ...expectFunctionNames,
  ],
  'jasmine/no-suite-callback-args': 'error',
  'jasmine/valid-expect': 'error',
  'jasmine/no-assign-spyon': 'error',
  'jasmine/no-unsafe-spy': 'error',
  'jasmine/no-global-setup': 'error',
  'jasmine/no-expect-in-setup-teardown': ['error',
    // Extended config is used to allow adding framework and test type specific
    // expect() replacements
    ...expectFunctionNames,
  ],
};
