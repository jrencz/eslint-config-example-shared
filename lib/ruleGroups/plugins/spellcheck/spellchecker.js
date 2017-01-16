const path = require('path');

const config = '../../../../config/spellcheck/';

module.exports = {
  'spellcheck/spell-checker': ['error', {
    skipWords: [
      ...require('text-extensions'),
      ...require('image-extensions'),
      ...require('html-tag-names'),
      ...require('html-attrs'),
      ...require('eslint-find-rules')().getAllAvailableRules(),
      ...require(path.join(config, './skipWords/programmingJargon.json5')),
      ...require(path.join(config, './skipWords/toolsApi.json5')),
      ...require(path.join(config, './skipWords/dependencies')),
    ],
    skipIfMatch: require(path.join(config, './skipIfMatch/index.json5')),
    lang: 'en_US',
  }],
};
