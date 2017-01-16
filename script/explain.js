#!/usr/bin/env node

console.log(
  [
    '',
    'Review new rules listed above!',
    'The objective is to explicitly turn each of them on or off.',
    '',
  ]
    .map(line => `\t${ line }`)
    .join('\n')
);

/* eslint-disable no-process-exit */
process.exit(1);
