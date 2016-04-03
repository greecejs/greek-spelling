import test from 'ava';

import normalize from '../src/normalize';

test('normalize', t => {
  t.same(normalize('άέήίϊΐόύϋΰώςΆΈ'), 'αεηιιιουυυωσαε');
});
