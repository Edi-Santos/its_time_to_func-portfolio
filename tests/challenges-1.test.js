const assert = require('assert');
const challanges = require('../challenges-1');

describe('Testando arquivo challanges-1.js', () => {
  it('função studentStats()', () => {
    const test1 = challanges.studentStats(7);
    const test2 = challanges.studentStats(0);
    const test3 = challanges.studentStats(10);
    const test4 = challanges.studentStats(-1);
    const test5 = challanges.studentStats(11);

    const expected1 = 'Aluno em recuperação';
    const expected2 = 'Aluno reprovado.';
    const expected3 = 'Aluno aprovado';
    const expected4 = 'Nota inválida'

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
    assert.deepStrictEqual(test4, expected4);
    assert.deepStrictEqual(test5, expected4);
  });

  it('função calculator()', () => {
    const test1 = challanges.calculator('+', 5, 3);
    const test2 = challanges.calculator('-', 5, 3);
    const test3 = challanges.calculator('*', 5, 3);
    const test4 = challanges.calculator('/', 5, 2);

    const expected1 = 8;
    const expected2 = 2;
    const expected3 = 15;
    const expected4 = 2.5;

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
    assert.deepStrictEqual(test4, expected4);
  });

  it('função conversionTempMeasur()', () => {
    const test1 = challanges.conversionTempMeasur(30, 'celsius', 'kelvin');
    const test2 = challanges.conversionTempMeasur(30, 'celsius', 'fahrenheit');
    const test3 = challanges.conversionTempMeasur(292, 'kelvin', 'celsius');
    const test4 = challanges.conversionTempMeasur(292, 'kelvin', 'fahrenheit');
    const test5 = challanges.conversionTempMeasur(292, 'fahrenheit', 'celsius');
    const test6 = challanges.conversionTempMeasur(292, 'fahrenheit', 'kelvin');
    const test7 = challanges.conversionTempMeasur(0, "", "");

    const expected1 = 303;
    const expected2 = 86;
    const expected3 = 19;
    const expected4 = 66.2;
    const expected5 = 144.44444444444446;
    const expected6 = 417.44444444444446;
    const expected7 = "Dados incorrentos.";

    assert.deepStrictEqual(test1, expected1);
    assert.deepStrictEqual(test2, expected2);
    assert.deepStrictEqual(test3, expected3);
    assert.deepStrictEqual(test4, expected4);
    assert.deepStrictEqual(test5, expected5);
    assert.deepStrictEqual(test6, expected6);
    assert.deepStrictEqual(test7, expected7);
  });
});
