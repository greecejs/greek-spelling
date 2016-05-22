# greek-spelling [![npm version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Coverage status][coveralls-image]][coveralls-url]

> Spell the characters of a greek text.

## Installation

```sh
npm install greek-spelling
```

In case you don't use a module bundler, there is a UMD build in the `dist` directory.

## Usage

```js
import {toAlphabet, toPhonetic} from 'greek-spelling';

console.log(toAlphabet('Αβγ'));
// [ 'άλφα', 'βήτα', 'γάμμα' ]
console.log(toPhonetic('Σε 1 λεπτό!'));
// [ 'σοφός',
//   'Ερμής',
//   'κενό',
//   'ένα',
//   'κενό',
//   'λάμα',
//   'Ερμής',
//   'Πέτρος',
//   'τίγρης',
//   'οσμή',
//   'θαυμαστικό' ]
```

## License

[MIT](http://opensource.org/licenses/mit-license.php)

[npm-image]: https://img.shields.io/npm/v/greek-spelling.svg
[npm-url]: https://npmjs.org/package/greek-spelling
[travis-image]: https://travis-ci.org/greecejs/greek-spelling.svg?branch=master
[travis-url]: https://travis-ci.org/greecejs/greek-spelling
[coveralls-image]: https://coveralls.io/repos/github/greecejs/greek-spelling/badge.svg
[coveralls-url]: https://coveralls.io/github/greecejs/greek-spelling
