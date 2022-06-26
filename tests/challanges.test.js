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
});
