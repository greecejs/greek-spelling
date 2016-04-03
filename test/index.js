import test from 'ava';

import {toAlphabet, toPhonetic} from '../src/index';

test('can spell a phrase', t => {
  const PANGRAM = 'Ζαφείρι δέξου πάγκαλο, βαθών ψυχής το σήμα';
  const result = toAlphabet(PANGRAM);
  const expectedResult = ['ζήτα', 'άλφα', 'φι', 'έψιλον', 'ιώτα', 'ρώ', 'ιώτα',
    'κενό', 'δέλτα', 'έψιλον', 'ξι', 'όμικρον', 'ύψιλον', 'κενό', 'πι', 'άλφα',
    'γάμμα', 'κάππα', 'άλφα', 'λάμδα', 'όμικρον', 'κόμμα', 'κενό', 'βήτα',
    'άλφα', 'θήτα', 'ωμέγα', 'νυ', 'κενό', 'ψι', 'ύψιλον', 'χι', 'ήτα', 'σίγμα',
    'κενό', 'ταυ', 'όμικρον', 'κενό', 'σίγμα', 'ήτα', 'μυ', 'άλφα'];
  t.same(result, expectedResult);
});

test('can phonetic spell a phrase', t => {
  const result = toPhonetic('Αβγδέ123!');
  const expectedResult = ['αστήρ', 'Βύρων', 'γαλή', 'δόξα', 'Ερμής', 'ένα',
    'δύο', 'τρία', 'θαυμαστικό'];
  t.same(result, expectedResult);
});
