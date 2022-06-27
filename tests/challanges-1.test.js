const assert = require('assert');
const challanges = require('../challanges-1');

describe('Testando arquivo challanges-1.js', () => {
  it('função studentStats()', () => {
    const teste1 = challanges.studentStats(7);
    const teste2 = challanges.studentStats(0);
    const teste3 = challanges.studentStats(10);

    const expected1 = 'Aluno em recuperação';
    const expected2 = 'Aluno reprovado.';
    const expected3 = 'Aluno aprovado';
    

    assert.deepStrictEqual(teste1, expected1);
    assert.deepStrictEqual(teste2, expected2);
    assert.deepStrictEqual(teste3, expected3);
  });

  it('função calculator()', () => {
    const teste1 = challanges.calculator('+', 5, 3);
    const teste2 = challanges.calculator('-', 5, 3);
    const teste3 = challanges.calculator('*', 5, 3);
    const teste4 = challanges.calculator('/', 5, 2);

    const expected1 = 8;
    const expected2 = 2;
    const expected3 = 15;
    const expected4 = 2.5;

    assert.deepStrictEqual(teste1, expected1);
    assert.deepStrictEqual(teste2, expected2);
    assert.deepStrictEqual(teste3, expected3);
    assert.deepStrictEqual(teste4, expected4);
  });

  it('função conversionTempMeasur()', () => {
    const teste1 = challanges.conversionTempMeasur(30, 'celsius', 'kelvin');
    const teste2 = challanges.conversionTempMeasur(30, 'celsius', 'fahrenheit');
    const teste3 = challanges.conversionTempMeasur(292, 'kelvin', 'celsius');
    const teste4 = challanges.conversionTempMeasur(292, 'kelvin', 'fahrenheit');
    const teste5 = challanges.conversionTempMeasur(292, 'fahrenheit', 'celsius');
    const teste6 = challanges.conversionTempMeasur(292, 'fahrenheit', 'kelvin');
    const teste7 = challanges.conversionTempMeasur(0, "", "");

    const expected1 = 303;
    const expected2 = 86;
    const expected3 = 19;
    const expected4 = 66.2;
    const expected5 = 144.44444444444446;
    const expected6 = 417.44444444444446;
    const expected7 = "Dados incorrentos.";

    assert.deepStrictEqual(teste1, expected1);
    assert.deepStrictEqual(teste2, expected2);
    assert.deepStrictEqual(teste3, expected3);
    assert.deepStrictEqual(teste4, expected4);
    assert.deepStrictEqual(teste5, expected5);
    assert.deepStrictEqual(teste6, expected6);
    assert.deepStrictEqual(teste7, expected7);
  });
});
