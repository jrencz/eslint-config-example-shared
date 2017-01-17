require('json5/lib/require');

module.exports = {
  env: {
    es6: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017,
  },

  plugins: [
    'spellcheck',
  ],

  rules: Object.assign({}, ...[
    // Rules are divided into sections from http://eslint.org/docs/rules/
    require('../ruleGroups/core/possibleErrors'),
    require('../ruleGroups/core/bestPractices'),
    require('../ruleGroups/core/strictMode'),
    require('../ruleGroups/core/variables'),
    require('../ruleGroups/core/nodeJsAndCommonJS'),
    require('../ruleGroups/core/stylisticIssues'),
    require('../ruleGroups/core/ECMAScript6'),

    require('../ruleGroups/plugins/spellcheck'),
  ]),
};
