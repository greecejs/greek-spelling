import test from 'ava';

import numbers from '../../src/definitions/numbers';

test('There should be ten numbers', t => {
  t.is(Object.keys(numbers).length, 10);
});

test('A number (string) should have a name (string)', t => {
  for (const number of Object.keys(numbers)) {
    t.is(typeof number, 'string');
    t.is(typeof numbers[number], 'string');
  }
});
