import test from 'ava';

import letters from '../../src/definitions/letters';

test('Greek alphabet has 24 letters', t => {
  t.same(Object.keys(letters).length, 24);
});

test('Greek alphabet letters should be strings', t => {
  for (const letter of Object.keys(letters)) {
    t.same(typeof letter, 'string');
  }
});

test('Letters map to alphabet & phonetic name that is a string', t => {
  for (const letter of Object.keys(letters)) {
    t.same(typeof letters[letter].letterName, 'string');
    t.same(typeof letters[letter].spellingName, 'string');
  }
});
