require('json5/lib/require');

const defaults = require('./defaults');

const [
  commonSpellCheckReportingLevel,
  commonSpellCheckOptions,
] = defaults.rules['spellcheck/spell-checker'];

module.exports = Object.assign({}, defaults, {
  rules: Object.assign({}, defaults.rules, {
    'spellcheck/spell-checker': [commonSpellCheckReportingLevel,
      Object.assign(commonSpellCheckOptions, {
        skipWords: [
          ...commonSpellCheckOptions.skipWords,
          ...require('../config/spellcheck/skipWords/tests.json5'),
        ],
      })],
  }),
});
