const assert = require('assert');
const challenges = require('../others_challenges');

describe('Testando arquivo challenges-2.js', () => {
  it('Desafio 8 - função alternativeCalculator()', () => {
    const test1 = challenges.alternativeCalculator('+', 5, 3);
    const test2 = challenges.alternativeCalculator('-', 5, 3);
    const test3 = challenges.alternativeCalculator('*', 5, 3);
    const test4 = challenges.alternativeCalculator('/', 5, 2);
    const test5 = challenges.alternativeCalculator('$', 5, 3);

    const expected1 = 8;
    const expected2 = 2;
    const expected3 = 15;
    const expected4 = 2.5;
    const expected5 = 'Sinal inválido.';

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
    assert.deepStrictEqual(test4, expected4);
    assert.deepStrictEqual(test5, expected5);
  });

  it('Desafio 12 - função isPalindrome()', () => {
    const test1 = challenges.isPalindrome('ovo');
    const test2 = challenges.isPalindrome('pastel');
    const test3 = challenges.isPalindrome('reviver');
    const test4 = challenges.isPalindrome('blink du');
    const test5 = challenges.isPalindrome('subinoonibus');

    const expected1 = true;
    const expected2 = false;
    const expected3 = true;
    const expected4 = false;
    const expected5 = true;

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
    assert.deepStrictEqual(test4, expected4);
    assert.deepStrictEqual(test5, expected5);
  });
});
