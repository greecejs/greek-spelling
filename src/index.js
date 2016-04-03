import letters from './definitions/letters';
import numbers from './definitions/numbers';
import punctuationMarks from './definitions/punctuationMarks';
import normalize from './normalize';

/**
 * Convert a text to a list of names for each character.
 *
 * @param {string} text Text to convert.
 * @param {string} kind Type of spelling name to use.
 * @return {array} Array with the names.
 */
function convert(text, kind) {
  const lettersMap = Object.keys(letters).reduce((prev, curr) => {
    prev[curr] = letters[curr][kind];
    return prev;
  }, {});
  const covertionMap = Object.assign(lettersMap, numbers, punctuationMarks);
  const nomalizedText = normalize(text);
  return nomalizedText.split('').map(char => covertionMap[char]);
}

/**
 * Spell out a text.
 *
 * @param {string} text Text to spell out.
 * @return {array} Array with the name for each character.
 */
export function toAlphabet(text) {
  return convert(text, 'letterName');
}

/**
 * Spell out a text using the Greek spelling (phonetic) alphabet.
 *
 * @param {string} text Text to spell out.
 * @return {array} Array with the phonetic name for each character.
 */
export function toPhonetic(text) {
  return convert(text, 'spellingName');
}
