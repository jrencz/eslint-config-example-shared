// @see https://github.com/Gillespie59/eslint-plugin-angular/blob/master/README.md#conventions
module.exports = {
  'angular/di-order': ['error',
    // Strip underscores
    false,
    'case_insensitive',
  ],
  'angular/di': ['error',
    'function',
  ],

  // It's enabled in test environment
  'angular/dumb-inject': 'off',
  'angular/function-type': ['error',
    'named',
  ],
  'angular/module-dependency-order': ['error', {
    grouped: false,
  }],
  'angular/no-service-method ': 'off',
  'angular/one-dependency-per-line': 'error',
  'angular/rest-service': ['error',
    '$http',
  ],
  'angular/watchers-execution': ['error',
    '$apply',
  ],
};
