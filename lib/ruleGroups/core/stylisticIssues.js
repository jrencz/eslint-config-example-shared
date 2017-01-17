// @see http://eslint.org/docs/rules/#stylistic-issues
module.exports = {
  'array-bracket-spacing': ['error',
    'never',
  ],
  'block-spacing': ['error',
    'never',
  ],
  'brace-style': 'error',
  camelcase: 'off',
  'capitalized-comments': ['error',
    'always',
    {
      ignoreConsecutiveComments: true,
    },
  ],
  'comma-dangle': ['error',
    'always-multiline',
  ],
  'comma-spacing': 'error',
  'comma-style': 'error',
  'computed-property-spacing': ['error',
    'never',
  ],
  'consistent-this': 'off',
  'eol-last': 'error',
  'func-call-spacing': ['error',
    'never',
  ],
  'func-name-matching': ['error', 'always'],
  'func-names': 'off',
  'func-style': ['error',
    'expression',
  ],
  'id-blacklist': ['error',
    /* eslint-disable spellcheck/spell-checker */
    'str',
    'arr',
    'num',
    'err',
    'e',
    'cb',
    'callback',
    'evt',
    /* eslint-enable spellcheck/spell-checker */
  ],
  'id-length': 'off',
  'id-match': 'off',
  indent: ['error',
    // 2 spaces
    2,
    {
      // # of units defined above
      SwitchCase: 1,
    },
  ],
  'jsx-quotes': 'off',
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  'line-comment-position': ['error', {
    position: 'above',
  }],
  'linebreak-style': 'off',
  'lines-around-comment': ['error', {
    beforeBlockComment: true,
    beforeLineComment: true,
    allowBlockStart: true,
    allowBlockEnd: false,
    allowObjectStart: true,
    allowObjectEnd: false,
    allowArrayStart: true,
    allowArrayEnd: false,
  }],
  'lines-around-directive': ['error',
    'always',
  ],
  'max-depth': 'error',
  'max-len': ['error',
    // Line length
    80,

    // Tab size
    2,
    {
      ignoreComments: true,
      ignoreUrls: true,
    },
  ],
  'max-lines': ['error', {
    max: 200,
    skipBlankLines: true,
    skipComments: true,
  }],
  'max-nested-callbacks': ['error', {
    max: 5,
  }],

  // It's off because it's not possible to use Angular with this setting
  // See: https://github.com/Gillespie59/eslint-plugin-angular/issues/381
  'max-params': 'off',
  'max-statements-per-line': ['error', {
    max: 1,
  }],
  'max-statements': ['error', {
    max: 10,
  }],
  'multiline-ternary': 'error',
  'new-cap': 'error',
  'new-parens': 'error',
  'newline-after-var': 'error',
  'newline-before-return': 'error',
  'newline-per-chained-call': ['error', {
    ignoreChainWithDepth: 2,
  }],
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-continue': 'off',
  'no-inline-comments': 'error',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multiple-empty-lines': ['error', {
    max: 2,
    maxEOF: 1,
  }],
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-plusplus': 'off',
  'no-restricted-syntax': 'off',
  'no-tabs': 'error',
  'no-spaced-func': 'error',
  'no-ternary': 'off',
  'no-trailing-spaces': 'error',
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': 'error',
  'no-whitespace-before-property': 'error',

  // TODO: review when https://github.com/eslint/eslint/issues/6488 is resolved.
  'object-curly-newline': 'off',
  'object-curly-spacing': ['error',
    'never',
  ],
  'object-property-newline': 'off',
  'one-var-declaration-per-line': ['error',
    'always',
  ],
  'one-var': ['error',
    'never',
  ],
  'operator-assignment': 'error',
  'operator-linebreak': 'off',

  // TODO Figure out why it doesn't work
  'padded-blocks': 'off',
  'quote-props': ['error',
    'as-needed',
  ],
  quotes: ['error',
    'single',
  ],
  'require-jsdoc': ['error', {
    require: {
      MethodDefinition: true,
      ClassDeclaration: true,
      FunctionDeclaration: false,
      ArrowFunctionExpression: false,
    },
  }],
  'semi-spacing': 'error',
  semi: 'error',

  // It's not useful to sort object literal keys alphabetically. They should be
  // sorted by according to the meaning of property in the object literal.
  'sort-keys': 'off',

  // It's not useful to sort variables alphabetically. They should be
  // sorted/grouped by according to the meaning.
  'sort-vars': 'off',
  'space-before-blocks': 'error',
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
  }],
  'space-in-parens': ['error',
    'never',
  ],
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'spaced-comment': 'error',
  'unicode-bom': ['error',
    'never',
  ],
  'wrap-regex': 'off',
};