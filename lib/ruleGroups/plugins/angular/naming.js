const dependentPkg = require(`${ process.cwd() }/package.json`);

/**
 * Finds or generates prefix from package data of the package that uses this
 * shared config.
 *
 * @param {string} entity - one of possible angular module parts (service,
 * component, filter etc.) or 'module'
 * @param {Object} pkg - read from package.json. Used to find prefix data in.
 *
 * @returns {string}
 */
const readPrefix = (entity, pkg) => {
  // Custom configuration in package.json
  if ('config' in pkg && 'angularPrefix' in pkg.config) {
    return typeof pkg.config.angularPrefix === 'string' ?
      pkg.config.angularPrefix :
      pkg.config.angularPrefix[entity];
  }

  // Example: my-awesome-package -> map
  if (pkg.name.includes('-')) {
    return pkg
      .name
      .split('-')
      .map(string => string[0])
      .join('');
  }

  return pkg.name;
};

const getNamingRuleConfigFor = (entity, pkg) => {
  switch (entity) {
    case 'controller':
      return '/^[A-Z].*Ctrl/';
    case 'module':
      return `/^${ readPrefix(entity, pkg) }\\./`;
    default:
      return `/^${ readPrefix(entity, pkg) }/`;
  }
};

const noControllerEnabled =
  require('./bestPractices')['angular/no-controller'] !== 'off';

// // @see https://github.com/Gillespie59/eslint-plugin-angular/blob/master/README.md#naming
module.exports = {
  'angular/component-name': ['error',
    getNamingRuleConfigFor('component', dependentPkg),
  ],
  'angular/constant-name': 'off',
  'angular/controller-name': noControllerEnabled ?
    'off' :
    ['error', getNamingRuleConfigFor('controller', dependentPkg)],
  'angular/directive-name': ['error',
    getNamingRuleConfigFor('directive', dependentPkg),
  ],
  'angular/factory-name': 'off',
  'angular/file-name': 'off',
  'angular/filter-name': 'off',
  'angular/module-name': ['error',
    getNamingRuleConfigFor('module', dependentPkg),
  ],
  'angular/service-name': 'off',
  'angular/valuee-name': 'off',
};
