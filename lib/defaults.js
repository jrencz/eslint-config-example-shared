require('json5/lib/require');

module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017,
  },

  plugins: [
    'spellcheck',
  ],

  rules: Object.assign({},
    // Rules are divided into sections from http://eslint.org/docs/rules/
    require('./ruleGroups/possibleErrors'),
    require('./ruleGroups/bestPractices'),
    require('./ruleGroups/strictMode'),
    require('./ruleGroups/variables'),
    require('./ruleGroups/nodeJsAndCommonJS'),
    require('./ruleGroups/stylisticIssues'),
    require('./ruleGroups/ECMAScript6'),
    require('./ruleGroups/plugins/spellcheck/spellchecker'),
    // Diff-friendliness hack. Waiting for last comma ;)
    {}
  ),
};
