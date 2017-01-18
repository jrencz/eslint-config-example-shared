const index = require('./');

const [
  spellcheckLevel,
  spellcheckOptions,
] = index.rules['spellcheck/spell-checker'];

module.exports = Object.assign({}, index, {
  rules: Object.assign({}, index.rules, {
    'spellcheck/spell-checker': [spellcheckLevel,
      Object.assign({}, spellcheckOptions, {
        skipWords: [
          ...spellcheckOptions.skipWords,
          ...require('eslint-find-rules')().getAllAvailableRules(),
        ],
      }),
    ]
  })
});
