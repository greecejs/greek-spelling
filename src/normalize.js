/**
 * Lowercase, strip diacritics and replace final sigma from text.
 *
 * @param {string} text Text to normalize.
 * @return {string} Normalized text.
 */
export default function normalize(text) {
  return text
    .toLowerCase()
    .replace(/ά/g, 'α')
    .replace(/έ/g, 'ε')
    .replace(/ή/g, 'η')
    .replace(/[ίϊΐ]/g, 'ι')
    .replace(/ό/g, 'ο')
    .replace(/[ύϋΰ]/g, 'υ')
    .replace(/ώ/g, 'ω')
    .replace(/ς/g, 'σ');
}
