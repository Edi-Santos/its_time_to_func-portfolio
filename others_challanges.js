// Desafio 8 - Escreva uma função que cumpra o Desafio 2 sem usar if/else ou switch/case.
function alternativeCalculator(sign, n1, n2) {
  const operations = {
    '+': n1 + n2,
    '-': n1 - n2,
    '*': n1 * n2,
    '/': n1 / n2,
  };

  return operations[sign];
}
