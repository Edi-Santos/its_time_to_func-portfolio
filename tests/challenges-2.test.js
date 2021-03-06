const assert = require('assert');
const challanges = require('../challenges-2');

describe('Testando arquivo challenges-2.js', () => {
  it('Desafio 4 - função counter()', () => {
    const test = challanges.counter();

    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    assert.deepStrictEqual(test, expected);
  });

  it('Desafio 5 - função howMuchWords()', () => {
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

  it('Desafio 6 - função letterMoreUsed()', () => {
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

  it('Desafio 7 - função biggestElement()', () => {
    const array1 = ['Mortal Kombat 9', 'Assassin\'s Creed', 'God Of War'];
    const array2 = ['Batata', 'Tomate', 'Espinafre'];
    const array3 = ['Macarrão', 'Lasanha', 'Strogonoff'];

    const test1 = challanges.biggestElement(array1);
    const test2 = challanges.biggestElement(array2);
    const test3 = challanges.biggestElement(array3);

    const expected1 = 'O maior elemento é "Assassin\'s Creed"';
    const expected2 = 'O maior elemento é "Espinafre"';
    const expected3 = 'O maior elemento é "Strogonoff"';

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
  });
});
