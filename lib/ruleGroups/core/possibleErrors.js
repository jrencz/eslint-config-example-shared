// @see http://eslint.org/docs/rules/#possible-errors
module.exports = {
  'no-await-in-loop': 'error',
  'no-cond-assign': 'error',
  'no-console': 'off',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty-character-class': 'error',
  'no-empty': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-parens': 'off',
  'no-extra-semi': 'error',
  'no-func-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-negated-in-lhs': 'error',
  'no-obj-calls': 'error',

  // Not used because we do have Maps, Object.create(null) is not used
  'no-prototype-builtins': 'off',
  'no-regex-spaces': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-unexpected-multiline': 'off',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'use-isnan': 'error',

  // Due to the fact that this rule does not handle named params with
  // object destructuring pattern (i.e. ({foo, bar}) => {}) and reports
  // an error it's left as a warning.
  'valid-jsdoc': ['warn', {
    requireReturnDescription: false,
    requireParamDescription: false,
    prefer: {
      return: 'returns',
    },
    preferType: {
      string: 'string',
      number: 'number',
      object: 'object',
      array: 'Array',
      promise: 'Promise',
    },
  }],
  'valid-typeof': 'error',
};
