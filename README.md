# eslint-config-example-shared

Example and starter of how to handle sharable ESLint configuration

## Extendable presets

This project has several configs. They are prepared to be used in different
setups:

### Root
Use as:
```json
{
  "extends": [
    "example-shared"
  ]
}
```

Can be found in: [`index.js`](./index.js)

This preset sets the node project root. It also adds rules from
[`eslint-plugin-spellcheck`](https://www.npmjs.com/package/eslint-plugin-spellcheck)
It uses [`babel-eslint`](https://www.npmjs.com/package/babel-eslint) as parser
which allows using latest babel features.


### Sources
Use as:
```json
{
  "extends": [
    "example-shared/src"
  ]
}
```

Can be found in: [`src.js`](./src.js)

This preset is suitable for application sources. It states that those are
modules and they are run in a browser. It assumes nothing about the framework.

### Unit tests
```json
{
  "extends": [
    "example-shared/src"
  ]
}
```

Can be found in [`spec.js`](./spec.js)

### Framework-specific configs

#### Angular

##### Sources
Use as:
```json
{
  "extends": [
    "example-shared/src-angular"
  ]
}
```

Can be found in: [`src-angular.js`](./src-angular.js)

This preset is suitable for applications written in Angular 1.
It adds rules from [`eslint-plugin-angular`](https://www.npmjs.com/package/eslint-plugin-angular)

##### Unit tests
```json
{
  "extends": [
    "example-shared/spec-angular"
  ]
}
```

Can be found in: [`src-angular.js`](./src-angular.js)

This preset is suitable for tests of applications written in Angular 1.
It adds rules from [`eslint-plugin-angular`](https://www.npmjs.com/package/eslint-plugin-angular)
and [`eslint-plugin-jasmine`](https://www.npmjs.com/package/eslint-plugin-jasmine)

##### End-to-End tests
```json
{
  "extends": [
    "example-shared/protractor"
  ]
}
```

Can be found in: [`protractor.js`](./protractor.js)

This preset is suitable for protractor tests of applications written in
Angular 1. It adds rules from [`eslint-plugin-protracotr`](https://www.npmjs.com/package/eslint-plugin-protractor)
and [`eslint-plugin-jasmine`](https://www.npmjs.com/package/eslint-plugin-jasmine)
