const path = require('path');
const findRoot = require('find-root');
const fs = require('fs');

const configPath = '../../../../config/spellcheck/';
const projectRoot = findRoot(process.cwd());

// Allow project-specific skipped words be defined in those modules:
const skipWordsPaths = [
  path.resolve(projectRoot, './skipWords.json'),
  path.resolve(projectRoot, './skipWords.json5'),
  path.resolve(projectRoot, './skipWords'),
  path.resolve(projectRoot, './config/spellcheck/skipWords.json'),
  path.resolve(projectRoot, './config/spellcheck/skipWords.json5'),
  path.resolve(projectRoot, './config/spellcheck/skipWords'),
];

const projectSkipWords = skipWordsPaths
  .reduce(
    (skipWords, path) => {
      try {
        const words = require(path);

        if (Array.isArray(words)) {
          return skipWords.concat(words);
        }

        return skipWords;
      } catch (__error) {
        return skipWords;
      }
    },
    []
  );

// If neither of conventional modules is used try reading the configuration from
// the package of a project that uses this shared config.
// Don't read package if it's not needed.
if (projectSkipWords.length === 0) {
  const pkg = require(path.resolve(projectRoot, './package.json'));

  if ('config' in pkg &&
    'spellcheckSkipWordsPath' in pkg.config &&
      fs.existsSync(path.resolve(pkg.config.spellcheckSkipWordsPath))
  ) {
    projectSkipWords.push(
      ...require(path.resolve(pkg.config.spellcheckSkipWordsPath))
    );
  }
}

const level = 'error';
const options = {
  skipWords: [
    ...require('text-extensions'),
    ...require('image-extensions'),
    ...require('html-tag-names'),
    ...require('html-attrs'),
    ...projectSkipWords,
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
