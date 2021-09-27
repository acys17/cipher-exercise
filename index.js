'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26; // Might be useful

const shiftChar = char => {
  let int = charToInt(char) + 2;
  int >= N ? int -= N : int;
  return (intToChar(int))
};

const encrypt = message => (
  message
    .split('')
    .map(shiftChar)
    .join('')
);

const decrypt = message => 'IMPLEMENT ME'; // Broken!

module.exports = {
  decrypt,
  encrypt
};
