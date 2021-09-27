'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26; // Might be useful

const shiftChar = (char, direction) => {
  if (char !== ' ') {
    let int = direction ? charToInt(char) + 2 : charToInt(char) - 2;
    if (int >= N) {
      return intToChar(int - N);
    } else if (int < 0) {
      return intToChar(int + N);
    } else {
      return intToChar(int);
    }
  } else {
    return char
  }
};

const encrypt = message => (
  message
    .split('')
    .map(char => shiftChar(char, 1))
    .join('')
);

const decrypt = message => (
  message
    .split('')
    .map(char => shiftChar(char, 0))
    .join('')
);;

module.exports = {
  decrypt,
  encrypt
};
