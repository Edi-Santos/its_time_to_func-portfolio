const assert = require('assert');
const challanges = require('../challenges-2');

describe('Testando arquivo challenges-2.js', () => {
  it('função counter()', () => {
    const test = challanges.counter();

    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    assert.deepStrictEqual(test, expected);
  });
});
