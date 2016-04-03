import test from 'ava';

import punctuationMarks from '../../src/definitions/punctuationMarks';

test('A punctuation mark (string) should have a name (string)', t => {
  for (const punctuation of Object.keys(punctuationMarks)) {
    t.same(typeof punctuation, 'string');
    t.same(typeof punctuationMarks[punctuation], 'string');
  }
});
