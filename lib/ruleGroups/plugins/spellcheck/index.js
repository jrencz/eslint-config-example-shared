const path = require('path');

const configPath = '../../../../config/spellcheck/';

const level = 'error';
const options = {
  skipWords: [
    ...require('text-extensions'),
    ...require('image-extensions'),
    ...require('html-tag-names'),
    ...require('html-attrs'),
    ...require(path.join(configPath, './skipWords/programmingJargon.json5')),
    ...require(path.join(configPath, './skipWords/toolsApi.json5')),
    ...require(path.join(configPath, './skipWords/dependencies')),
  ],
  skipIfMatch: require(path.join(configPath, './skipIfMatch/index.json5')),
  lang: 'en_US',
};

module.exports = {
  'spellcheck/spell-checker': [level, options],
};
