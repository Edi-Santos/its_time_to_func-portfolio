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

// Desafio 9 - Escraba uma função que imprima um quadrado de "*"
function asteriskSquare(n) {
  let asterisk = "";

  for (let i = 0; i < n; i += 1) {
    for (let ii = 0; ii < n; ii += 1) {
      asterisk += "*";
    }
    console.log(asterisk);
    asterisk = "";
  }
}
