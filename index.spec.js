'use strict';

const cipherExercise = require('.');

const simple = {
  message: 'abc',
  shifted: 'cde'
};

const tricky = {
  message: 'xyz',
  shifted: 'zab'
};

const words = {
  message: 'abc abc',
  shifted: 'cde cde'
};

const complex = {
  message: 'my very secret message',
  shifted: 'oa xgta ugetgv oguucig'
};

describe('cipher-exercise', () => {
  const { decrypt, encrypt } = cipherExercise || {};

  it('is an object', () => expect(typeof cipherExercise).toBe('object'));
  it('has a decrypt property', () => expect(decrypt).toBeDefined());
  it('has a encrypt property', () => expect(encrypt).toBeDefined());

  describe('encrypt', () => {
    it('is a function', () => expect(typeof encrypt).toBe('function'));
    it('that takes 2 parameters', () => expect(encrypt).toHaveLength(2));

    describe('when called', () => {
      let result;

      describe('with a simple message', () => {
        beforeEach(() => {
          result = encrypt(simple.message, 3);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 3', () => expect(result).toBe('def'));
      });

      describe('with a tricky message', () => {
        beforeEach(() => {
          result = encrypt(tricky.message, 2);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 2 and wrap', () => expect(result).toBe(tricky.shifted));
      });

      describe('with a multi-word message', () => {
        beforeEach(() => {
          result = encrypt(words.message, 5);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters (but NOT spaces) are shifted by 5', () => expect(result).toBe('fgh fgh'));
      });

      describe('with a complex message', () => {
        beforeEach(() => {
          result = encrypt(complex.message, 2);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 2', () => expect(result).toBe(complex.shifted));
      });
    });
  });

  describe('decrypt', () => {
    it('is a function', () => expect(typeof decrypt).toBe('function'));
    it('that takes 2 parameters', () => expect(decrypt).toHaveLength(2));

    describe('when called, reverses the effects of encrypt', () => {
      let result;

      describe('with a simple message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(simple.message, 1), 1
          );
        });

        it('restores the message', () => expect(result).toBe(simple.message));
      });

      describe('with a tricky message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(tricky.message, 5), 5
          );
        });

        it('restores the message', () => expect(result).toBe(tricky.message));
      });

      describe('with a multi-word message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(words.message, 8), 8
          );
        });

        it('restores the message', () => expect(result).toBe(words.message));
      });

      describe('with a complex message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(complex.message, 20), 20
          );
        });

        it('restores the message', () => expect(result).toBe(complex.message));
      });
    });
  });
});
