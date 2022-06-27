const assert = require('assert');
const challanges = require('../challenges-2');

describe('Testando arquivo challenges-2.js', () => {
  it('função counter()', () => {
    const test = challanges.counter();

    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    assert.deepStrictEqual(test, expected);
  });

  it('função howMuchWords()', () => {
    const test1 = challanges.howMuchWords('Meu pastel é mais barato');
    const test2 = challanges.howMuchWords('É melhor morrer do que perder a vida');
    const test3 = challanges.howMuchWords('Cê filma e fala. Cê é o bixão memo, hein');

    const expected1 = `A frase tem 20 letras.`;
    const expected2 = `A frase tem 29 letras.`;
    const expected3 = `A frase tem 31 letras.`;

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
  });

  it('função letterMoreUsed()', () => {
    const test1 = challanges.letterMoreUsed('Meu pastel é mais barato');
    const test2 = challanges.letterMoreUsed('É melhor morrer do que perder a vida');
    const test3 = challanges.letterMoreUsed('Cê filma e fala. Cê é o bixão memo, hein');

    const expected1 = `A letra mais usada foi "a"`;
    const expected2 = `A letra mais usada foi "r"`;
    const expected3 = `A letra mais usada foi "i"`;

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
  });
});
