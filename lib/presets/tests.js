require('json5/lib/require');

const defaults = require('./defaults');

const [
  spellCheckLevel,
  spellCheckOptions,
] = defaults.rules['spellcheck/spell-checker'];

const [
  maxLinesLevel,
  maxLinesOptions,
] = defaults.rules['max-lines'];

const [
  maxNestedCallbacksLevel,
  maxNestedCallbacksOptions,
] = defaults.rules['max-nested-callbacks'];

const [
  maxStatementsLevel,
  maxStatementsOptions,
] = defaults.rules['max-statements'];

const defaultOverrides = {
  'max-lines': [maxLinesLevel, Object.assign(maxLinesOptions, {
    max: 500,
  })],
  'max-nested-callbacks': [maxNestedCallbacksLevel,
    Object.assign(maxNestedCallbacksOptions, {
      max: 10,
    })],
  'max-statements': [maxStatementsLevel, Object.assign(maxStatementsOptions, {
    max: 20,
  })],

  'spellcheck/spell-checker': [spellCheckLevel,
    Object.assign(spellCheckOptions, {
      skipWords: [
        ...spellCheckOptions.skipWords,
        ...require('../../config/spellcheck/skipWords/tests.json5'),
      ],
    })],
};

module.exports = Object.assign({}, defaults, {
  plugins: [
    ...(defaults.plugins || []),
    'jasmine',
  ],

  rules: Object.assign({}, ...[
    defaults.rules,
    defaultOverrides,
    require('../ruleGroups/plugins/jasmine'),
  ]),
});
