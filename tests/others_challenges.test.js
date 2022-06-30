const assert = require('assert');
const challenges = require('../others_challenges');
const funcsMock = require('./functionsMock');

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

  it('Desafio 9 - função asteriskSquare()', () => {
    const test1 = challenges.asteriskSquare(5);
    const test2 = challenges.asteriskSquare(2);
    const test3 = challenges.asteriskSquare(3);

    const expected1 = funcsMock.asteriskSquareMock(5);
    const expected2 = funcsMock.asteriskSquareMock(2);
    const expected3 = funcsMock.asteriskSquareMock(3);

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
  });
});
