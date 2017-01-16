module.exports = {
  'init-declarations': 'off',
  'no-catch-shadow': 'off',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': 'off',
  'no-shadow-restricted-names': 'error',
  'no-shadow': 'off',
  'no-undef-init': 'error',
  'no-undef': 'error',
  'no-undefined': 'off',
  'no-unused-vars': ['error', {
    args: 'all',
    // If positional arguments are omitted they should be a double underscore
    // (or be prefixed with - in case of more than one)
    argsIgnorePattern: '^__',
  }],
  'no-use-before-define': 'off',
};
