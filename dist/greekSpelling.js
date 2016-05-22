(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.greekSpelling = global.greekSpelling || {})));
}(this, function (exports) { 'use strict';

  /**
   * Map of Greek letters to:
   *   - Letter name in Greek (letterName).
   *   - Spelling (phonetic) name in Greek (spellingName).
   */
  var letters = {
    'α': {
      letterName: 'άλφα',
      spellingName: 'αστήρ'
    },
    'β': {
      letterName: 'βήτα',
      spellingName: 'Βύρων'
    },
    'γ': {
      letterName: 'γάμμα',
      spellingName: 'γαλή'
    },
    'δ': {
      letterName: 'δέλτα',
      spellingName: 'δόξα'
    },
    'ε': {
      letterName: 'έψιλον',
      spellingName: 'Ερμής'
    },
    'ζ': {
      letterName: 'ζήτα',
      spellingName: 'Ζεύς'
    },
    'η': {
      letterName: 'ήτα',
      spellingName: 'Ηρώ'
    },
    'θ': {
      letterName: 'θήτα',
      spellingName: 'θεά'
    },
    'ι': {
      letterName: 'ιώτα',
      spellingName: 'ίσκιος'
    },
    'κ': {
      letterName: 'κάππα',
      spellingName: 'κενό'
    },
    'λ': {
      letterName: 'λάμδα',
      spellingName: 'λάμα'
    },
    'μ': {
      letterName: 'μυ',
      spellingName: 'μέλι'
    },
    'ν': {
      letterName: 'νυ',
      spellingName: 'ναός'
    },
    'ξ': {
      letterName: 'ξι',
      spellingName: 'Ξέρξης'
    },
    'ο': {
      letterName: 'όμικρον',
      spellingName: 'οσμή'
    },
    'π': {
      letterName: 'πι',
      spellingName: 'Πέτρος'
    },
    'ρ': {
      letterName: 'ρώ',
      spellingName: 'ρήγας'
    },
    'σ': {
      letterName: 'σίγμα',
      spellingName: 'σοφός'
    },
    'τ': {
      letterName: 'ταυ',
      spellingName: 'τίγρης'
    },
    'υ': {
      letterName: 'ύψιλον',
      spellingName: 'ύμνος'
    },
    'φ': {
      letterName: 'φι',
      spellingName: 'Φωφώ'
    },
    'χ': {
      letterName: 'χι',
      spellingName: 'χαρά'
    },
    'ψ': {
      letterName: 'ψι',
      spellingName: 'ψυχή'
    },
    'ω': {
      letterName: 'ωμέγα',
      spellingName: 'ωμέγα'
    }
  };

  /** Map of numbers to Greek name. */
  var numbers = {
    0: 'μηδέν',
    1: 'ένα',
    2: 'δύο',
    3: 'τρία',
    4: 'τέσσερα',
    5: 'πέντε',
    6: 'έξι',
    7: 'εφτά',
    8: 'οχτώ',
    9: 'εννιά'
  };

  /** Map of punctuation marks to Greek name. */
  var punctuationMarks = {
    '·': 'άνω τελεία',
    ':': 'άνω και κάτω τελεία',
    '…': 'αποσιωπητικά',
    "'": 'απόστροφος',
    '«': 'εισαγωγικά',
    '»': 'εισαγωγικά',
    '-': 'ενωτικό',
    ';': 'ερωτηματικό',
    '!': 'θαυμαστικό',
    ',': 'κόμμα',
    '(': 'παρένθεση',
    ')': 'παρένθεση',
    '—': 'παύλα',
    '.': 'τελεία',
    ' ': 'κενό'
  };

  /**
   * Lowercase, strip diacritics and replace final sigma from text.
   *
   * @param {string} text Text to normalize.
   * @return {string} Normalized text.
   */
  function normalize(text) {
    return text.toLowerCase().replace(/ά/g, 'α').replace(/έ/g, 'ε').replace(/ή/g, 'η').replace(/[ίϊΐ]/g, 'ι').replace(/ό/g, 'ο').replace(/[ύϋΰ]/g, 'υ').replace(/ώ/g, 'ω').replace(/ς/g, 'σ');
  }

  /**
   * Convert a text to a list of names for each character.
   *
   * @param {string} text Text to convert.
   * @param {string} kind Type of spelling name to use.
   * @return {array} Array with the names.
   */
  function convert(text, kind) {
    var lettersMap = Object.keys(letters).reduce(function (prev, curr) {
      prev[curr] = letters[curr][kind];
      return prev;
    }, {});
    var covertionMap = Object.assign({}, lettersMap, numbers, punctuationMarks);
    var nomalizedText = normalize(text);
    return nomalizedText.split('').map(function (char) {
      return covertionMap[char];
    });
  }

  /**
   * Spell out a text.
   *
   * @param {string} text Text to spell out.
   * @return {array} Array with the name for each character.
   */
  function toAlphabet(text) {
    return convert(text, 'letterName');
  }

  /**
   * Spell out a text using the Greek spelling (phonetic) alphabet.
   *
   * @param {string} text Text to spell out.
   * @return {array} Array with the phonetic name for each character.
   */
  function toPhonetic(text) {
    return convert(text, 'spellingName');
  }

  exports.toAlphabet = toAlphabet;
  exports.toPhonetic = toPhonetic;

}));
//# sourceMappingURL=greekSpelling.js.map